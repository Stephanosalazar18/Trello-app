"use server"

import { auth } from "@clerk/nextjs/server"
import { InputType, ReturnType } from "./types"
import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { createSafeAction } from "@/lib/create-safe-action"
import { CreateBoard } from "./schema"
import { createAuditLog } from "@/lib/create-audit-log"
import { ACTION, ENTITY_TYPE } from "@/lib/enums"
import { incrementAvailableCount, hasAvailableCount } from "@/lib/org-limit"

// const handler: (data: InputType) => Promise<ReturnType> = async(data) => {
const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = await auth()

  console.log("USER:", userId);

  if(!userId  || !orgId) {
    return {
      error: "Unauthorized"
    };
  }

  const canCreate = await hasAvailableCount()

  if (!canCreate) {
    return {
      error: "You have reached the maximum number of boards allowed"
    }
  }

  const { title, image } = data

  const [
    imageId,
    imageThumbUrl,
    imageFullUrl,
    imageLinkHtml,
    imageUserName
  ] = image.split("|")

  console.log("IMAGE:",{ imageId, imageThumbUrl, imageFullUrl, imageLinkHtml, imageUserName}); 
  

  if (!imageId || !imageThumbUrl || !imageFullUrl || !imageLinkHtml || !imageUserName) {
    return {
      error: "Missign fields. Failed to create board"
    }
  }

  let board

  try {
    board = await db.board.create({
      data: {
        title,
        orgId,
        imageId,      
        imageThumbUrl,
        imageFullUrl, 
        imageUserName,
        imageLinkHtml,
      }
    })

    await incrementAvailableCount()

    await createAuditLog({
      entityTitle: board.title,
      entityId: board.id,
      entityType: ENTITY_TYPE.BOARD,
      action: ACTION.CREATE
            })

  } catch (error) {
    console.log(error);
    
    return {
      error: "Database Error"
    }
  }

  revalidatePath(`/board/${board.id}`) 
  return {
    data: board,
  };

}

export const createBoard = createSafeAction(CreateBoard, handler)

