import React from 'react'
import ClassCounter from './components/ClassCounter';
import FunctionalCounter from './components/FunctionalCounter';

export default function App() {
  return (
    <div>
      <h1>ClassComponent</h1>
      <ClassCounter />
      <hr />
      <h1>FunctionalComponent</h1>
      <FunctionalCounter />
    </div>
  )
}

   