import { useState } from 'react'
import './App.css'

function Todo() {
  //maintain State
  const [task, setTask] = useState("");
  const [todo,setTodo] = useState([]);
  function handleChange(e){
    setTask(e.target.value)
  }
  function handleClick(){
    if(task != ""){
         setTodo([...todo,task]);
    }
   
  }

  return (
    <>
    <div className='inputBox'>
      <input type="text" onChange={handleChange} id='input' value={task} placeholder="Enter todo's..." />
      <button onClick={handleClick}>Add Task</button>
      <hr />
        {
          todo.map((ele,index) =>(
           <div className='todoCont'>
            <h3 key={index}>{ele}</h3>
            <i class="fa-solid fa-trash-can"></i>
           </div> 
          ))
        }
    </div>
    
    </>
  )
}

export default Todo
