import React from 'react'

export default function TodoItem({ todo, index, click }) {
  return (
    <li>
      {index + 1}.{todo}
      <input type="checkbox" />
      <button onClick={() => click(index)} type="submit">
        Удалить
      </button>
    </li>
  )
}
