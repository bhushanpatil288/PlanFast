import Navbar from "./Navbar"

const Layout = ({children}) => {
  return (
    <div className="flex mx-3 my-3">
      <div className="overflow-hidden rounded w-1/5">
        <Navbar />
      </div>
      <div className="overflow-hidden mx-3 my-3 w-4/5">
        {children}
      </div>
    </div>
  )
}

export default Layout