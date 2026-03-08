import Navbar from "./Navbar"
import { useContext, useEffect } from "react";
import { NavbarContext } from "../context/NavbarContextProvider"

const Layout = ({ children }) => {
  const { isNavOpen, setIsNavOpen } = useContext(NavbarContext)

  return (
    <div className="flex">
      <div className={`rounded ${isNavOpen ? "w-50 lg:w-1/5":"w-20"} shadow h-screen absolute z-50 fixed`}>
        <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      </div>
      <div className={`mx-3 my-3 w-4/5 h-screen ms-20`}>
        {children}
      </div>
    </div>
  )
}

export default Layout