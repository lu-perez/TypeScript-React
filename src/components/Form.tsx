import React, { useState } from 'react'

const Form = () => {
  const [inputValues, setInputValues] = useState({
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
    console.log(e)
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
