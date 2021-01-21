import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({ todos, onClick, dispatch }) {
  return (
    <div>
      <h3 className="center">Список Todo</h3>
      <ul>
        {todos.length !== 0 ? (
          todos.map((elem, index) => (
            <TodoItem
              click={(input) => dispatch({ type: 'remove', todo: { input } })}
              key={`${elem}_${index}`}
              todo={elem}
              index={index}
            />
          ))
        ) : (
          <p>Список Todo пуст. Создайте Todo</p>
        )}
      </ul>
    </div>
  )
}
