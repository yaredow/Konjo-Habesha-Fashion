// OrderHistory.jsx
import { useSelector } from 'react-redux';
import Logout from '../features/account/Logout';
import { selectUser } from '../features/account/accountSlice';

const OrderHistory = () => {
  const user = useSelector(selectUser);
  return (
    <>
      <Logout />
      <div className="container mx-auto mt-8 flex">
        {/* Logout Button */}

        {/* Order History */}
        <div className="w-2/3 pr-8">
          <h2 className="text-xl font-bold mb-4">Order History</h2>
          <div className="mb-4 p-4 border border-gray-300 rounded">
            <p>You havent placed any order yet</p>
          </div>
        </div>

        {/* Account Details */}
        <div className="w-1/3">
          <h2 className="text-xl font-bold mb-4">Account Details</h2>
          <div className="p-4 border border-gray-300 rounded">
            {/* Display account details here */}
            <p className="pb-4">{user?.name}</p>
            <p>{user?.email}</p>
            {/* Add more account details as needed */}
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderHistory;
