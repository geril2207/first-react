import React from 'react'

export default function TodoItem({ todo, index, click }) {
  return (
    <li className="todo_item">
      {index + 1}.{todo}
      <button className="btn " type="submit">
        <i className="material-icons">done</i>
      </button>
      <button className="btn " onClick={() => click(index)} type="submit">
        <i className="material-icons">delete_forever</i>
      </button>
    </li>
  )
}
