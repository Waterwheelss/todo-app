import { RootState } from "../rootReducer";
import { TodoType } from "../slices/todoListSlice";

export default function getCompletedList(state: RootState): Array<TodoType> {
  const todoList = state.todoList;
  const completedList = todoList.filter(todo => todo.checked === true);

  return completedList;
};
