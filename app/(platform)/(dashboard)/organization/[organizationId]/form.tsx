"use client"

import { create } from "@/actions/create-board"
import { FormInput } from "./form-input"
import { FormButton } from "./form-button"
import { useActionState } from "react"

export const Form = () => {

  const initialState = { message: "", errors: {} }
  const [state, dispatch] = useActionState(create, initialState)

  return (
    <form action={dispatch} className="space-y-2">
      <div className="flex flex-col space-y-2">
        <FormInput errors={state?.errors} />
      </div>
      <FormButton />
    </form>
  )
}