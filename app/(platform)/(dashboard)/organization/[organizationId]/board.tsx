import { deleteBoard } from "@/actions/delete-board"
import { FormDelete } from "./form-delete"


interface BoardProps {
  title: string
  id: string
}

export const Board = ({
  title,
  id,
}: BoardProps) => {

  const deleteBoardWhitId = deleteBoard.bind(null, id)

  return (
    <form action={deleteBoardWhitId} className="flex items-center gap-x-2">
      <p>
        board: {title}
      </p>
      <FormDelete />
    </form>

  )
}