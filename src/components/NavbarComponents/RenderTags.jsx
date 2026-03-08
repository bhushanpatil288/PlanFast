import { FaTrash } from "react-icons/fa6";
import { TaskContext } from "../../context/Tasks";
import { useContext } from "react";

const RenderTags = ({ tags, isNavOpen }) => {

  const { tasks, setFilter, deleteTag } = useContext(TaskContext)

  const handleClick = (e) => {
    const filteredTasks = tasks.filter(task => task.tag === e.currentTarget.id);
    setFilter(filteredTasks);
  }

  return (
    <ul>
      {tags.map((t, id) => {
        return (
          <li key={id} className={`flex justify-between items-center w-full overflow-x-hidden`}>
            <button
              onClick={handleClick}
              id={t}
              className={`flex gap-1 items-center w-100 rounded px-3 py-1 cursor-pointer ${!isNavOpen? "justify-center" : ""}`}
            >
              <div className="bg-yellow-500 w-5 h-5 rounded"></div>
              {isNavOpen &&
                <span>{t}</span>
              }
            </button>
            {isNavOpen &&
              <div>
                <button
                  onClick={() => deleteTag(t)}
                  className="p-2 w-7 h-7 flex justify-center items-center text-red-500 rounded-md px-2 cursor-pointer hover:bg-linear-to-br hover:from-red-400 hover:to-red-600 hover:text-white transition-all transition-duration-300"
                >
                  <FaTrash />
                </button>
              </div>
            }
          </li>
        )
      })}
    </ul>
  )
}

export default RenderTags