import React, { useState } from 'react'
import InputFormClass from './InputForm.module.css'

const InputForm = (props) => {
  const [input, setInput] = useState('')

  const submitHandler = (event) => {
    event.preventDefault()

    if (input.trim().length === 0) {
      return
    }
    setInput('')
    props.onAdd(input)
  }

  return (
    <form onSubmit={submitHandler} className={InputFormClass['input-form']}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button>+</button>
    </form>
  )
}

export default InputForm
