// Login.jsx
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'; // If using React Router for navigation

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {
    try {
      const res = await axios({
        method: 'POST',
        url: 'https://konjo-habesha-fashion.onrender.com/api/v1/users/signin',
        data: {
          email,
          password,
        },
      });

      const data = res.data;
      if (data.token) {
        toast.success('you have logged in successfully');
        reset();
      }
      reset();
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <div className="flex fixed inset-0 top-0 items-center justify-center h-screen bg-white dark:bg-gray-800">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg  w-96">
        <h2 className="text-4xl font-bold text-center mb-8 font-custom text-gray-800 dark:text-gray-200">
          Login
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-800 dark:text-gray-200"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register('email', {
              required: 'This field is required',
            })}
            className={`input ${errors.email ? 'border-red-500' : ''}`}
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-800 dark:text-gray-200 mt-4"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register('password', {
              required: 'This field is required',
            })}
            className={`input ${errors.email ? 'border-red-500' : ''}`}
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full mt-4 p-2 bg-blue-700 text-white rounded hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Login
          </button>
        </form>

        <p className="text-sm mt-4 text-gray-600 dark:text-gray-200">
          Don&apos;t have an account?{' '}
          <Link
            to="/account/register"
            className="text-blue-500 hover:underline"
          >
            Register here
          </Link>
        </p>

        <button
          onClick={() => navigate('/products')}
          className=" text-gray-600 dark:text-gray-200 hover:text-blue-600 mt-4 text-sm"
        >
          Return to store
        </button>
      </div>
    </div>
  );
};

export default Login;
