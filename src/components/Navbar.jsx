import NavbarHeading from "./NavbarComponents/NavbarHeading"
import ExploreList from "./NavbarComponents/ExploreList"
import Tags from "./NavbarComponents/Tags";
import { CiSettings } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const Navbar = ({ isNavOpen, setIsNavOpen }) => {

  return (
    <div className="bg-blue-100 px-3 py-4 h-full flex flex-col justify-between">
      <div>
        <NavbarHeading isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />

        <div className="mt-5">
          <ExploreList isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        </div>

        <div className="mt-5">
          <Tags isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        </div>
      </div>

      <NavLink to={"/Settings"} className={({ isActive }) => isActive ? "bg-linear-to-r from-blue-400 to-blue-500 text-white rounded flex gap-3 px-2 py-1 items-center shadow transition-all duration-200" : "flex gap-3 py-1 px-2 items-center hover:bg-blue-200 rounded transition-all duration-200"}>
        <div className={`${isNavOpen ? "":"w-100 h-10 flex justify-center items-center"}`}>
          <CiSettings size={20} />
        </div>
        {isNavOpen &&
          <p>Settings</p>
        }
      </NavLink>

    </div>
  )
}

export default Navbar