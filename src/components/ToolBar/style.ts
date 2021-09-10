import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({theme}) => theme.listItem};
  height: 50px;
  width: 100%;
  font-size: 14px;
  color: ${({theme}) => theme.text}
`