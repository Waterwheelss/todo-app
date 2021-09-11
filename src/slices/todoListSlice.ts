import { createSlice, nanoid } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

export type Todo = {
  id: string,
  text: string,
  checked: boolean,
}

type TodoList = Array<Todo>

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState: [] as TodoList,
  reducers: {
    addList: {
      reducer: (state, action: PayloadAction<Todo>) => {
        state.push(action.payload);
      },
      prepare: (text: string) => {
        return {
          payload: {
            id: nanoid(),
            text,
            checked: false,
          }
        }
      }
    },
    clearCompletedTodo: (state) => {
      return state.filter(todo => todo.checked === false);
    },
    toggleTodo: (state, action: PayloadAction<string>) => state.map(todo => {
      if (todo.id === action.payload) {
        return {
          ...todo,
          checked: !todo.checked,
        }
      }

      return todo
    }),
  }
})

export const {
  addList,
  clearCompletedTodo,
  toggleTodo,
} = todoListSlice.actions;

export default todoListSlice.reducer;