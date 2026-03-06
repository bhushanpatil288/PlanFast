import { useState } from "react";
import Layout from "../components/Layout"
import { IoMdAdd } from "react-icons/io";
import CreateTask from "../components/CreateTask";

const TodayPage = () => {

  const[isOpen, setIsOpen] = useState(true);

  return (
    <Layout>
      <div className="flex flex-col gap-4">
        <h2 className="font-bold p-2 text-2xl">Today</h2>
        <div className="px-5">
          <button className="flex gap-2 items-center cursor-pointer text-gray-500 hover:text-black transition-all duration-200" onClick={()=>{setIsOpen(!isOpen)}}>
            <IoMdAdd className="text-black" />
            <p className="">Add New Task</p>
          </button>
        </div>
        <CreateTask isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </Layout>
  )
}

export default TodayPage