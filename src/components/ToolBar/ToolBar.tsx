import React from 'react';
import { Container } from './style';

export default function ToolBar() {
  return(
    <Container>
      <div>5 items left</div>
      <ul>
        <li>
          All
        </li>
        <li>
          Active
        </li>
        <li>
          Completed
        </li>
      </ul>
      <div>
        Clear Completed
      </div>
    </Container>
  )
}