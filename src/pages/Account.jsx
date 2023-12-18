import { Outlet } from 'react-router-dom';

function Account() {
  return (
    <div>
      <h1 className=" text-2xl font-bold dark:text-gray-100">Account</h1>
      <Outlet />
    </div>
  );
}

export default Account;
