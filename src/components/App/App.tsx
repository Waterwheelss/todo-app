import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../rootReducer';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../styles/theme';
import { GlobalStyles } from '../../styles/GlobalStyles';
import { HeaderWrapper, InputFormWrapper, ItemWrapper } from './style';

import AppContainer from '../AppContainer/AppContainer';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import InputForm from '../InputForm/InputForm';
import ListItem from '../ListItem/ListItem';
import ToolBar from '../ToolBar/ToolBar';
import { ACTIVE, ALL, COMPLETED } from '../../slices/filterSlice';
import { Todo } from '../../slices/todoListSlice';

export default function App() {
  const todoList = useSelector((state: RootState) => state.todoList);
  const theme = useSelector((state: RootState) => state.theme);
  const filter = useSelector((state: RootState) => state.filter);

  const renderList = () => {
    let filteredList: Array<Todo> = []
    
    switch (filter.type) {
      case ALL:
        filteredList = [...todoList];
        break;
      case COMPLETED:
        filteredList = todoList.filter(todo => todo.checked === true);
        break;
      case ACTIVE:
        filteredList = todoList.filter(todo => todo.checked === false);
        break;
    }

    return filteredList.map(todo => (
      <ListItem key={todo.id} todo={todo} />
    ))
  }

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Banner url="./images/bg-desktop-dark.jpg" />
      <AppContainer>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <InputFormWrapper>
          <InputForm />
        </InputFormWrapper>
        <ItemWrapper>
          <ul>{renderList()}</ul>
          <ToolBar />
        </ItemWrapper>
      </AppContainer>
    </ThemeProvider>
  )
}
