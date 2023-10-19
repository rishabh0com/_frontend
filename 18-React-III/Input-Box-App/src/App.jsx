import React from 'react'
import './App.css'



// main app render component :
function App() {
  const [text,setText] = React.useState("");

  //add text from input box to state
  const addText = (event)=> setText(event.target.value)
  
  // remove text from state 
  function remove(){
    setText("");
  }

  return (
    <>
    <div>
      {/* giving value as a text this input box sync with useState*/}
      <input onChange={addText} type="text" placeholder='Enter text...' value={text}/> 
    </div>
    <h2>text : {text}</h2>
    <button onClick={remove}>Clear</button>
    </>
  )
}

export default App
