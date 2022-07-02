import React, { useState } from 'react'
import Input from '../../components/Input'
import './Register.scss';
import { BiUser } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
import { GiPadlock, GiPadlockOpen } from 'react-icons/gi';
import { IoIosArrowBack } from 'react-icons/io';

export default function Register() {

  const [isPassword, setIsPassword] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);

  return (
    <div className='main-containet-form'>
      <h1>Welcome</h1>
      <IoIosArrowBack className='icon-back-page' />
      <form action="/form">
        <BiUser className='icon-register user-icon' />
        <Input type="text" placeholder="Insert your name" />
        <AiOutlineMail className='icon-register email-icon' />
        <Input type="text" placeholder="Insert your email" />
        <AiOutlineMail className='icon-register email-confirm-icon' />
        <Input type="text" placeholder="Confirm your email" />
        {
          !isPassword ? <GiPadlock onClick={() => setIsPassword(!isPassword)} className='icon-register lock-icon' /> : <GiPadlockOpen onClick={() => setIsPassword(!isPassword)} className='icon-register lock-open-icon' />
        }
        <Input type={!isPassword ? "password" : "text"} placeholder="Insert your password" />
        {
          !isConfirm ? <GiPadlock onClick={() => setIsConfirm(!isConfirm)} className='icon-register lock-bot-icon' /> : <GiPadlockOpen onClick={() => setIsConfirm(!isConfirm)} className='icon-register lock-open-bot-icon' />
        }
        <Input type={!isConfirm ? "password" : "text"} placeholder="Confirm your password" />
      </form>

      <div className='container-button'>
        <button>Clear</button>
        <button>Submit</button>
      </div>

      <span className='tag-developer'>Mós - Web Developer</span>
    </div>
  )
}
