import React from 'react';
import './Login.scss';
import { BiUser } from 'react-icons/bi';

export default function Login() {
  return (
    <div className='main-contianer-login'>
      <h1>Login</h1>
      <h2>To Do List</h2>
      <form>
        <input 
          type="text" 
          placeholder='email'
        />
        <input 
          type="password" 
          placeholder='password'
        />
      </form>
      <div className='container-input-sign'>
        <button>Sign in</button>
        <span>Register Now</span>
      </div>
    </div>
  )
}
