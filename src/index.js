import React from 'react'
import ReactDOM from 'react-dom/client'
import {Greating, UserCard} from './Greating'
import {Button} from './Button'
import { TaskCard } from './task'
import {Saludar} from './Saludar'


const root=ReactDOM.createRoot(document.getElementById('root'));
const handleChange=(e)=>{
  console.log(e.target.value);
}
root.render(
  <>
  <TaskCard  ready={true}/>
  <Saludar/>
  <Button text='Saludar'/>
  <input id="ola" onChange={handleChange}/>
  </>
);

