import { BiSearch } from "react-icons/bi";
import DarkModeToggle from "./darkModeToggle";
import { AiOutlineClose, AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import NavMenuDesktop from "./NavMenuDesktop";
import { useState } from "react";
import NavMenuMobile from "./NavMenuMobile";
import CartToggle from "./CartToggle";
import { useSelector } from "react-redux";
import { getTotalCartQuantity } from "../features/cart/cartSlice";

function Navigation() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const cartQuantity = useSelector(getTotalCartQuantity);

  const sectionPaths = [
    "/home",
    "/collections",
    "/collections/men",
    "/collections/women",
    "/collections/Kids",
  ];
  const sectionNames = ["Home", "Shop", "Men", "Women", "Kids"];

  return (
    <header className=" bg-white shadow-md sticky top-0 left-0 z-20">
      <nav className="w-[90%] mx-auto mt-6">
        <div className="flex items-center justify-between">
          <div>
            <a href="/">
              <img
                className="h-16 w-16 mb-4"
                src="/images/logo/logo.png"
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
              <BiSearch className="text-2xl hover:text-blue-500" />
              <AiOutlineUser className="text-2xl hover:text-blue-500" />

              <div className=" relative">
                <CartToggle />
                {cartQuantity > 0 && (
                  <div className=" absolute bottom-5 left-5 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-md">
                    {cartQuantity}
                  </div>
                )}
              </div>

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
