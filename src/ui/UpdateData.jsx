import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import InputField from '../ui/InputField';
import toast from 'react-hot-toast';
import SpinnerMini from '../ui/SpinnerMini';
import useUpdateSettings from '../hook/useUpdateSettings';

const UpdateData = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const { updateData, isLoading, isSuccess, error } = useUpdateSettings();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {
    let dataToUpdate = {};

    if (email && name) {
      dataToUpdate = { email, name };
    } else if (email) {
      dataToUpdate = { email };
    } else if (name) {
      dataToUpdate = { name };
    }

    await updateData(dataToUpdate, 'data');
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success('Account was updated successfully.');
    } else if (error) {
      toast.error(error);
    }
  }, [isSuccess, error]);

  return (
    <div className=" mt-8">
      <h2 className="text-2xl font-bold text-center mb-4 font-custom text-gray-800 dark:text-gray-200">
        Update Your Data
      </h2>
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
          isRequired={false}
        />
        <InputField
          label="Name"
          id="name"
          value={name}
          onChange={setName}
          register={register}
          errors={errors}
          isRequired={false}
        />
        <button type="submit" className="button">
          {isLoading ? <SpinnerMini /> : 'Update data'}
        </button>
      </form>
    </div>
  );
};

export default UpdateData;
