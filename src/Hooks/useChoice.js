import { useState } from 'react'

export function useChoice(defaultChoice) {
  const [value, setValue] = useState(defaultChoice)

  function onChange(event) {
    setValue(event.target.value)
  }
  return {
    value,
    onChange,
  }
}
