import UpdateData from '../../ui/UpdateData';
import UpdatePassword from '../../ui/updatePassword';

const UpdateUserData = () => {
  return (
    <div className="flex fixed overflow-hidden inset-0 mt-6 items-center w-full mx-auto justify-center min-h-screen bg-white dark:bg-gray-800">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg md:w-[60%]  mx-auto">
        <UpdateData />

        <UpdatePassword />
      </div>
    </div>
  );
};

export default UpdateUserData;
