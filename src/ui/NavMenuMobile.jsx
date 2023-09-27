import CustomeNavLink from "./CutomeNavLink";

function NavMenuMobile({
  sectionPaths,
  sectionNames,
  toggleMenu,
  setToggleMenu,
}) {
  const closeMenu = () => {
    setToggleMenu(false);
  };

  return (
    <div
      className={` fixed left-0  top-0 mt-[6rem] flex w-full origin-top flex-col items-center gap-12  bg-stone-50 duration-300 dark:bg-stone-700 md:hidden ${
        !toggleMenu ? "h-0" : "h-full"
      }`}
    >
      <div className="flex font-custom flex-col items-center gap-8 overflow-hidden pt-20 text-xl   tracking-wide text-stone-700 dark:text-stone-100">
        {sectionPaths.map((sectionPath, index) => (
          <CustomeNavLink
            onClick={closeMenu}
            key={sectionPath}
            to={`${sectionPath}`}
          >
            {sectionNames[index].charAt(0).toUpperCase() +
              sectionNames[index].slice(1)}
          </CustomeNavLink>
        ))}
      </div>
    </div>
  );
}

export default NavMenuMobile;
