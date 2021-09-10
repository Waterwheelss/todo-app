import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Heading } from './style';
import ThemeToggleButton from '../ThemeToggleButton/ThemeToggleButton';
import { RootState } from '../../rootReducer';
import { toggleTheme } from '../../slices/themeSlice';

export default function Header() {
  const theme = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(toggleTheme());
  }
  return(
    <Container>
      <Heading>TODO</Heading>
      <ThemeToggleButton theme={theme} onClick={toggle} />
    </Container>
  )
}