// useUserData.js
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setUser } from '../features/account/accountSlice';

const useGetUserData = (token) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://konjo-habesha-fashion.onrender.com/api/v1/users/me',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        dispatch(setUser(response.data));
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (token) {
      fetchData();
    }
  }, [dispatch, token]);
};

export default useGetUserData;
