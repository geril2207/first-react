import React, { useState } from 'react'

export default function CreateTodo({ onClick }) {
  const [input, setInput] = useState('')

  const handleChange = (event) => {
    setInput(event.target.value)
  }
  const createTodo = (input) => {
    if (input === '') {
      alert('Введите название Todo')
    } else {
      onClick(input)
      setInput('')
    }
  }
  return (
    <div className="row">
      <input
        placeholder="Create Todo"
        id="create_todo"
        type="text"
        className="validate"
        value={input}
        onChange={handleChange}
      />
      <button
        className="btn waves-effect waves-light"
        type="submit"
        name="action"
        onClick={() => createTodo(input)}
      >
        Добавить
        <i className="material-icons right">add_task</i>
      </button>
    </div>
  )
}
