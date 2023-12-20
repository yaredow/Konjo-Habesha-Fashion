// OrderHistory.jsx
import { useSelector } from 'react-redux';
import { selectUser } from './accountSlice';
import Logout from './Logout';
import { Link } from 'react-router-dom';

const UserDetails = () => {
  const user = useSelector(selectUser);
  return (
    <div className=" container">
      <Logout />
      <Link
        to="/account/update-account"
        className=" underline underline-offset-4 hover:italic font-light"
      >
        Update your account
      </Link>
      <div className="container items-start mx-auto flex md:flex-row flex-col gap-8 md:">
        {/* Order History */}
        <div className="w-2/3 pr-8 mt-8">
          <h2 className="text-xl dark:text-gray-100 font-bold mb-4">
            Order History
          </h2>
          <div className="mb-4 p-4 dark:text-gray-100 border border-gray-300 rounded">
            <p>You havent placed any order yet</p>
          </div>
        </div>

        {/* Account Details */}
        <div className="md:w-1/3">
          <h2 className="text-xl dark:text-gray-100 font-bold mb-4">
            Account Details
          </h2>
          <div className="p-4 border border-gray-300 rounded">
            {/* Display account details here */}
            <p className="pb-4 dark:text-gray-100">{user?.name}</p>
            <p className=" dark:text-gray-100">{user?.email}</p>
            {/* Add more account details as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
