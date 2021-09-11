import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useClearCompleted from '../../hooks/useClearCompleted';
import { useFilter } from '../../hooks/useFilter';
import { RootState } from '../../rootReducer';
import { ACTIVE, ALL, COMPLETED } from '../../slices/filterSlice';
import { Container, FilterListItem, FilterButton } from './style';

export default function ToolBar() {
  const todoList = useSelector((state: RootState) => state.todoList);
  const [isActive, filterOnChange] = useFilter();
  const clearCompleted = useClearCompleted();

  return(
    <Container>
      <div>{todoList.length} items left</div>
      <ul>
        <FilterListItem>
          <FilterButton active={isActive(ALL)} onClick={() => filterOnChange(ALL)}>All</FilterButton>
        </FilterListItem>
        <FilterListItem>
          <FilterButton active={isActive(ACTIVE)} onClick={() => filterOnChange(ACTIVE)}>Active</FilterButton>
        </FilterListItem>
        <FilterListItem>
          <FilterButton active={isActive(COMPLETED)} onClick={() => filterOnChange(COMPLETED)}>Completed</FilterButton>
        </FilterListItem>
      </ul>
      <FilterButton onClick={clearCompleted}>
        Clear Completed
      </FilterButton>
    </Container>
  )
}