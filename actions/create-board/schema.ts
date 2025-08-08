import { z } from "zod";


export const CreateBoard = z.object({
  title: z.string()
    .nonempty("Title is required")
    .min(3, { 
      message: "Title is too short" 
    }),
  image: z.string()
    .nonempty("Image is required")
})