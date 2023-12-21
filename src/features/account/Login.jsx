import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import useSignin from '../../hook/useSigin';
import GreenSpinner from '../../ui/SpinnerMini';
import InputField from '../../ui/InputField';
import { isAllOf } from '@reduxjs/toolkit';

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
      navigate('/account/user-details');
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
          <InputField
            type="email"
            label="Email"
            id="email"
            value={email}
            onChange={setEmail}
            isLoading={isLoading}
            register={register}
            errors={errors}
          />
          <InputField
            type="password"
            label="Password"
            id="password"
            value={password}
            onChange={setPassword}
            isLoading={isLoading}
            register={register}
            errors={errors}
            isPasswordUpdate={false}
          />

          <button type="submit" className="button">
            {isLoading ? <GreenSpinner /> : 'Log in'}
          </button>

          <Link
            to="/account/signup"
            className="text-gray-800 font-custom mb-2 font-thin mt-2 hover:italic underline-offset-4 underline"
          >
            Register here
          </Link>
          <Link
            to="/account/forgot-password"
            className=" underline underline-offset-4 hover:italic"
          >
            Forgot your password?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
