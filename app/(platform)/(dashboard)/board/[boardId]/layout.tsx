import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs/server"
import { notFound } from "next/navigation"
import BoardNavbar from "./_components/board-navbar"

export async function generateMetadata({ params }: { params: { boardId: string } }) {
  const { orgId } = await auth()

  if (!orgId) {
    return {
      title: "Board",
      // Ensure no invalid React child is returned if orgId is missing
      // This part is for metadata, but returning an empty object could be problematic if misused.
      // Explicitly returning a valid metadata object.
    }
  }

  const board = await db.board.findUnique({
    where: {
      id: params.boardId,
      orgId
    },
  })

  return {
    title: board?.title || "Board"
  }
}

const BoardIdLayout = async ({
  children,
  params
}: {
  children: React.ReactNode,
  params: { boardId: string }
}) => {
  const board = await db.board.findUnique({
    where: {
      id: params.boardId
    },
  })

  if (!board) {
    notFound()
  }

  return (
    <div className="relative min-h-screen w-full">

      <div
        className="fixed inset-0 -z-10 bg-no-repeat bg-cover bg-center brightness-90"
        style={{ backgroundImage: `url(${board.imageFullUrl})` }}
        aria-hidden="true"
      />
      <BoardNavbar data={board} />
      <div className="absolute " />
      <main className="relative pt-28 h-full">
        {children}
      </main>
    </div>
  )
}

export default BoardIdLayout
