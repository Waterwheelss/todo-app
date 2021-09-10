import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../slices/todoListSlice';
import CheckIcon from '../CheckIcon/CheckIcon';
import { Container, Wrapper, IconContainer, Input } from './style'

export default function InputForm() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(addList(value));
    setValue('');
  }

  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => setValue(e.currentTarget.value);
  return (
    <Container>
      <Wrapper>
        <IconContainer>
          <CheckIcon />
        </IconContainer>
        <form onSubmit={onSubmitHandler}>
          <Input value={value} onChange={onChangeHandler} placeholder="Create a new todo" />
        </form>
      </Wrapper>
    </Container>
  )
}