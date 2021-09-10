import { combineReducers } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import todoListReducer from './slices/todoListSlice';

const rootReducer = combineReducers({
  todoList: todoListReducer,
  theme: themeReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;