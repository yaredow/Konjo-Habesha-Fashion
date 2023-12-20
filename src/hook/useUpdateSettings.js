import axios from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken, setUser } from '../features/account/accountSlice';

const useUpdateSettings = () => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const dispatch = useDispatch();

  const token = useSelector(selectToken);

  const updateData = async (data, type) => {
    setIsLoading(true);
    setError(null);

    const url =
      type === 'password'
        ? 'https://konjo-habesha-fashion.onrender.com/api/v1/users/updateMyPassword'
        : 'https://konjo-habesha-fashion.onrender.com/api/v1/users/updateMe';

    const res = await axios({
      method: 'PATCH',
      url,
      data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(res);

    try {
      if (res.status === 200) {
        setIsSuccess(true);
        dispatch(setUser(res.data.user));
      } else {
        setIsLoading(false);
        setError('An error occurred during sign-in.');
      }
    } catch (err) {
      setIsLoading(false);
      if (err.response) {
        setError(err.response.data.message); // Server-side error
      } else if (err.request) {
        setError('An error occurred. Please check your internet connection.'); // Client-side error
      } else {
        setError('An error occurred during sign-in.');
      }
    } finally {
      setIsLoading(false);
    }
  };
  return { updateData, isLoading, isSuccess, error };
};

export default useUpdateSettings;
