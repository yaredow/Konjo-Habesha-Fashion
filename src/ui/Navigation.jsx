import DarkModeToggle from './darkModeToggle';
import { AiOutlineClose, AiOutlineMenu, AiOutlineUser } from 'react-icons/ai';
import NavMenuDesktop from './NavMenuDesktop';
import { useState } from 'react';
import NavMenuMobile from './NavMenuMobile';
import CartToggle from './CartToggle';
import { useSelector } from 'react-redux';
import { getTotalCartQuantity } from '../features/cart/cartSlice';
import ToggleSearchForm from './ToggleSearchForm';
import { useNavigate } from 'react-router-dom';
import { selectUser } from '../features/account/accountSlice';

function Navigation() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();
  const cartQuantity = useSelector(getTotalCartQuantity);
  const sectionPaths = ['/home', '/products', '/contact-us', '/about-us'];
  const sectionNames = ['Home', 'Shop', 'Contact us', 'About us'];
  const user = useSelector(selectUser);

  const handleUserIconClick = () => {
    if (user) {
      navigate('/account/user-details');
    } else {
      navigate('/account/signin');
    }
  };

  return (
    <header className=" bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-600 dark:shadow-sm sticky top-0 left-0 z-50">
      <nav className="w-[90%] mx-auto mt-6">
        <div className="flex items-center justify-between">
          <div>
            <a href="/">
              <img
                className="h-16 w-16 mb-2 bg-blue-200 bg-gradient-to-r from-blue-200 to-blue-400 rounded-full"
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
          <div className=" flex flex-row gap-8 relative mr-2">
            <div className="flex flex-row gap-4 md:gap-6">
              <ToggleSearchForm />
              <div className=" relative">
                <CartToggle />
                {cartQuantity > 0 && (
                  <div className=" absolute bottom-5 left-5 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-md">
                    {cartQuantity}
                  </div>
                )}
              </div>

              <div className=" flex flex-row gap-2 md:mr-4">
                <AiOutlineUser
                  onClick={handleUserIconClick}
                  className="text-2xl hover:text-blue-500 dark:hover:text-blue-400 dark:text-white cursor-pointer"
                />
                <span className=" dark:text-gray-100">
                  {user ? user.name : ''}
                </span>
              </div>
              <DarkModeToggle />
            </div>

            <div className="flex md:hidden">
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
