import { useNavigate } from 'react-router-dom';
// import useUser from '../features/authentication/useUser';
// import Spinner from './Spinner';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/account/accountSlice';

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // 1. Load the authenticated user
  const user = useSelector(selectUser);

  // 3. if there is NO autenticated user, redirect to the login form
  useEffect(() => {
    if (!user) navigate('/login');
  }, [user, navigate]);

  // 2. while loading show a spinner
  //   if (isLoading)
  //     return (
  //       <div className="h-screen bg-grey-50 flex justify-center items-center">
  //         <Spinner />
  //       </div>
  //     );

  // if (!user) navigate("/login");
  // 4. if there IS  user, render the app
  if (user) return children;
}

export default ProtectedRoute;
