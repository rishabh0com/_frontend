import { useState } from 'react'
import './Todo.css'
import TodoList from './TodoList'

function Todo() {
  const [inputVal, SetInputVal] = useState("")
  const [task,taskList] = useState([])

  function handleChange(e){
    SetInputVal(e.target.value)
  }
  //add task in list
  function addtask(){
    if(inputVal != ""){
      let taskDetail = {
        id : new Date().getTime(),
        status : false,
        task : inputVal
      }
      // fetch list and add new task
      taskList([...task,taskDetail])
  
    }
  }
  // for change status
  function toggleStatus(id){
    const update = task.map(task => {
      if(task.id === id){
        return {...task,status: !task.status}
      }
      return task
    })

    taskList(update);
  }

  return (
    <>
    <div className="input-box">
      <input type="text" placeholder='enter Task...' className="input"
       value={inputVal} onChange={handleChange} />
      <button className="btn" onClick={addtask}>+</button>
    </div>
    <div >
      <TodoList ontoggleStatus={toggleStatus} tasks = {task}/>
    </div>
    
    </>
  )
}

export default Todo
