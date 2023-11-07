import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"
import TodoList from './TodoList'

const getData = async(url)=> {
  try {
     let response = await axios.get(url)
     return response.data
  } catch (error) {
    return error
  }
}

// *******************************************

function App() {
  const [tasks, setTasks] = useState([])
  const [loading,setLoading] = useState(false)
  const [err,setErr] = useState(false)
  const [task,setTask] = useState("")
  const [next,setNext] = useState(">")
  const [previous,setPrevious] = useState("<")
  const [page,setPage] = useState(1)
  // fetch data from server
  const fetchData = async(page) =>{
    setLoading(true)
    try {
      let data = await getData(`http://localhost:5000/tasks?_limit=4&_page=${page}`)
      setTasks(data)
    } catch (error) {
      setErr(true)
      setLoading(false)
    }finally{
      setLoading(false)
    }
  }
  useEffect(()=>{
    fetchData(page)
  },[page])

  // add task on dataBase
  async function addTask (){
    try {
      await axios.post(`http://localhost:5000/tasks`,{
        title : task,
        status : false
      })
      fetchData();
      setTask("");
    } catch (error) {
      console.log(error)
    }
  }
  console.log(tasks)

  return (
    <>
      <div className='heading'> <h1>ToDo App</h1>
       <button disabled={page === 1} onClick={()=>setPage(page - 1)}>{previous}</button>
       <h2>{page}</h2>
       <button onClick={()=>setPage(page + 1)}>{next}</button>
      </div>
      <hr />
      <div>
        <input type="text" onChange={(e)=> setTask(e.target.value)} value={task} />
        <button onClick={addTask}>Add</button>
      </div>
      <div>
         {
          err && (<h1>Something went wrong</h1>) 
         }
         {
          loading ? (<h2>Loading....</h2>) : (<TodoList tasks={tasks} function={fetchData} />)
         }
      </div>
    </>
  )
}

export default App
