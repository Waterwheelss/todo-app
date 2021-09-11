import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../rootReducer";
import { Filter, changeFilter } from '../slices/filterSlice';

export function useFilter() {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state: RootState) => state.filter);

  const filterOnChange = (type: Filter) => {
    dispatch(changeFilter(type));
  }

  const isActive = (type: Filter) => {
    if (type === currentFilter.type) {
      return true
    }

    return false
  }

  return [isActive, filterOnChange] as const;
}