import React from 'react';
import './Header.scss';

export default function Header() {
  return (
    <header>
      <span className='user-name'>
        Welcome, <span>$USER</span>
      </span>
      <div className='container-image'>
        <img src="https://picsum.photos/200/300" alt="Random picture" />
      </div>
    </header>
  )
}
