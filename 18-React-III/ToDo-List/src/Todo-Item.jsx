import './Todo.css'
function TodoItem({data,ontoggleStatus}){
    return (
        <>
        <div className='taskBox'>
        <div className="item">
            {data.task}
          </div>
          <div onClick={()=> ontoggleStatus(data.id)} className="status" style={{color:data.status ? "green" : "red"}}>
            {data.status ? "True" : "False"}
          </div>
          <div className="icon">
          <i class="fa-solid fa-trash-can" ></i>
          </div>
        </div>
        </>
    )
}

export default TodoItem;