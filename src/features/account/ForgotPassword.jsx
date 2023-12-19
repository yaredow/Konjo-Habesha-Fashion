import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
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
          <div className="relative mx-auto w-full max-w-md mb-6">
            <input
              type="email"
              id="email"
              {...register('email', {
                required: 'This field is required',
              })}
              className={`input peer ${errors.email ? 'border-red-500' : ''}`}
              placeholder=" "
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
};

export default ForgotPassword;
