import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { RootState } from '../../rootReducer';

import { lightTheme, darkTheme } from '../../styles/theme';
import { GlobalStyles } from '../../styles/GlobalStyles';
import { HeaderWrapper, InputFormWrapper, ItemWrapper } from './style';

import AppContainer from '../AppContainer/AppContainer';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import InputForm from '../InputForm/InputForm';
import Todo from '../Todo/Todo';
import ToolBar from '../ToolBar/ToolBar';
import { ACTIVE, ALL, COMPLETED } from '../../slices/filterSlice';
import { TodoType } from '../../slices/todoListSlice';
import appendIndexToTodo from '../../helper/appendIndexToTodo';

export default function App() {
  const todoList = useSelector((state: RootState) => state.todoList);
  const theme = useSelector((state: RootState) => state.theme);
  const filter = useSelector((state: RootState) => state.filter);

  const renderList = () => {

    //Append index information on every todo item.
    let filteredList: Array<TodoType> = [...todoList];

    switch (filter.type) {
      case ALL:
        break;
      case COMPLETED:
        filteredList = todoList.filter(todo => todo.checked === true);
        break;
      case ACTIVE:
        filteredList = todoList.filter(todo => todo.checked === false);
        break;
    }

    return filteredList.map((todo) => (
      <Todo key={todo.id} todo={todo} />
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
          <DndProvider backend={HTML5Backend}>
            <ul>
              {renderList()}
            </ul>
          </DndProvider>
          <ToolBar />
        </ItemWrapper>
      </AppContainer>
    </ThemeProvider>
  )
}
