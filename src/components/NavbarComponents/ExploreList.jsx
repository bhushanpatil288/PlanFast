import { exploreList } from "../../constants/data"
import { NavLink } from "react-router-dom"

const ExploreList = () => {
  return (
    <div className="px-1">
      <h3 className="mb-2">EXPLORE</h3>
      <ul>
        {exploreList.map((item, idx) => {
          return (
            <li key={idx}>
              <NavLink to={item.link} end={item.link==="/"} className={({ isActive }) => isActive ? "bg-linear-to-r from-blue-400 to-blue-500 rounded flex gap-3 px-2 text-white py-1 items-center shadow transition-all duration-200" : "flex gap-3 py-1 px-2 items-center hover:bg-blue-200 transition-all duration-200"}>
                  <item.icon />
                  {item.title}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ExploreList