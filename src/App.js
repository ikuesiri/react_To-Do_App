import { useState } from 'react';
import {List} from "./components/List"
import './App.css'; 

function App() {
  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleChange = (event) => {
    const {value} = event.target;
    setNewTask(value)
  }
  //add task
  const  addTask = () => {
    const taskListObj = {
      id: taskList.length < 1 ?  1 : taskList[taskList.length -1].id + 1,
       name: newTask,
       isCompleted : false
    }
    setTaskList(prevTaskList => [...prevTaskList, taskListObj])
    setNewTask("")
  }
//delete task
 const deleteTask = (id) => {
  setTaskList(prevTaskList => {
    return prevTaskList.filter(task => {
       return task.id !== id
    })
  })
 }
//update Task
const completedTask = (id) => {
   setTaskList(prevTaskList => {
    return prevTaskList.map(task => {
       if(id === task.id){
         return {...task, isCompleted: true}
       }else{
        return {...task}
       }
    })
   })
}

  return (
    <div className="App">
    <h1>TO-DO APP</h1>
      <div className="addTask">
        <input type="text"  onChange={handleChange} value={newTask} />
        <button onClick={ addTask}>ADD</button>
      </div>
      <div className="list">
        {taskList.map( task => {
          return (
            <List 
              name={task.name} 
              deleteTask={deleteTask}
              id={task.id}
              completedTask={completedTask}
              isCompleted={task.isCompleted}

             />
            )
          }
          
          )}
      </div>
    
    </div>
    
  );
}

export default App;
