import { RootState } from "../rootReducer";
import { Todo } from "../slices/todoListSlice";

export default function getCompletedList(state: RootState): Array<Todo> {
  const todoList = state.todoList;
  const completedList = todoList.filter(todo => todo.checked === true);

  return completedList;
};
