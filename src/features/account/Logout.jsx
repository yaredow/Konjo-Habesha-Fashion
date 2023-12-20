import { AiOutlineUser } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from './accountSlice';

function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className=" flex dark:text-gray-100 gap-1 items-center mt-8 mb-2">
      <AiOutlineUser className="text-xl text-red-500 dark:text-white" />
      <button
        className=" underline underline-offset-4  hover:text-blue-500 dark:hover:text-blue-400"
        onClick={handleLogout}
      >
        logout
      </button>
    </div>
  );
}

export default Logout;
