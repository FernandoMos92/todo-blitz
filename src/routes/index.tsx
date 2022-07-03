import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Main from '../pages/Main';
import Register from '../pages/Register';

export default function NavigationRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/main' element={<Main />}/>
      <Route path='/register' element={<Register />}/>
    </Routes>
  )
}
