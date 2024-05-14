import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import SideNav from "../SideNav";
import Footer from "../Footer";
const MainLayout = () => {
  return (
    <>
      <SideNav>
        <Outlet />
      </SideNav>
    </>
  );
};

export default MainLayout;
