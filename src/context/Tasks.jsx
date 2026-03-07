import { createContext, useEffect, useState } from "react"

export const TaskContext = createContext(null);

const Tasks = ({children}) => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || [{complete:false, id: 1, tag: "High", taskTitle: "High Priority task"}, {complete:true, id: 2, tag: "Medium", taskTitle: "Medium Priority task"} ]);
  const [tags, setTags] = useState(JSON.parse(localStorage.getItem('tags')) || ["High", "Medium"]);

  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('tags', JSON.stringify(tags));
  }, [tasks, tags])

  const addTask=(task)=>{
    setTasks([...tasks, task]);
  }

  const toggleTaskStatus = (taskId) => {
    let taskIndex = tasks.findIndex(task => task.id === taskId);
    let newTasks = [...tasks];
    newTasks[taskIndex].complete = !newTasks[taskIndex].complete;
    setTasks(newTasks);
  }

  const deleteTask = (taskId) =>{
    let taskIndex = tasks.findIndex(task=> task.id === taskId);
    let newTasks = [...tasks];
    newTasks.splice(taskIndex, 1);
    setTasks(newTasks);
  }

  const addTag = (tag) =>{
    setTags([...tags, tag]);
  }

  const deleteTag = (tag) =>{
    const newTags = [...tags];
    const tagId = newTags.indexOf(tag);
    newTags.splice(tagId, 1);
    setTags(newTags);
  }

  return (
    <TaskContext value={{tasks, addTask, toggleTaskStatus, deleteTask, tags, addTag, deleteTag}}>
      {children}
    </TaskContext>
  )
}

export default Tasks