import React from 'react'
import CheckIcon from '../CheckIcon/CheckIcon'
import { Container, IconButton, Wrapper, Text } from './style'
import { Todo, toggleTodo } from '../../slices/todoListSlice';
import { useDispatch } from 'react-redux';

type PropsType = {
  todo: Todo,
};

export default function ListItem({ todo }: PropsType) {
  const { id, checked, text} = todo;
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleTodo(id));
  }

  return (
    <Container>
      <Wrapper>
        <IconButton onClick={toggle}>
          <CheckIcon checked={checked} />
        </IconButton>
        <Text checked={checked}>{text}</Text>
      </Wrapper>
    </Container>
  )
}