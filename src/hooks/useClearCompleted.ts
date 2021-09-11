import { useDispatch } from "react-redux"
import { clearCompletedTodo } from "../slices/todoListSlice";

export default function useClearCompleted() {
  const dispatch = useDispatch();

  const clearCompleted = () => {
    dispatch(clearCompletedTodo());
  }

  return clearCompleted
};
