import React, { useReducer } from 'react'
import CreateTodo from './CreateTodo'
import TodoList from './TodoList'
export default function Todo() {
  const initialState = {
    todos: [
      { id: 0, todo: 'Redux' },
      { id: 1, todo: 'React' },
    ],
  }
  function todosReducer(state, action) {
    switch (action.type) {
      case 'add':
        const newTodo = { id: state.todos.length, todo: action.todo.input }
        return { todos: [...state.todos, newTodo] }
      case 'remove':
        return {
          todos: state.todos.filter((item) => item.id !== action.todo.index),
        }
      default:
        throw new Error()
    }
  }
  const [state, dispatch] = useReducer(todosReducer, initialState)
  return (
    <div className="container mt-5 ">
      <CreateTodo
        onClick={(input) => dispatch({ type: 'add', todo: { input } })}
      />

      <TodoList dispatch={dispatch} todos={state.todos} />
    </div>
  )
}
