import React from 'react'
import ReactDOM from 'react-dom/client'
import {Greating, UserCard} from './Greating'
import {Button} from './Button'

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Button text='click me'/>
  <Button text='pay'/>
  <Button text='' name="joe"/>

    {/* <UserCard
      name="Ryan ray"
      amount={3000}
      married={true}
      points={[99, 33.3, 22.2]}
      address={{ street: "123 main street", city: "Ney York" }}
      greet={function () {
        alert("hello");
      }}
    />
    <UserCard
      name="joe Mcmillan"
      amount={1000}
      married={false}
      points={[100,20]}
      address={{ street: "av some 123", city: "Ney York" }}
    /> */}
  </>
);

