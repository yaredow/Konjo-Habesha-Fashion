import { Outlet } from "react-router-dom";
import Login from "../features/account/Login";

function Account() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Account;
