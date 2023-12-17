import { Outlet } from 'react-router-dom';

function Account() {
  return (
    <div>
      <h1 className=" text-2xl font-bold">Account</h1>
      <Outlet />
    </div>
  );
}

export default Account;
