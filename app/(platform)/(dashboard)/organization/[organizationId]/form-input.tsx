"use client"

import { useFormStatus } from "react-dom"
import { Input } from "@/components/ui/input"

interface FormeInputProps {
  errors?: {
    title?: string[]
  }
}

export const FormInput = ({errors}: FormeInputProps) => {
  const { pending } = useFormStatus()
  return (
    <div>
      <Input
          id="title"
          name="title"
          required
          placeholder="Enter a board title"
          className="border-black border p-1"
          disabled={pending}
        />
        {errors?.title ? (
          <div>
            {errors.title.map((error: string) => (
              <p key={error} className="text-rose-500">
                {error}
              </p>
            ))}
          </div>
        ): null }
    </div>
  )
}