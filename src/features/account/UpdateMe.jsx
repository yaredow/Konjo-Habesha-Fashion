import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import InputField from '../../ui/InputField';
import toast from 'react-hot-toast';
import SpinnerMini from '../../ui/SpinnerMini';
import useUpdateSettings from '../../hook/useUpdateSettings';

const UpdateMe = () => {
  // State for email and name form
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  // State for password form
  const [passwordCurrent, setPasswordCurrent] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const { updateData, isLoading, isSuccess, error } = useUpdateSettings();

  // Separate instances of useForm for each form
  const {
    register: registerUserData,
    handleSubmit: handleSubmitUserData,
    formState: { errors: errorsUserData },
  } = useForm();

  const {
    register: registerPassword,
    handleSubmit: handleSubmitPassword,
    formState: { errors: errorsPassword },
  } = useForm();

  const onSubmitUserData = async () => {
    await updateData({ email, name }, 'data');
  };

  const onSubmitPassword = async () => {
    await updateData(
      { passwordCurrent, newPassword, passwordConfirm },
      'password'
    );
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success('Account was updated successful.');
    } else if (error) {
      toast.error(error);
    }
  }, [isSuccess, error]);

  return (
    <div className="flex mt-12 fixed inset-0 top-0 items-center justify-center h-screen bg-white dark:bg-gray-800">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg w-2/3">
        {/* Email and Name Update Form */}
        <form
          className="flex flex-col items-center"
          onSubmit={handleSubmitUserData(onSubmitUserData)}
        >
          <InputField
            label="Email"
            id="email"
            value={email}
            onChange={setEmail}
            register={registerUserData}
            errors={errorsUserData}
            isRequired={false}
          />
          <InputField
            label="Name"
            id="name"
            value={name}
            onChange={setName}
            register={registerUserData}
            errors={errorsUserData}
            isRequired={false}
          />

          <button type="submit" className="button">
            Update
          </button>
        </form>

        {/* Password Update Form */}
        <div className=" mt-8">
          <h2 className="text-2xl font-bold text-center mb-4 font-custom text-gray-800 dark:text-gray-200">
            Update your password
          </h2>
          <form
            className="flex flex-col items-center"
            onSubmit={handleSubmitPassword(onSubmitPassword)}
          >
            <InputField
              label="Current Password"
              id="currentPassword"
              value={passwordCurrent}
              isLoading={isLoading}
              onChange={setPasswordCurrent}
              register={registerPassword}
              errors={errorsPassword}
            />

            <InputField
              label="New Password"
              id="newPassword"
              value={newPassword}
              isLoading={isLoading}
              onChange={setNewPassword}
              register={registerPassword}
              errors={errorsPassword}
            />

            <InputField
              label="Confirm Password"
              id="passwordConfirm"
              value={passwordConfirm}
              isLoading={isLoading}
              onChange={setPasswordConfirm}
              register={registerPassword}
              errors={errorsPassword}
            />

            <button type="submit" className="button">
              {isLoading ? <SpinnerMini /> : 'Update'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateMe;
