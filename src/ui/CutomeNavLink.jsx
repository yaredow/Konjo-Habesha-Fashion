import { NavLink, useMatch } from "react-router-dom";

function CustomeNavLink({ to, children, onClick }) {
  const isActive = useMatch(to);
  return (
    <NavLink
      onClick={onClick}
      to={to}
      className={`${
        isActive ? "underline text-blue-500 underline-offset-4" : ""
      } hover:underline underline-offset-4`}
    >
      {children}
    </NavLink>
  );
}

export default CustomeNavLink;
