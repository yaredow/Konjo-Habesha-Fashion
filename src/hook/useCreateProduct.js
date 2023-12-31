import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectToken } from '../features/account/accountSlice';

const useCreateProduct = () => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const token = useSelector(selectToken);

  const createProduct = async (formData) => {
    try {
      const res = await axios({
        method: 'POST',
        url: 'https://konjo-habesha-fashion.onrender.com/api/v1/admin',
        data: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(res);

      if (res.data.data.status === 200) {
        setIsSuccess(true);
      } else {
        setIsLoading(false);
        setError('An error occurred during product creation.');
      }
    } catch (err) {
      setIsLoading(false);
      if (err.response) {
        setError(err.response.data.message); // Server-side error
      } else if (err.request) {
        setError('An error occurred. Please check your internet connection.'); // Client-side error
      } else {
        setError('An error occurred during product creation.');
      }
    } finally {
      setIsLoading(false);
    }
  };
  return { createProduct, isLoading, isSuccess, error };
};

export default useCreateProduct;
