import { useContext, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import CreateTag from "../CreateTag";
import { TaskContext } from "../../context/Tasks";
import RenderTags from "./RenderTags";


const Tags = ({ isNavOpen, setIsNavOpen }) => {

  const [isCreateTaskOpen, setIsCreateTaskOpen] = useState(false);
  const { tags } = useContext(TaskContext);
  return (
    <div className="flex flex-col gap-3 relative">
      <h3 className={`${isNavOpen? "":"text-center"}`}>TAGS</h3>
      {tags &&
        <RenderTags tags={tags} isNavOpen={isNavOpen} />
      }
      <button
        onClick={() => setIsCreateTaskOpen(!isCreateTaskOpen)}
        className={`flex ${isNavOpen ? "": "justify-center"} items-center gap-3 cursor-pointer`}
      >
        <IoMdAdd />
        {isNavOpen &&
          <p>Add New Tag</p>
        }
      </button>
      {isCreateTaskOpen &&
        <CreateTag setIsCreateTaskOpen={setIsCreateTaskOpen} />
      }
    </div >
  )
}

export default Tags