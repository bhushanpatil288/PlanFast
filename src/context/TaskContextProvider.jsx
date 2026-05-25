import { createContext, useEffect, useState } from "react";
import * as api from "../api/api";

export const TaskContext = createContext(null);

const TaskContextProvider = ({children}) => {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [tags, setTags] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [tasksRes, tagsRes] = await Promise.all([
        api.getTasks(),
        api.getTags()
      ]);
      setTasks(tasksRes.data);
      setTags(tagsRes.data.map(t => t.name));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const addTask = async (task) => {
    try {
      const res = await api.createTask(task);
      setTasks([...tasks, res.data]);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const toggleTaskStatus = async (taskId) => {
    const task = tasks.find(t => t.id === taskId);
    if (!task) return;
    try {
      const updatedTask = { ...task, complete: !task.complete };
      const res = await api.updateTask(taskId, updatedTask);
      setTasks(tasks.map(t => t.id === taskId ? res.data : t));
    } catch (error) {
      console.error("Error toggling task:", error);
    }
  };

  const editTask = async (taskId, updatedData) => {
    try {
      const res = await api.updateTask(taskId, updatedData);
      setTasks(tasks.map(t => t.id === taskId ? res.data : t));
      setTaskToEdit(null);
    } catch (error) {
      console.error("Error editing task:", error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await api.removeTask(taskId);
      setTasks(tasks.filter(t => t.id !== taskId));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const addTag = async (tag) => {
    try {
      const res = await api.createTag({ name: tag });
      setTags([...tags, res.data.name]);
    } catch (error) {
      console.error("Error adding tag:", error);
    }
  };

  const deleteTag = async (tag) => {
    try {
      const res = await api.getTags();
      const tagObj = res.data.find(t => t.name === tag);
      if (tagObj) {
        await api.removeTag(tagObj.id);
        setTags(tags.filter(t => t !== tag));
      }
    } catch (error) {
      console.error("Error deleting tag:", error);
    }
  };


  return (
    <TaskContext value={{
      tasks, setTasks, addTask, toggleTaskStatus, editTask, deleteTask, 
      taskToEdit, setTaskToEdit, tags, addTag, deleteTag, filter, setFilter
    }}>
      {children}
    </TaskContext>
  )
}

export default TaskContextProvider