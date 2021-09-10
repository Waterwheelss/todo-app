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

export default function App() {
  const todoList = useSelector((state: RootState) => state.todoList);
  const theme = useSelector((state: RootState) => state.theme);

  const renderList = () => todoList.map(todo => (
    <ul>
      <ListItem key={todo.id} todo={todo} />
    </ul>
  ))

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
          {renderList()}
          <ToolBar />
        </ItemWrapper>
      </AppContainer>
    </ThemeProvider>
  )
}
