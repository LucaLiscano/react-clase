import React from 'react'
import ReactDOM from 'react-dom/client'
import {Greating, UserCard} from './Greating'
import {Button} from './Button'
import { TaskCard } from './task'

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <TaskCard  ready={true}/>
  </>
);

