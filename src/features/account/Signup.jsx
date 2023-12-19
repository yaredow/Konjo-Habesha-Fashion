import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import useSignup from '../../hook/useSignup';
import SpinnerMini from '../../ui/SpinnerMini';

function Signup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const { signup, error, isLoading, isSuccess } = useSignup();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {
    console.log('submitting form');
    await signup(fullName, email, password, passwordConfirm);
    console.log('finished signing up');
  };

  useEffect(() => {
    console.log('useEffect - isSuccess:', isSuccess);
    console.log('useEffect - error:', error);

    if (isSuccess) {
      toast.success('Account was successfully created.');
      navigate('/account/order-history');
    } else if (error) {
      toast.error(error);
    }
  }, [isSuccess, error, navigate]);

  return (
    <div className="flex fixed inset-0 top-0 items-center justify-center h-screen bg-white dark:bg-gray-800">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg w-2/3">
        <h2 className="text-4xl font-bold text-center mb-8 font-custom text-gray-800 dark:text-gray-200">
          Signup
        </h2>

        <form
          className="flex flex-col items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="relative mb-6 w-2/4">
            <input
              type="text"
              id="fullName"
              disabled={isLoading}
              {...register('fullName', {
                required: 'This field is required',
              })}
              className={`input peer ${
                errors.fullName ? 'border-red-500' : ''
              }`}
              placeholder=" "
              value={fullName}
              onInput={(e) => setFullName(e.target.value)}
            />
            <label htmlFor="fullName" className="label">
              Name
            </label>

            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>

          <div className="relative mb-6 w-2/4">
            <input
              type="email"
              id="email"
              autoComplete="email"
              disabled={isLoading}
              {...register('email', {
                required: 'This field is required',
              })}
              className={`input peer ${
                errors.email ? 'border-red-500 mt-1' : ''
              }`}
              placeholder=""
              value={email}
              onInput={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email" className="label">
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
              disabled={isLoading}
              {...register('password', {
                required: 'This field is required',
              })}
              className={`input peer ${
                errors.password ? 'border-red-500 mt-1' : ''
              }`}
              placeholder=""
              value={password}
              onInput={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password" className="label">
              Password
            </label>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="relative mb-6 w-2/4">
            <input
              type="password"
              id="passwordConfirm"
              disabled={isLoading}
              {...register('passwordConfirm', {
                required: 'This field is required',
              })}
              className={`input peer ${
                errors.passwordConfirm ? 'border-red-500' : ''
              }`}
              placeholder=""
              value={passwordConfirm}
              onInput={(e) => setPasswordConfirm(e.target.value)}
            />
            <label htmlFor="passwordConfirm" className="label">
              Confirm password
            </label>
            {errors.passwordConfirm && (
              <p className="text-red-500 text-sm mt-1">
                {errors.passwordConfirm.message}
              </p>
            )}
          </div>

          <button type="submit" className="button">
            {isLoading ? <SpinnerMini /> : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
