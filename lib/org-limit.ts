import { auth } from "@clerk/nextjs/server"
import { db } from "./db"
import { MAX_FREE_BOARDS } from "@/constants/boards"


export const incrementAvailableCount = async () => {
  const { orgId } = await auth()
  if (!orgId) throw new Error("Unauthorized")
  try {
    const orgLimit = await db.orgLimit.findUnique({ where: { orgId } })
    if (orgLimit) {
      await db.orgLimit.update({ where: { orgId }, data: { count: orgLimit.count + 1 } })
    } else {
      await db.orgLimit.create({ data: { orgId, count: 1 } })
    }
  } catch (e) {
    console.error('[incrementAvailableCount] Prisma error:', e)
    throw e
  }
}

export const decrementAvailableCount = async () => {
  const { orgId } = await auth()
  if (!orgId) throw new Error("Unauthorized")
  try {
    const orgLimit = await db.orgLimit.findUnique({ where: { orgId } })
    if (orgLimit) {
      await db.orgLimit.update({
        where: { orgId },
        data: { count: orgLimit.count > 0 ? orgLimit.count - 1 : 0 }
      })
    } else {
      await db.orgLimit.create({ data: { orgId, count: 1 } })
    }
  } catch (e) {
    console.error('[decrementAvailableCount] Prisma error:', e)
    throw e
  }
}

export const hasAvailableCount = async () => {
  const { orgId } = await auth()
  if (!orgId) throw new Error("Unauthorized")
  try {
    const orgLimit = await db.orgLimit.findUnique({ where: { orgId } })
    return !orgLimit || orgLimit.count < MAX_FREE_BOARDS
  } catch (e) {
    console.error('[hasAvailableCount] Prisma error:', e)
    throw e
  }
}

export const getAvailableCount = async () => {
  const { orgId } = await auth()
  if (!orgId) return 0
  try {
    const orgLimit = await db.orgLimit.findUnique({ where: { orgId } })
    return orgLimit ? orgLimit.count : 0
  } catch (e) {
    console.error('[getAvailableCount] Prisma error:', e)
    return 0
  }
}