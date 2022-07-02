import React, { useState } from 'react';
import './Login.scss';
import { BiUser } from 'react-icons/bi';
import { BsFillEyeSlashFill } from 'react-icons/bs';
import { IoEyeSharp } from 'react-icons/io5';

export default function Login() {
  const [isEyes, setIsEyes] = useState(false);

  return (
    <div className='main-contianer-login'>
      <h1>Login</h1>
      <h2><span>To Do</span> List</h2>
      <BiUser className='user-icon icon-default' />
      {
        isEyes ? <IoEyeSharp
          className='password-icon icon-default'
          onClick={() => setIsEyes(!isEyes)}
        /> :
          <BsFillEyeSlashFill
            className='password-icon icon-default'
            onClick={() => setIsEyes(!isEyes)}
          />
      }
      <form>
        <input
          type="text"
          placeholder='email'
        />
        <input
          type={!isEyes ? 'password' : 'text'}
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
