import TodoItem from "./Todo-Item";
import './Todo.css'
function TodoList({tasks,ontoggleStatus}){
    return(
        <>
           <div>
            {
                tasks.map((task)=>(
                    <TodoItem key={task.id} data={task} ontoggleStatus={ontoggleStatus}/>
                ))
            }
           </div>
        </>
    )
}

export default TodoList;