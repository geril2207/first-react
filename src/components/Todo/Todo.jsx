import React, { useReducer } from 'react'
import CreateTodo from './CreateTodo'
import TodoList from './TodoList'
export default function Todo() {
  const initialState = { todos: ['Redux'] }
  function todosReducer(state, action) {
    switch (action.type) {
      case 'add':
        return { todos: [...state.todos, action.todo.input] }
      case 'remove':
        console.log(state.todos)
        console.log(state.todos.indexOf(action.todo.input))
        return {
          todos: state.todos.filter((item) => item !== action.todo.input),
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
