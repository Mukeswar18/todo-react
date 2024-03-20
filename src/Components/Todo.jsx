import { useEffect, useState } from 'react';
import './Todo.css'
import TodoElememt from './TodoElememt';
export default function Todo(){
    
    const [taskList,setTaskList]=useState([]);
    const [task,setTask]=useState("");
    
    useEffect(()=>{
        console.log(taskList);
    },[taskList])


    function addTask(){
        setTaskList([...taskList,task]); //list 
        //setTask("");  
    }

    function deleteTask(taskIndex){
        setTaskList(taskList.filter((item)=>item != taskList[taskIndex]));
    }

    return (
        <div id="todo-container">
            <div id="input-container">
                <input type="text" placeholder='TODO LIST' onChange={(e)=>setTask(e.target.value)} value={task}  />
                <div id="button" onClick={()=>addTask()}>Add</div>
            </div>
            <div id="todos">
            {
                taskList.map((item,index)=>{
                   return <TodoElememt task={item} taskId={index} deleteFunction={deleteTask} />
                })
            }
            </div>
        </div>
    );
}