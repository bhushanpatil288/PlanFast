import { useContext, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { TaskContext } from "../context/Tasks";

const CreateTask = ({ isOpen, setIsOpen }) => {
  const [taskInfo, setTaskInfo] = useState({
    taskTitle: "", tag: ""
  })

  const { addTask, tags } = useContext(TaskContext);

  const handleChange = (e) =>{
    setTaskInfo({...taskInfo, [e.target.id]:e.target.value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    addTask({...taskInfo, id: Date.now(), complete:false});
    // setTasks([...tasks, {...taskInfo, id: Date.now(), complete: false}])
    setIsOpen(false)
    setTaskInfo({taskTitle: "", tag: ""})
  }

  return (
    <>
      {isOpen &&
        <div className="w-100 bg-blue-100 shadow absolute mt-30">
          <div className="text-end px-3 py-3">
            <button
              className="cursor-pointer text-blue-500 hover:text-red-500 transition-all duration-200"
              onClick={() => { setIsOpen(false) }}
            >
              <IoIosCloseCircle className="t" size={20} />
            </button>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-1 items-start">
                <label htmlFor="taskTitle">Create Task</label>
                <input type="text"
                  id="taskTitle"
                  name="taskTitle"
                  placeholder="Enter task title"
                  value={taskInfo.taskTitle}
                  onChange={handleChange}
                  className="bg-white rounded-2xl inset-1 inset-shadow outline-0 px-3 py-2 w-full"
                />
              </div>
              <div className="flex gap-5 mt-10 items-center">
                <label htmlFor="tag">Tags</label>
                <select name="tag" id="tag" className="bg-white rounded-2xl px-5 py-2" onChange={handleChange}>
                  <option value="">No Tag</option>
                  {/* <option value="value">test</option> */}
                  {tags && 
                    tags.map((t, k)=>{
                      return (
                        <option key={k} value={t}>{t}</option>
                      )
                    })
                  }
                </select>
              </div>
              <div className="text-center mt-10">
                <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded-2xl">Create</button>
              </div>
            </form>
          </div>
        </div>
      }
    </>
  )
}

export default CreateTask