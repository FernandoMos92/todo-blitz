import React from 'react'

interface Props {
  placeholder: string;
  type: string;
}

export default function Input(props: Props) {

  return <input {...props}/>
}
