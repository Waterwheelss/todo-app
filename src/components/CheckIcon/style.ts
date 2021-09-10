import styled from "styled-components";

type ContainerProps = {
  checked: boolean,
}

export const Container = styled.span<ContainerProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: 25px;
  background: ${({ checked }) => checked ? 'linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))' : 'transparent'};
  border: solid 1px ${({theme}) => theme.checkBoxBorder};
`