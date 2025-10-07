import { db } from "@/lib/db";
import { ENTITY_TYPE } from "@/lib/generated/prisma/client";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { cardId: string } }
) {
  try {
    const { userId, orgId } = await auth()

    console.log("USER ID --------------------------------")
    console.log(userId);
    console.log("ORG ID --------------------------------")
    console.log(orgId);
    console.log("--------------------------------")
    console.log("PARAMS --------------------------------")
    console.log( await params);

    if(!userId || !orgId) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const auditLogs = await db.auditLog.findMany({
      where: {
        orgId,
        entityId: params.cardId,
        entityType: ENTITY_TYPE.CARD,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 1,
    })

    return NextResponse.json(auditLogs)

  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 })
  }
} 