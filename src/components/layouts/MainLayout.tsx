import { Outlet } from "react-router-dom";
import SideNav from "../SideNav";
import Topbar from "../Topbar";

const MainLayout = () => {
  return (
    <>
      <SideNav>
        <Topbar />
        <Outlet />
      </SideNav>
    </>
  );
};

export default MainLayout;
