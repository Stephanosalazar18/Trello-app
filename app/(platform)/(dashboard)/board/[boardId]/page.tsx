import { auth } from "@clerk/nextjs/server"
import { db } from "@/lib/db"

import { ListContainer } from "./_components/list-container"

interface BoardIdPageProps {
  params: {
    boardId: string
  }
}

const BoardIdPage = async ({
  params
}: BoardIdPageProps) => {

  const { orgId } = await auth()

  if (!orgId) {
    // Returning null or a loading state is appropriate when a redirect is intended but not yet implemented.
    // An empty object is not a valid React child.
    return null
  }

  const lists = await db.list.findMany({
    where: {
      boardId: params.boardId,
      board: {
        orgId
      }
    },
    include: {
      cards: {
        orderBy: {
          order: "asc"
        }
      }
    },
    orderBy: {
      order: "asc"
    }
  })

  return (
    <div className="p-4 h-full overflow-x-auto">
      <ListContainer
        boardId={params.boardId}
        data={lists}
      />
    </div>
  )
}

export default BoardIdPage
