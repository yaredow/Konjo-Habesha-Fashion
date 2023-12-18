import { useDarkMode } from '../context/darkModeContext';
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs';

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <button
      className=" hidden cursor-pointer items-center md:flex pb-[4px]"
      onClick={toggleDarkMode}
    >
      {isDarkMode ? (
        <BsFillSunFill className=" text-xl text-yellow-300" />
      ) : (
        <BsMoonFill className=" text-xl" />
      )}
    </button>
  );
}

export default DarkModeToggle;
