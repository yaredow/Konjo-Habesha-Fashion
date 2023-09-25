import { Link } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import { BiSearch, BiSolidUser } from "react-icons/bi";

function Navigation() {
  return (
    <header className=" bg-stone-50">
      <nav className=" w-[90%] mx-auto mt-6 ">
        <div className=" flex items-center justify-between">
          <div>
            <a href="/">
              <img className=" h-16 w-16" src="./images/logo.png" alt="" />
            </a>
          </div>
          <div className=" ">
            <ul className=" flex flex-row gap-6 text-xl">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="">Shope</Link>
              </li>
              <li>
                <Link to="">Men</Link>
              </li>
              <li>
                <Link to="">Women</Link>
              </li>
            </ul>
          </div>
          <div className=" flex flex-row gap-6 text-2xl">
            <BiSearch />
            <BiSolidUser />
            <MdDarkMode />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
