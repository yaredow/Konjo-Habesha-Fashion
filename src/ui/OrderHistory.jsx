// OrderHistory.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectToken } from '../features/account/accountSlice';

const OrderHistory = () => {
  const [userDetails, setUserDetails] = useState({});
  const authToken = useSelector(selectToken);

  useEffect(() => {
    // Fetch order history and account details when the component mounts
    const fetchData = async () => {
      try {
        const userDetailsResponse = await axios.get(
          'https://konjo-habesha-fashion.onrender.com/api/v1/users/me',
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        setUserDetails(userDetailsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [userDetails, authToken]);

  return (
    <div className="container mx-auto mt-8 flex">
      {/* Order History */}
      <div className="w-2/3 pr-8">
        <h2 className="text-2xl font-bold mb-4">Order History</h2>
        <div className="mb-4 p-4 border border-gray-300 rounded">
          <p>You havent placed any order yet</p>
        </div>
      </div>

      {/* Account Details */}
      <div className="w-1/3">
        <h2 className="text-2xl font-bold mb-4">Account Details</h2>
        <div className="p-4 border border-gray-300 rounded">
          {/* Display account details here */}
          <p>Name: {userDetails.name}</p>
          <p>Email: {userDetails.email}</p>
          {/* Add more account details as needed */}
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
