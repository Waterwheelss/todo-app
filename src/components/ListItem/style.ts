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
  border-bottom: solid 1px ${({theme}) => theme.listItemBorder};
`;

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  background: transparent;
  border: none;
  cursor: pointer;
`

type TextProps = {
  checked: boolean
}

export const Text = styled.span<TextProps>`
  color: ${({ theme }) => theme.textPrimary};

  ${({checked}) => checked && `
    text-decoration-line: line-through;
    opacity: 0.5;
  `}
`