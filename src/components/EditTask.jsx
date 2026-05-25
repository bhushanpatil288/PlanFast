import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContextProvider";

const CreateTask = ({ taskToEdit, setTaskToEdit }) => {

  const { tags, editTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(taskToEdit.id, taskToEdit);
  }

  const handleTitleChange = (e) => {
    const newTaskToEdit = { ...taskToEdit };
    newTaskToEdit.taskTitle = e.target.value;
    setTaskToEdit(newTaskToEdit)
  }

  const handleTagChange = (e) => {
    const newTaskToEdit = { ...taskToEdit };
    newTaskToEdit.tag = e.target.value;
    setTaskToEdit(newTaskToEdit)
  }

  return (
    taskToEdit &&
    <form className="flex justify-center items-center gap-3 flex-col sm:flex-row" onSubmit={handleSubmit}>
      <div className="flex gap-1 flex-col items-center">
        <div>
          <input
            type="text"
            name="taskTitle"
            placeholder="Enter new title"
            value={taskToEdit.taskTitle}
            onChange={handleTitleChange}
            className="bg-blue-500 rounded px-3 text-white outline-none"
          />
        </div>
        <div>
          <select name="tag" className="bg-blue-300 outline-none rounded px-3 h-full" onChange={handleTagChange}>
            {tags &&
              tags.map((t, k) => {
                return (
                  taskToEdit.tag === t ? 
                  <option key={k} value={t} selected defaultValue={taskToEdit.tag === t ? t : ""} >{t}</option> 
                  :<option key={k} value={t}>{t}</option>
                )
              })
            }
          </select>
        </div>
      </div>
      <div>
        <button className="bg-linear-to-tr from-blue-700 to-blue-500 text-white px-2 py-1 rounded cursor-pointer hover:scale-110 active:scale-90  transition-all transition-duration-200">Edit</button>
      </div>
    </form>
  )
}

export default CreateTask