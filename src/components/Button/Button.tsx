import React from 'react'

import { ButtonProps } from './Button.types'

import './Button.css'

const Button = ({ className, onClick, children }: ButtonProps) => (
  <button className={`Button ${className || ''}`} onClick={onClick}>
    {children}
  </button>
)

export default React.memo(Button)
