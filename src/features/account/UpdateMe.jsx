import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import InputField from '../../ui/InputField';
import SpinnerMini from '../../ui/SpinnerMini';

const UpdateMe = () => {
  // State for email and name form
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  // State for password form
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {};

  return (
    <div className="flex mt-12 fixed inset-0 top-0 items-center justify-center h-screen bg-white dark:bg-gray-800">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg w-2/3">
        <h2 className="text-2xl font-bold text-center mb-4 font-custom text-gray-800 dark:text-gray-200">
          Update your data
        </h2>

        {/* Email and Name Update Form */}
        <form
          className="flex flex-col items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputField
            label="Email"
            id="email"
            value={email}
            onChange={setEmail}
            register={register}
            errors={errors}
          />
          <InputField
            label="Name"
            id="name"
            value={name}
            onChange={setName}
            register={register}
            errors={errors}
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
            onSubmit={handleSubmit(onSubmit)}
          >
            <InputField
              label="Current Password"
              id="currentPassword"
              value={currentPassword}
              onChange={setCurrentPassword}
              register={register}
              errors={errors}
            />

            <InputField
              label="New Password"
              id="newPassword"
              value={newPassword}
              onChange={setNewPassword}
              register={register}
              errors={errors}
            />

            <InputField
              label="Confirm Password"
              id="passwordConfirm"
              value={passwordConfirm}
              onChange={setPasswordConfirm}
              register={register}
              errors={errors}
            />

            <button type="submit" className="button">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateMe;
