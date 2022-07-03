import React, { useState } from 'react';
import './Login.scss';
import { BiUser } from 'react-icons/bi';
import { GiPadlock, GiPadlockOpen } from 'react-icons/gi';

export default function Login() {
  const [isLock, setIsLock] = useState(false);
  const [inputEmail, setInputEmail] = useState("");

  const handleInput = (target: any) => {
    setInputEmail(target.value);
    console.log(inputEmail)
  }

  return (
    <div className='main-contianer-login'>
      <h1>Login</h1>
      <h2><span>To Do</span> List</h2>
      <BiUser className='user-icon icon-default' />
      {
        isLock ? <GiPadlockOpen
          className='password-icon icon-default'
          onClick={() => setIsLock(!isLock)}
        /> :
          <GiPadlock
            className='password-icon icon-default'
            onClick={() => setIsLock(!isLock)}
          />
      }
      <form>
        <input
          value={inputEmail}
          onChange={handleInput}
          type="text"
          placeholder='email'
        />
        <input
          type={!isLock ? 'password' : 'text'}
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
