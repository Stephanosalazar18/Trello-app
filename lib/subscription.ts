import { auth } from "@clerk/nextjs/server"

import { db }from "@/lib/db"

const DAY_IN_MS = 84_400_000

export const checkSubscription = async () => {
  const {orgId} = await auth()

  if (!orgId) {
    return false
  }

  const orgSubscription = await db.orgSubscription.findUnique({
    where: {
      orgId
    },
    select: {
      stripeCustomerId: true,
      stripeSubscriptionId: true,
      stripePriceId: true,
      stripeCurrentPeriodEnd: true
    }
  })

  if (!orgSubscription) {
    return false
  }

  const isValid = 
    orgSubscription.stripePriceId &&
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    orgSubscription.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS > Date.now()

    return !!isValid
}