import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.listItem};
  height: 50px;
  width: 100%;
  font-size: 14px;
  color: ${({ theme }) => theme.textSecondary};
`;

export const FilterListItem = styled.li`
  display: inline-block;
  margin-left: 10px;
  margin-right: 10px;
`

type FilterButtonProps = {
  active?: boolean,
}

export const FilterButton = styled.button<FilterButtonProps>`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: inherit;
  font-weight: 700;
  transition: color 0.2s linear;

  &:hover{
    color: ${({ theme }) => theme.textHover};
    transition: color 0.2s linear;
  }

  ${props => props.active && `color: ${props.theme.textHover}`};
`
