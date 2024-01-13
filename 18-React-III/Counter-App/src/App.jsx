import React from 'react';
// import { useState } from 'react';
import './App.css'

//Counter button and display function
function Counter(){
  const [count,setCount] = React.useState(0);
  // const [count, setCount] = useState(0)
  function handleClick (){
    setCount(count + 1)
  }

  return (
    <>
     <h1>You clicks count button {count} times</h1>
     <button onClick={handleClick}>click me!</button>
    </>
  )
}

// main App render Function
function App() {
  
  return (
    <>
    <Counter/>
    </>
  )
}

export default App
