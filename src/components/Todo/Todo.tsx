import React from 'react'
import CheckIcon from '../CheckIcon/CheckIcon'
import { Container, IconButton, Wrapper, Text } from './style'
import { TodoType, toggleTodo, moveTodo } from '../../slices/todoListSlice';
import { useDispatch } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';

type PropsType = {
  todo: TodoType,
};

export default function Todo({ todo }: PropsType) {
  const { id, checked, text } = todo;
  const dispatch = useDispatch();

  const [, drag] = useDrag(() => ({
    item: todo,
    type: 'TODO',
  }))

  const [, drop] = useDrop({
    accept: 'TODO',
    drop: (item: TodoType) => {
      const fromId = item.id as string;
      const toId = todo.id as string;
      dispatch(moveTodo({fromId, toId}));
    }
  })

  const toggle = () => {
    dispatch(toggleTodo(id));
  }

  return (
    <div ref={drop}>
      <Container ref={drag}>
        <Wrapper>
          <IconButton onClick={toggle}>
            <CheckIcon checked={checked} />
          </IconButton>
          <Text checked={checked}>{text}</Text>
        </Wrapper>
      </Container>
    </div>
  )
}