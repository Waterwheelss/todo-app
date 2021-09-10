import styled from "styled-components";

type ContainerProps = {
  readonly url: string,
}

export const Container = styled.div<ContainerProps>`
  position: absolute;
  top: 0;
  width: 100%;
  height: 250px;
  background-image: url(${props => props.url ? props.url : ''});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
`