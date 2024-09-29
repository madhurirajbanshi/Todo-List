
import React,{useState} from "react"
function TodoList(){
const [tasks,setTasks]=useState(["Eat breakfast" ,"hello"]);
const[newTask,setNewTasks]=useState("");
function handleInputChange(e){
setNewTasks(e.target.value);

}

function addTask(){
    if (newTask.trim()) {
        setTasks((t) => [...t, newTask]); // Correctly use the previous state 't'
        setNewTasks(""); // Clear the input field after adding the task
      }
    }
function deleteTask(index){
const updatedTasks=tasks.filter((_,i)=>i!==index);
setTasks(updatedTasks);

}

return(<><div className="to-do-list">
    <h1>Todo List</h1>
    <div>
      
        <input className="input" type="text" placeholder="     Enter a task ...." value={newTask} onChange={handleInputChange}/>

        <button className="add-button" onClick={addTask}>Add</button>
    </div>
    
    <ul>{
        (tasks.map((task,index)=><li key={index}>
            <span className="text">{task}</span>

            <button className="delete-button" onClick={()=>deleteTask(index)} ><img src="https://img.icons8.com/material-outlined/24/000000/trash--v1.png"alt="icon" /></button>
        </li>))
        }
        </ul>
    </div></>)

}
export default TodoList