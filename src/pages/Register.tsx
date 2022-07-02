import React from 'react'
import Input from '../components/Input'

export default function Register() {
  return (
    <div>
      <form>
        <Input type="text" placeholder="Insert your name"/>
        <Input type="text" placeholder="Insert your email"/>
        <Input type="text" placeholder="Confirm your email"/>
      </form>
    </div>
  )
}
