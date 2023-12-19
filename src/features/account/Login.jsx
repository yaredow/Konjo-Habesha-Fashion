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
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg w-2/3">
        <h2 className="text-4xl font-bold text-center mb-8 font-custom text-gray-800 dark:text-gray-200">
          Login
        </h2>
        <form
          className="flex flex-col items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="relative mb-6 w-2/4">
            <input
              type="email"
              id="email"
              disabled={isLoading}
              {...register('email', {
                required: 'This field is required',
              })}
              className={`block rounded-t-lg px-2.5 pb-2.5 pt-5 text-sm text-gray-900 flex-grow bg-gray-100 dark:bg-gray-700 border-0 border-b-2 w-full  dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                errors.email ? 'border-red-500' : ''
              }`}
              placeholder=" "
              value={email}
              onInput={(e) => setEmail(e.target.value)}
            />
            <label
              htmlFor="email"
              className="absolute text-sm text-gray-600 dark:text-gray-100 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-800 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-6 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Email
            </label>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="relative mb-6 w-2/4">
            <input
              type="password"
              id="password"
              autoComplete="password"
              disabled={isLoading}
              {...register('password', {
                required: 'This field is required',
              })}
              className={`block rounded-t-lg px-2.5 pb-2.5 pt-5 text-sm text-gray-900 w-full bg-gray-100 dark:bg-gray-700 border-0 border-b-2 appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                errors.password ? 'border-red-500 mt-1' : ''
              }`}
              placeholder=""
              value={password}
              onInput={(e) => setPassword(e.target.value)}
            />
            <label
              htmlFor="password"
              className="absolute text-sm text-gray-600 dark:text-gray-100 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-800 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-6 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Password
            </label>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button type="submit" className="button">
            {isLoading ? <GreenSpinner /> : 'Log in'}
          </button>

          <Link
            to="/account/signup"
            className="text-gray-800 font-custom font-thin mt-2 hover:italic underline-offset-4 underline"
          >
            Register here
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
