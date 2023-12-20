import { FaUserEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Update() {
  const navigate = useNavigate();
  const handleNavigateToUpdateUser = () => {
    navigate('/account/update-account');
  };
  return (
    <div className=" flex dark:text-gray-100 gap-1 items-center mt-4 mb-2">
      <FaUserEdit className="text-xl text-blue-500 dark:text-white" />
      <button
        className=" underline underline-offset-4  hover:text-blue-500 dark:hover:text-blue-400"
        onClick={handleNavigateToUpdateUser}
      >
        Edit
      </button>
    </div>
  );
}

export default Update;
