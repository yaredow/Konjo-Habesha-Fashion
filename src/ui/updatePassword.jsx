import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import InputField from '../ui/InputField';
import toast from 'react-hot-toast';
import SpinnerMini from '../ui/SpinnerMini';
import useUpdatePassword from '../hook/useUpdateSettings';

const UpdatePassword = () => {
  const [passwordCurrent, setPasswordCurrent] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const { updateData, isLoading, isSuccess, error } = useUpdatePassword();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {
    await updateData(
      { passwordCurrent, newPassword, passwordConfirm },
      'password'
    );
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success('Password updated successfully.');
    } else if (error) {
      toast.error(error);
    }
  }, [isSuccess, error]);

  return (
    <div className=" mt-8">
      <h2 className="text-2xl font-bold text-center mb-4 font-custom text-gray-800 dark:text-gray-200">
        Update Your Password
      </h2>
      <form
        className="flex flex-col items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputField
          type="password"
          label="Current Password"
          id="currentPassword"
          value={passwordCurrent}
          isLoading={isLoading}
          onChange={setPasswordCurrent}
          register={register}
          errors={errors}
          isPassword={true}
        />
        <InputField
          type="password"
          label="New Password"
          id="newPassword"
          value={newPassword}
          isLoading={isLoading}
          onChange={setNewPassword}
          register={register}
          errors={errors}
          isPassword={true}
        />
        <InputField
          type="password"
          label="Confirm Password"
          id="passwordConfirm"
          value={passwordConfirm}
          isLoading={isLoading}
          onChange={setPasswordConfirm}
          register={register}
          errors={errors}
          isPassword={true}
        />
        <button type="submit" className="button">
          {isLoading ? <SpinnerMini /> : 'Update Password'}
        </button>
      </form>
    </div>
  );
};

export default UpdatePassword;
