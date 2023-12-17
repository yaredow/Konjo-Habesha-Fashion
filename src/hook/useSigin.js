import { useState } from 'react';
import { setToken, setUser } from '../features/account/accountSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';

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

      if (res.data.token) {
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
  };

  return { signin, error, isLoading, isSuccess };
};

export default useSignin;
