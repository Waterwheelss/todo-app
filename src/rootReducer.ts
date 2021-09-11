import { combineReducers } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import todoListReducer from './slices/todoListSlice';
import filterReducer from './slices/filterSlice'

const rootReducer = combineReducers({
  todoList: todoListReducer,
  theme: themeReducer,
  filter: filterReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;