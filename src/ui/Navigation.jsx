import { NavLink } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import DarkModeToggle from "./darkModeToggle";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";

function Navigation() {
  return (
    <header className=" bg-stone-50 shadow-sm">
      <nav className=" w-[90%] mx-auto mt-6 ">
        <div className=" flex items-center justify-between">
          <div>
            <a href="/">
              <img
                className=" h-16 w-16 mb-4"
                src="/images/logo.png"
                alt="Konjo Habesha Logo"
              />
            </a>
          </div>

          <div className=" hidden md:block">
            <ul className=" flex flex-row gap-6 text-xl hover:da">
              <li>
                <NavLink
                  className=" hover:underline hover:underline-offset-[6px]"
                  activeClassName=" underline underline-offset-[6px]"
                  exact
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className=" hover:underline hover:underline-offset-[6px]"
                  to="/collections"
                  activeClassName=" underline underline-offset-[6px]"
                  exact
                >
                  Shope
                </NavLink>
              </li>
              <li>
                <NavLink
                  className=" hover:underline hover:underline-offset-[6px]"
                  to="/collections/men"
                  activeClassName=" underline underline-offset-[6px]"
                  exact={true}
                >
                  Men
                </NavLink>
              </li>
              <li>
                <NavLink
                  className=" hover:underline hover:underline-offset-[6px]"
                  to="/collections/women"
                  activeClassName=" underline underline-offset-[6px]"
                  exact={true}
                >
                  Women
                </NavLink>
              </li>
            </ul>
          </div>
          <div className=" flex flex-row gap-4 md:gap-6 ">
            <BiSearch className=" text-2xl" />
            <AiOutlineUser className=" text-2xl" />
            <AiOutlineShoppingCart className=" text-2xl" />
            <DarkModeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
