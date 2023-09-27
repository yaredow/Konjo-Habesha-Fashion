import CustomeNavLink from "./CutomeNavLink";

function NavMenuDesktop({ sectionPaths, sectionName }) {
  return (
    <div className="hidden font-custom gap-6 text-xl text-stone-700 md:flex">
      {sectionPaths.map((sectionPath, index) => (
        <CustomeNavLink key={sectionPath} to={`${sectionPath}`}>
          {sectionName[index].charAt(0).toUpperCase() +
            sectionName[index].slice(1)}
        </CustomeNavLink>
      ))}
    </div>
  );
}

export default NavMenuDesktop;
