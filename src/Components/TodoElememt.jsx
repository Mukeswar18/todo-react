export default function TodoElememt({task,deleteFunction,taskId}){
    return(
        <div className="todo">
            <p>{task}</p>
            <div className="delete-button" onClick={()=>deleteFunction(taskId)}>DEL</div>
        </div>
    )
}