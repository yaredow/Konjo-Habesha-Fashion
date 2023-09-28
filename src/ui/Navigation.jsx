import { BiSearch } from "react-icons/bi";
import DarkModeToggle from "./darkModeToggle";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import NavMenuDesktop from "./NavMenuDesktop";
import { useState } from "react";
import NavMenuMobile from "./NavMenuMobile";
import CartToggle from "./CartToggle";

function Navigation() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const sectionPaths = [
    "/home",
    "/collections",
    "/collections/men",
    "/collections/women",
  ];
  const sectionNames = ["Home", "Shop", "Men", "Women"];

  return (
    <header className=" bg-white shadow-md sticky top-0 left-0">
      <nav className="w-[90%] mx-auto mt-6">
        <div className="flex items-center justify-between">
          <div>
            <a href="/">
              <img
                className="h-16 w-16 mb-4"
                src="/images/logo.png"
                alt="Konjo Habesha Logo"
              />
            </a>
          </div>

          <div>
            <NavMenuDesktop
              sectionPaths={sectionPaths}
              sectionName={sectionNames}
            />
          </div>
          <div className=" flex flex-row gap-8">
            <div className="flex flex-row gap-4 md:gap-6">
              <BiSearch className="text-2xl" />
              <AiOutlineUser className="text-2xl" />
              <CartToggle />
              <DarkModeToggle />
            </div>

            <div className="flex md:hidden">
              {/* Mobile navigation toggle */}
              <button onClick={() => setToggleMenu(!toggleMenu)}>
                {toggleMenu ? (
                  <AiOutlineClose className="text-2xl dark:text-stone-200" />
                ) : (
                  <AiOutlineMenu className="text-2xl dark:text-stone-200" />
                )}
              </button>
            </div>
          </div>

          {/* Apply conditional classes to control mobile menu visibility */}
          <NavMenuMobile
            sectionNames={sectionNames}
            sectionPaths={sectionPaths}
            toggleMenu={toggleMenu}
            setToggleMenu={setToggleMenu}
          />
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
