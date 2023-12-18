import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setToken, setUser } from '../features/account/accountSlice';

const useSignin = () => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const dispatch = useDispatch();

  const signin = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await axios({
        method: 'POST',
        url: 'https://konjo-habesha-fashion.onrender.com/api/v1/users/signin',
        data: { email, password },
      });

      console.log(res.data);

      if (res.status === 200) {
        dispatch(setToken(res.data.token));
        dispatch(setUser(res.data.user));
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

    // Return a resolved promise after the sign-in process
  };

  return { signin, error, isLoading, isSuccess };
};

export default useSignin;
