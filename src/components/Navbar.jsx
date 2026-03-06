import NavbarHeading from "./NavbarComponents/NavbarHeading"
import ExploreList from "./NavbarComponents/ExploreList"

const Navbar = () => {
  return (
    <div className="bg-blue-100 p-2">
      <NavbarHeading />

      <div className="mt-5">
        <ExploreList />
      </div>

    </div>
  )
}

export default Navbar