import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
      document.title = `${count}`
  },[count])

  return (
    <>
       <p>focus on title</p>
       <h1>count : {count}</h1>
       <button onClick={()=>setCount(count + 1)}>Click me!</button>
    </>
  )
}

export default App
