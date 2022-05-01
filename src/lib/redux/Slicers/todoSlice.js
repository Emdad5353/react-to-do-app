import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  todos: [],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTodos: (state, {payload}) => {
      state.todos = payload
    },
    addTodo: (state, {payload}) => {
      state.todos.push(payload)
    },
    updateTodo: (state, {payload}) => {
      state.todos[payload.index] = payload.text
    },
    deleteTodo: (state, {payload: id}) => {
      console.log(id)
      const index = state.todos.indexOf(todo => todo.id === id)
      console.log(index)
      if (index !== -1) {
        state.todos.splice(index, 1)
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const {setTodos, addTodo, updateTodo, deleteTodo} = todoSlice.actions

export default todoSlice.reducer