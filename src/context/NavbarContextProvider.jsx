import { createContext, useState } from "react";

export const NavbarContext = createContext(false);

const NavbarContextProvider=({children})=>{
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <NavbarContext value={{isNavOpen, setIsNavOpen}}>
      {children}
    </NavbarContext>
  )
}

export default NavbarContextProvider