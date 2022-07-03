import React, { useState } from 'react';
import Header from '../../components/Header';
import './Main.scss';
import ButtonPlus from '../../components/ButtonPlus';

export default function Main() {

  const [task, setTask] = useState([])

  return (
    <>
      <Header />
      {
        task.length === 0 ? 
        <main>
          <h2>No news</h2>
          <h3>How do you think about inserting a new task?</h3>
          <ButtonPlus />
        </main> 
        : <div>NOVOS ITENS</div>
      }
    </>
  )
}
