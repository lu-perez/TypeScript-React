import React from 'react'
import { useNewSubForm } from '../hooks/useNewSubForm'
import { Sub } from '../types'

interface FormProps {
  onNewSub: (newSub: Sub) => void
}

const FormWithReducer = ({ onNewSub }: FormProps) => {
  const { formState, changeValue, clearForm } = useNewSubForm()

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = evt.target
    changeValue({ inputName: name, inputValue: value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onNewSub(formState)
    clearForm()
  }

  const handleClear = () => {
    clearForm()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={formState.name}
          type="text" name="name"
          placeholder="name"
          onChange={handleChange} />
        <input
          value={formState.subMonths}
          type="number" name="subMonths"
          placeholder="subMonths" 
          onChange={handleChange} />
        <input 
          value={formState.avatar}
          type="text"
          name="avatar"
          placeholder="avatar"
          onChange={handleChange} />
        <textarea
          value={formState.description}
          name="description"
          placeholder="description"
          onChange={handleChange} />
        <button type="button" onClick={handleClear}>Clear Form</button>
        <input type="submit" />
      </form>
    </div>
  )
}

export default FormWithReducer
