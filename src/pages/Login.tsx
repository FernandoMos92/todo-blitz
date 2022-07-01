import React from 'react';
import './Login.scss';

export default function Login() {
  return (
    <div className='main-contianer-login'>
      <h1>Login</h1>
      <h2>To Do List</h2>
      <form>
        <input type="text" />
        <input type="password" />
      </form>
      <div>
        <button>Sign in</button>
        <span>Register Now</span>
      </div>
    </div>
  )
}
