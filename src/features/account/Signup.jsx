import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useSignup from '../../hook/useSignup';
import SpinnerMini from '../../ui/SpinnerMini';
import InputField from '../../ui/InputField';

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
      navigate('/account/user-details');
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
          <InputField
            label="Name"
            id="fullName"
            value={fullName}
            onChange={setFullName}
            isLoading={isLoading}
            register={register}
            errors={errors}
          />
          <InputField
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
          />
          <InputField
            type="password"
            label="Confirm Password"
            id="passwordConfirm"
            value={passwordConfirm}
            onChange={setPasswordConfirm}
            isLoading={isLoading}
            register={register}
            errors={errors}
          />
          <button type="submit" className="button">
            {isLoading ? <SpinnerMini /> : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
