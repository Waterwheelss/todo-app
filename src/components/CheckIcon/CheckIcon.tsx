import React from 'react';
import { Container } from './style'

type PropsType = {
  checked?: boolean,
}

export default function CheckIcon({ checked = false }: PropsType) {
  return(
    <Container checked={checked}>
      {checked &&
        <img src="./images/icon-check.svg" alt="check icon" />
      }
    </Container>
  )
}