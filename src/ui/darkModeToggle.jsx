import { useDarkMode } from "../context/darkModeContext";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <button
      className=" hidden cursor-pointer items-center pl-4 md:flex"
      onClick={toggleDarkMode}
    >
      {isDarkMode ? (
        <BsFillSunFill className=" text-2xl text-yellow-300" />
      ) : (
        <BsMoonFill className=" text-2xl" />
      )}
    </button>
  );
}

export default DarkModeToggle;
