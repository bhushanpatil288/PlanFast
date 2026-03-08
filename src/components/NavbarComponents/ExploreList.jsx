import { exploreList } from "../../constants/data"
import { NavLink } from "react-router-dom"
import { TaskContext } from "../../context/Tasks"
import { useContext } from "react"

const ExploreList = ({ isNavOpen, setIsNavOpen }) => {

  const { setFilter } = useContext(TaskContext);


  return (
    <div className="px-1">
      {isNavOpen ?
        <h3 className="mb-2">EXPLORE</h3>
        :
        <h3 className="mb-2">Tasks</h3>
      }
      <ul>
        {exploreList.map((item, idx) => {
          return (
            <li key={idx}>
              <NavLink to={item.link} end={item.link === "/"} className={({ isActive }) => isActive ? "bg-linear-to-r from-blue-400 to-blue-500 rounded flex gap-3 px-2 text-white py-1 items-center shadow transition-all duration-200" : "flex gap-3 py-1 px-2 items-center hover:bg-blue-200 transition-all duration-200"} onClick={() => setFilter([])}>
                <div className={`flex gap-3 items-center ${!isNavOpen ? "justify-center w-full h-8":""}`}>
                  <item.icon />
                  {isNavOpen &&
                    item.title
                  }
                </div>
              </NavLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ExploreList