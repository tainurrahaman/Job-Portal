import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-10/12 mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
