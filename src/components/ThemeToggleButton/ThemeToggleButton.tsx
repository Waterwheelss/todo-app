import React from 'react';
import { Button } from './style'

type PropsType = {
  theme: string,
  onClick?: () => void,
}

export default function ThemeToggleButton({theme, onClick}: PropsType) {
  return (
    <Button onClick={onClick}>
      {theme === 'dark' ?
        <img src="./images/icon-sun.svg" alt="theme toggle button icon" /> :
        <img src="./images/icon-moon.svg" alt="theme toggle button icon" />
      }
    </Button>
  )
}
