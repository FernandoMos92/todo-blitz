import React from 'react'
import './input.scss';

interface Props {
  placeholder: string;
  type: string;
}

export default function Input(props: Props) {

  return (
    <input
      autoComplete="chrome-off"
      {...props}
    />)
}
