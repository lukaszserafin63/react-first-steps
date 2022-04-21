import React, { useState } from 'react';
import './style.css';
import Button from './components/button';
import Input from './components/input';

const App = () => {

  return (
    <div  className='main'>
      <h1>ToDoLista</h1>
    <Button></Button>  
    <Input></Input>
    </div>
  )
}

export default App