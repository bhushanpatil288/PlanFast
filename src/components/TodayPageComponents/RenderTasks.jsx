import { FaTrash } from "react-icons/fa6";
import { useContext } from "react";
import { TaskContext } from "../../context/Tasks";

const RenderTasks = ({ tasks, filter }) => {

  const { toggleTaskStatus, deleteTask } = useContext(TaskContext)

  return (
    <>
      {filter.length === 0 ?
        <ul>
          {
            tasks.map(task => {
              return (
                <li key={task.id} className="flex justify-between mx-3 px-2 py-3 hover:bg-blue-100 rounded border-b border-gray-200">
                  <div className="flex flex-col gap-3 items-start">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" checked={task.complete} id={task.id + "task"} onChange={() => { toggleTaskStatus(task.id) }} />
                      <label htmlFor={task.id + "task"} className={`cursor-pointer ${task.complete ? "line-through" : ""}`}>{task.taskTitle}</label>
                    </div>
                    {task.tag &&
                      <span className="border rounded-md text-center px-2 bg-yellow-400 border-none shadow">
                        {task.tag}
                      </span>
                    }
                  </div>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="p-2 w-7.5 h-7.5 flex justify-center items-center rounded-md px-2 text-red-500 cursor-pointer hover:bg-linear-to-br hover:from-red-400 hover:to-red-600 hover:text-white transition-all transition-duration-300"
                  >
                    <FaTrash />
                  </button>
                </li>
              )
            })
          }
        </ul>
        :
        <ul>
          {
            filter.map(task => {
              return (
                <li key={task.id} className="flex justify-between mx-3 px-2 py-3 hover:bg-blue-100 rounded border-b border-gray-200">
                  <div className="flex flex-col gap-3 items-center">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" checked={task.complete} id={task.id + "task"} onChange={() => { toggleTaskStatus(task.id) }} />
                      <label htmlFor={task.id + "task"} className={`cursor-pointer ${task.complete ? "line-through" : ""}`}>{task.taskTitle}</label>
                    </div>
                    {task.tag &&
                      <span className="border rounded-md text-center px-2 bg-yellow-400 border-none shadow">
                        {task.tag}
                      </span>
                    }
                  </div>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="p-2 w-7.5 h-7.5 flex justify-center items-center rounded-md px-2 text-red-500 shadow cursor-pointer hover:bg-linear-to-br hover:from-red-400 hover:to-red-600 transition-all transition-duration-300"
                  >
                    <FaTrash />
                  </button>
                </li>
              )
            })
          }
        </ul>
      }
    </>
  )
}

export default RenderTasks