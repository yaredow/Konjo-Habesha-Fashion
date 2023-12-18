import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import useSignin from '../../hook/useSigin';
import GreenSpinner from '../../ui/SpinnerMini';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { signin, error, isLoading, isSuccess } = useSignin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {
    console.log('Submitting form');
    await signin(email, password);
    console.log('Signin completed');
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success('You are logged in successfully');
      navigate('/account/order-history');
    } else if (error) {
      toast.error(error);
    }
  }, [isSuccess, error, navigate]);

  return (
    <div className="flex fixed inset-0 top-0 items-center justify-center h-screen bg-white dark:bg-gray-800">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg w-1/3">
        <h2 className="text-4xl font-bold text-center mb-8 font-custom text-gray-800 dark:text-gray-200">
          Login
        </h2>
        <form className=" flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-800 dark:text-gray-200"
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
            placeholder="Your Email"
            autoComplete="email"
            value={email}
            onInput={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}

          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-800 dark:text-gray-200 mt-4"
          >
            Password
          </label>

          <input
            type="password"
            id="password"
            autoComplete="password"
            disabled={isLoading}
            {...register('password', {
              required: 'This field is required',
            })}
            className={`input ${errors.password ? 'border-red-500' : ''}`}
            placeholder="Your Password"
            value={password}
            onInput={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}

          <button
            type="submit"
            className=" flex-none mt-12 px-6 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            {isLoading ? <GreenSpinner /> : 'Login'}
          </button>
        </form>
        <p className="text-sm mt-4 text-gray-600 dark:text-gray-200">
          Don&apos;t have an account?{' '}
          <Link to="/account/signup" className="text-blue-500 hover:underline">
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
