import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function ResetPassword() {
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="flex fixed inset-0 top-0 items-center justify-center bg-white min-h-screen">
      <div className="p-8 rounded-lg w-2/3 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Reset Your Password
        </h2>
        <p className="text-gray-600 mb-6">
          We will send you an email to reset your password.
        </p>

        {/* Forgot Password Form */}
        <form className="mb-4">
          <div className="relative mb-6 mx-auto md:w-2/4 w-full">
            <input
              type="password"
              id="password"
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

          <div className="relative mx-auto mb-6 md:w-2/4 w-full">
            <input
              type="password"
              id="passwordConfirm"
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
            Submit
          </button>
        </form>

        {/* Cancel Link */}
        <Link to="/account/signin" className="text-gray-500 hover:underline">
          Cancel
        </Link>
      </div>
    </div>
  );
}

export default ResetPassword;
