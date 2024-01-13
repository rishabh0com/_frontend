import "./App.css"

function TodoList ({tasks}){
    return (
        <>
        {tasks.map((task,index)=>(
            <div className="task" key={index}>
                <h3>{task.id}  .  {task.title}</h3>
                <h4 style={{color : task.completed ? 'green' : 'red'}}>
                    {task.completed ? 'Completed' : 'Not Completed'}</h4>
            </div>
        ))}
        </>
    )
}

export default TodoList;