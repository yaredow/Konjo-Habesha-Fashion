import { useState } from 'react';
import { setToken, setUser } from '../features/account/accountSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const useSignup = () => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const dispatch = useDispatch();

  const signup = async (fullName, email, password, passwordConfirm) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await axios({
        method: 'POST',
        url: 'https://konjo-habesha-fashion.onrender.com/api/v1/users/signup',
        data: {
          name: fullName,
          email,
          password,
          passwordConfirm,
        },
      });

      console.log(res.data);

      if (res.data.token) {
        dispatch(setToken(res.data.token));
        dispatch(setUser(res.data.user));
        setIsSuccess(true);
      } else {
        setIsLoading(false);
        setError('An error occurred during sign-up.');
      }
    } catch (err) {
      setIsLoading(false);
      if (err.response) {
        setError(err.response.data.message);
      } else if (err.request) {
        setError('An error occurred. Please check your internet connection.'); // Client-side error
      } else {
        setError('An error occurred during sign-up.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { signup, error, isLoading, isSuccess };
};

export default useSignup;
