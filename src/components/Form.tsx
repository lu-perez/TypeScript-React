import React, { useState } from 'react'
import { Sub } from '../types'

interface FormState {
  inputValue: Sub
}

interface FormProps {
  onNewSub: (newSub: Sub) => void
}

const Form = ({ onNewSub }: FormProps) => {
  const [inputValues, setInputValues] = useState<FormState['inputValue']>({
    name: '',
    subMonths: 0,
    avatar: '',
    description: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onNewSub(inputValues)
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
        <input type="submit" />
      </form>
    </div>
  )
}

export default Form
