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

    try {
      const res = await axios({
        method: 'POST',
        url: 'https://konjo-habesha-fashion.onrender.com/api/v1/users/signin',
        data: { email: email, password: password },
      });

      if (res.status !== 200) {
        setIsLoading(false);
        setError(res.response.data.message);
      }
      console.log(res);

      if (res.status === 200) {
        dispatch(setToken(res.data.token));
        dispatch(setUser(res.data.user));
        setIsSuccess(true);
      }
    } catch (err) {
      setIsLoading(false);
      setError('An error occurred during sign-in.');
    }
  };

  return { signin, error, isLoading, isSuccess };
};

export default useSignin;
