import { BsFillPatchCheckFill } from "react-icons/bs";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";

const NavbarHeading = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <BsFillPatchCheckFill className="text-blue-500" size={20} />
        <p className="">My Plan</p>
      </div>
      <div>
        <TbLayoutSidebarLeftCollapseFilled className="text-blue-500" size={24} />
      </div>
    </div>
  )
}

export default NavbarHeading