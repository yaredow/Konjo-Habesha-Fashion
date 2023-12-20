import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectToken } from '../features/account/accountSlice';

const UseUpdateUserData = () => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const token = useSelector(selectToken);

  const updatePassword = async (
    passwordCurrent,
    newPassword,
    passwordConfirm
  ) => {
    setIsLoading(true);
    setError(null);

    const res = await axios({
      method: 'PATCH',
      url: 'https://konjo-habesha-fashion.onrender.com/api/v1/users/updateMyPassword',
      data: {
        passwordCurrent,
        newPassword,
        passwordConfirm,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(res.status);
    try {
      if (res.status === 200) {
        setIsSuccess(true);
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
  return { updatePassword, isLoading, isSuccess, error };
};

export default UseUpdateUserData;
