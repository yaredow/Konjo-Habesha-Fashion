import UpdateData from '../../ui/UpdateData';
import UpdatePassword from '../../ui/updatePassword';

const UpdateUserData = () => {
  return (
    <div className="flex mt-12 fixed inset-0 top-0 items-center justify-center h-screen bg-white dark:bg-gray-800">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg w-2/3">
        <UpdateData />
        <UpdatePassword />
      </div>
    </div>
  );
};

export default UpdateUserData;
