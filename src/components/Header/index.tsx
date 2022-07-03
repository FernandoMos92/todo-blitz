import React from 'react';
import './Header.scss';
import { ImExit } from 'react-icons/im';

export default function Header() {
  return (
    <header>
      <span className='user-name'>
        Welcome, <span>$USER</span>
      </span>
      <div className='container-image'>
        <ImExit className='icon-exit'/>
      </div>
    </header>
  )
}
