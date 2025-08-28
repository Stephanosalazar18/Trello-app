import {z} from "zod"

export const CreateCard = z.object({
  title: z.string()
    .nonempty("Title is required")
    .min(1, { message: "Title is too short" }),
  boardId: z.string(),
  listId: z.string(),
})