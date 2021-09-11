import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: ${({ theme }) => theme.listItem};
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
`

export const Input = styled.input`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.textPrimary};
  font-family: 'Josefin Sans';
  font-size: 18px;
`