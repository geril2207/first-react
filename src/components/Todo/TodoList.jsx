import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({ todos, onClick, dispatch }) {
  return (
    <div>
      <h3 className="center">Список Todo</h3>
      <ul className="todo__list">
        {todos.length !== 0 ? (
          todos.map((item, i) => (
            <TodoItem
              remove={(index) => dispatch({ type: 'remove', todo: { index } })}
              complete={(index) => dispatch({ type: 'complete', todo: { index } })}
              key={`${item}_${i}`}
              todo={item.todo}
              index={item.id}
              completed={item.completed}
            />
          ))
        ) : (
          <p>Список Todo пуст. Создайте Todo</p>
        )}
      </ul>
    </div>
  )
}
