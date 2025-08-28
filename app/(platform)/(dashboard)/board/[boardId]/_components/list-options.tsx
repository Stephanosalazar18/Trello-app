"use client"

import { List } from "@/lib/generated/prisma/client"
import { toast } from "sonner"
import { useRef } from "react"

import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { FormSubmit } from "@/components/form/form-submit"
import { Separator } from "@radix-ui/react-separator"
import { MoreHorizontal, X } from "lucide-react"

import { useAction } from "@/hooks/use-action"
import { deleteList } from "@/actions/delete-list"
import { copyList } from "@/actions/copy-card"


interface ListOptionsProps {
  onAddCard: () => void
  data: List
}

export const ListOptions = ({
  onAddCard,
  data
}: ListOptionsProps) => {
  const closeRef = useRef<HTMLButtonElement>(null)

  const { execute: executeDelete } = useAction(deleteList, {
    onSuccess: () => {
      toast.success(`List "${data.title}" deleted`)
      closeRef.current?.click()
    },
    onError: (error) => {
      toast.error(error)
    }
  })

  const { execute: executeCopy } = useAction(copyList, {
    onSuccess: () => {
      toast.success(`List "${data.title}" copied`)
      closeRef.current?.click()
    },
    onError: (error) => {
      toast.error(error)
    }
  })

  const onDelete = (formData: FormData) => {
    const id = formData.get("id") as string
    const boardId = formData.get("boardId") as string

    executeDelete({
      id,
      boardId
    })
  }

  const onCopy = (formData: FormData) => {
    const id = formData.get("id") as string
    const boardId = formData.get("boardId") as string

    executeCopy({
      id,
      boardId
    })
  }




  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="h-auto w-auto p-2" variant="ghost">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="px-0 pt-3 pb-3"
        side="bottom"
        align="start"
      >
        <div className="text-sm font-medium text-center text-neutral-600 pb-4">
          list acitons
        </div>
        <PopoverClose
          ref={closeRef}
          asChild
        >
          <Button
            variant="ghost"
            className="h-auto w-auto p-2"
          >
            <X className="h-4 w-4" />
          </Button>
        </PopoverClose>
        <Button
          onClick={onAddCard}
          className="rounded-none w-full h-auto px-5 justify-start font-normal text-sm"
          variant="ghost"
        >
          Add card...
        </Button>
        <form
          action={onCopy}
        >
          <input hidden name="id" value={data.id} id="id" />
          <input hidden name="boardId" value={data.boardId} id="boardId" />
          <FormSubmit
            variant="ghost"
            className="rounded-none w-full h-auto p-2 px-5 justify-start
            font-normal text-sm"
          >
            Copy list...
          </FormSubmit>
        </form>
        <Separator />
        <form
          action={onDelete}
        >
          <input hidden name="id" value={data.id} id="id" />
          <input hidden name="boardId" value={data.boardId} id="boardId" />
          <FormSubmit
            variant="ghost"
            className="rounded-none w-full h-auto p-2 px-5 justify-start
            font-normal text-sm"
          >
            Delete this list
          </FormSubmit>
        </form>
      </PopoverContent>
    </Popover>

  )
}