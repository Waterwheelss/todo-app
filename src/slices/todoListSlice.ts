import { createSlice, nanoid } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

export type TodoType = {
  id: string,
  text: string,
  checked: boolean,
  positionInList?: number,
}

type TodoList = Array<TodoType>

type MovoTodoPayload = {
  fromId: string,
  toId: string,
}

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState: [] as TodoList,
  reducers: {
    addList: {
      reducer: (state, action: PayloadAction<TodoType>) => {
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
    moveTodo: (state, action: PayloadAction<MovoTodoPayload>) => {
      const { fromId, toId } = action.payload;
      const fromIndex = state.findIndex(todo => todo.id === fromId);
      const toIndex = state.findIndex(todo => todo.id === toId);
      const tempTodo = state[toIndex];
      state[toIndex] = state[fromIndex];
      state[fromIndex] = tempTodo;
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
  moveTodo,
  clearCompletedTodo,
  toggleTodo,
} = todoListSlice.actions;

export default todoListSlice.reducer;