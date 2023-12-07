"use client"

import { create } from "@/actions/create-board"
import { useFormState } from "react-dom"
import { FormInput } from "./form-input"
import { FormButton } from "./form-button"

export const Form = () => {
  const inicialState = { message: '', errors: {}}
  const [state, dispatch] = useFormState(create, inicialState)
  return (
    <div className="flex flex-col space-y-2">
      <form action={dispatch}>
        <FormInput errors={state?.errors}/>
        <FormButton />
      </form>
    </div>
    
  )
}