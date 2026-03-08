import { BsFillPatchCheckFill } from "react-icons/bs";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";

const NavbarHeading = ({ isNavOpen, setIsNavOpen }) => {
  return (
    <div className={`flex ${isNavOpen ? "justify-between" : "justify-center"} items-center`}>
      {isNavOpen &&
        <div className="flex gap-2 items-center">
          <BsFillPatchCheckFill className="text-blue-500" size={20} />
          <p>PlanFast</p>
        </div>
      }
      <button onClick={() => setIsNavOpen(!isNavOpen) } className="cursor-pointer">
        <TbLayoutSidebarLeftCollapseFilled className="text-blue-500" size={22} />
      </button>
    </div>
  )
}

export default NavbarHeading