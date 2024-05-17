import { ReactNode, useState } from "react";
import { IoListOutline } from "react-icons/io5";
import { useLogout } from "./hooks/useLogout";
import { NavLink } from "react-router-dom";
import Logo from "../assets/branding/linkedlearnletterlogo.png";

interface SideNavProps {
  children?: ReactNode;
}

const SideNav: React.FC<SideNavProps> = ({ children }) => {
  const { logout } = useLogout();
  const [activePage, setActivePage] = useState("Dashboard");
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content justify-center">
          {/* Page content here */}
          <div>
            <label
              htmlFor="my-drawer-2"
              className="btn bg-theme-gold drawer-button lg:hidden"
            >
              <IoListOutline />
            </label>
          </div>
          {children}
        </div>
        <div className="drawer-side z-50">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="fixed menu w-60 lg:w-60 min-h-screen bg-theme-maroon text-white lg:text-2xl text-lg flex flex-col">
            {/* Sidebar content here */}
            <img src={Logo} className="relative m-4 lg:w-48 w-40" alt="" />
            {/* <h1 className="text-3xl p-4 font-roboto-light">LinkedLearn</h1> */}
            <li>
              <NavLink className="my-2" to="/">
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink className="my-2" to="/courses">
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink className="my-2" to="/students">
                Students
              </NavLink>
            </li>
            <div className="flex-grow"></div>{" "}
            {/* This div will take up all the remaining space */}
            <div className="p-4">
              <button
                onClick={logout}
                className="w-full p-4 hover:bg-black duration-200 rounded-2xl bg-red-700 text-center"
              >
                Log out
              </button>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideNav;
