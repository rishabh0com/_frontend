import axios from "axios";
import "./App.css"
import { useEffect, useState } from "react";


function TodoList(prop){
    // const [st,setST] = useState(true)

   async function onStatus(id,status){
    try {
        await axios.patch(`http://localhost:5000/tasks/${id}`,{
            status : !status
        })
        prop.function()
    } catch (error) {
        console.log(error)
    }
    }
    

    async function onDlete(id){
        try {
            await axios.delete(`http://localhost:5000/tasks/${id}`)
            prop.function();
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
        <div>
            {prop.tasks.map((task,index)=>(
                <div className="task" key={index} id={task.id}>
                    <p >{task.title} </p>
                    <h4 style={{color : task.status ? 'green' : 'red'}} onClick={()=>onStatus(task.id,task.status)}>{task.status ? 'completed' : 'not completed'}</h4>
                    <button onClick={()=> onDlete(task.id)}>Delete</button>
                </div>
            ))}
        </div>
        </>
    )
}

export default TodoList;