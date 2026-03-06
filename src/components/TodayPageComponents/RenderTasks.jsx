import { FaTrash } from "react-icons/fa6";
import { useContext } from "react";
import { TaskContext } from "../../context/Tasks";

const RenderTasks = ({ tasks, setTasks }) => {

  const { toggleTaskStatus, deleteTask } = useContext(TaskContext)

  return (
    <ul>
      {
        tasks.map(task => {
          return (
            <li key={task.id} className="flex justify-between mx-3 px-2 py-3 hover:bg-blue-100 rounded border-b border-gray-200">
              <div className="flex gap-3 items-center">
                <input type="checkbox" id={task.id + "task"} onChange={() => { toggleTaskStatus(task.id) }} />
                <label htmlFor={task.id + "task"} className={`cursor-pointer ${task.complete ? "line-through" : ""}`}>{task.taskTitle}</label>
              </div>
              <button 
                onClick={()=> deleteTask(task.id)}
                className="p-2 bg-linear-to-br from-red-400 to-red-500 rounded-md px-2 text-white shadow cursor-pointer hover:bg-linear-to-br hover:from-red-400 hover:to-red-600 transition-all transition-duration-300"
              >
                <FaTrash />
              </button>
            </li>
          )
        })
      }
    </ul>
  )
}

export default RenderTasks