import { createContext, useState } from "react"

export const TaskContext = createContext(null);

const Tasks = ({children}) => {
  const [tasks, setTasks] = useState([{id: 1, taskTitle: "testing", complete:false, tag:null}, {id: 2, taskTitle: "testing2", complete:false, tag:null}])

  const toggleTaskStatus = (taskId) => {
    let taskIndex = tasks.findIndex(task => task.id === taskId);
    let newTasks = [...tasks];
    newTasks[taskIndex].complete = !newTasks[taskIndex].complete
    setTasks(newTasks)
  }

  const deleteTask = (taskId) =>{
    let taskIndex = tasks.findIndex(task=> task.id === taskId);
    let newTasks = [...tasks];
    newTasks.splice(taskIndex, 1);
    setTasks(newTasks);
  }

  return (
    <TaskContext value={{tasks, setTasks, toggleTaskStatus, deleteTask}}>
      {children}
    </TaskContext>
  )
}

export default Tasks