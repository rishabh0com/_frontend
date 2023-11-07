import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"
import TodoList from './TodoList'

function App() {
  const [page, setPage] = useState(1)
  const [tasks,setTasks] = useState([])
  const [loading,setLoading] = useState(false)
  const [err,setErr] = useState(false)

  async function fetchData(page){
    setLoading(true)
    try {
      let response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=10&_page=${page}`)
      let data = await response.data;
      setTasks(data)
      setLoading(false)
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
  console.log(tasks)

  return (
    <>
      <div className='heading'>
        <h1>ToDo's</h1>
        <div>
          <button disabled={page===1} onClick={()=> setPage(page - 1)}>Previous</button>
          <button onClick={()=> setPage(page + 1)}>Next</button>
          <span>Page No : {page}</span>
        </div>
      </div>
      <hr />
      {err && <h1>SomeThing went wrong...</h1>}
      {loading ? <h1>Loading...</h1> : <TodoList tasks={tasks}/>}
    </>
  )
}

export default App
