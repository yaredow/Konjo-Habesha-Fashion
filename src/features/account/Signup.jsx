import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useSignup from '../../hook/useSignup';
import SpinnerMini from '../../ui/SpinnerMini';

function Signup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { signup, error, isLoading, isSuccess } = useSignup();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {
    await signup(fullName, email, password, confirmPassword);

    if (isSuccess) {
      toast.success('Account created successfully');
      navigate('/account/order-history');
    } else {
      toast.error(error);
    }
  };

  return (
    <div className="fixed inset-0 top-12 flex items-center justify-center h-screen dark:bg-gray-800 bg-white">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg  w-96">
        <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200 text-center font-custom">
          Create Account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium dark:text-gray-200 text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            {...register('fullName', {
              required: 'This field is required',
            })}
            className={`input ${errors.fullName ? 'border-red-500' : ''}`}
            placeholder=" "
            disabled={isLoading}
            value={fullName}
            onInput={(e) => setFullName(e.target.value)}
          />

          <label
            htmlFor="email"
            className="block text-sm dark:text-gray-200 font-medium text-gray-700 mt-4"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            disabled={isLoading}
            {...register('email', {
              required: 'This field is required',
            })}
            className={`input ${errors.email ? 'border-red-500' : ''}`}
            placeholder=" "
            value={email}
            onInput={(e) => setEmail(e.target.value)}
          />

          <label
            htmlFor="password"
            className="block dark:text-gray-200 text-sm font-medium text-gray-700 mt-4"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            disabled={isLoading}
            {...register('password', {
              required: 'This field is required',
            })}
            className={`input ${errors.password ? 'border-red-500' : ''}`}
            placeholder=" "
            value={password}
            onInput={(e) => setPassword(e.target.value)}
          />

          <label
            htmlFor="confirmPassword"
            className="block dark:text-gray-200 text-sm font-medium text-gray-700 mt-4"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            disabled={isLoading}
            {...register('confirmPassword', {
              required: 'This field is required',
            })}
            className={`input ${
              errors.confirmPassword ? 'border-red-500' : ''
            }`}
            placeholder=" "
            value={confirmPassword}
            onInput={(e) => setConfirmPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full mt-4 p-2 bg-blue-700 text-white rounded hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            {isLoading ? <SpinnerMini /> : 'Create Account'}
          </button>
        </form>

        <p className="text-sm mt-4 dark:text-gray-300 text-gray-600">
          Already have an account?{' '}
          <button
            onClick={() => navigate(-1)}
            className="text-blue-500 hover:underline"
          >
            Login here
          </button>
        </p>
      </div>
    </div>
  );
}

export default Signup;
