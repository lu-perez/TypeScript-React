import React from 'react'
import { useNewSubForm } from '../hooks/useNewSubForm'
import { Sub } from '../types'

interface FormProps {
  onNewSub: (newSub: Sub) => void
}

const FormWithReducer = ({ onNewSub }: FormProps) => {
  const [inputValues, dispatch] = useNewSubForm()

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = evt.target
    dispatch({
      type: 'change_value',
      payload: {
        inputName: name,
        inputValue: value
      }
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onNewSub(inputValues)
    dispatch({ type: 'clear' })
  }

  const handleClear = () => {
    dispatch({ type: 'clear' })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={inputValues.name}
          type="text" name="name"
          placeholder="name"
          onChange={handleChange} />
        <input
          value={inputValues.subMonths}
          type="number" name="subMonths"
          placeholder="subMonths" 
          onChange={handleChange} />
        <input 
          value={inputValues.avatar}
          type="text"
          name="avatar"
          placeholder="avatar"
          onChange={handleChange} />
        <textarea
          value={inputValues.description}
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
