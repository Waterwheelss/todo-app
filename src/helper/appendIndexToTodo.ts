import { TodoType } from '../slices/todoListSlice';

export default function appendIndexToTodo(todoList: Array<TodoType>): Array<TodoType> {
  return todoList.map((todo, index) => {
    return {
      ...todo,
      positionInList: index,
    }
  })
}
