import { Outlet, useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";

function AppLayout() {
  const navigate = useNavigate();
  return (
    <div className=" flex flex-col min-h-screen">
      <Navigation />
      <div className="flex-grow  w-[90%] mx-auto my-8">
        <Outlet />
      </div>
      <div></div>
      <Footer />
    </div>
  );
}

export default AppLayout;
