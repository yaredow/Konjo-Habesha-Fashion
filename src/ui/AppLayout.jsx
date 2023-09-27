import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className=" flex flex-col min-h-screen">
      <Navigation />
      <div className="flex-grow w-full mx-auto">
        <Outlet />
      </div>
      <div></div>
      <Footer />
    </div>
  );
}

export default AppLayout;
