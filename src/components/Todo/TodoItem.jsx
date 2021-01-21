import React from 'react'
import classNames from 'classnames'
export default function TodoItem({ todo, index, remove, complete, completed }) {
  console.log(completed)
  return (
    <li
      className={classNames({
        todo_item: true,
        complete: completed,
      })}
    >
      {todo}
      <div className="btns">
        <button onClick={() => complete(index)} className="btn " type="submit">
          <i className="material-icons">done</i>
        </button>
        <button className="btn " onClick={() => remove(index)} type="submit">
          <i className="material-icons">delete_forever</i>
        </button>
      </div>
    </li>
  )
}
