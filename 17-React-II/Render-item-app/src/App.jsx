
import React from 'react';

const Skill = (props) => {
  return (
    <div>
      <ol>{props.item.map((ele) => {
        return <li>{ele}</li> 
      } )}</ol>
    </div>
  );
};


function App() {
  return (
    <div className="App">
      <Skill item={["dancing", "playing cricket", "watching movies"]} />
    </div>
  )
}

export default App
