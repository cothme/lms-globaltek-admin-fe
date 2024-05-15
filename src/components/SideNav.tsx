import { ReactNode, useState } from "react";
import { IoListOutline } from "react-icons/io5";
import { useLogout } from "./hooks/useLogout";
import { NavLink } from "react-router-dom";
import Logo from "../assets/branding/linkedlearnlogoadminwhite.png";

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
        <div className="drawer-content flexjustify-center ">
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
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu w-40 lg:w-80 min-h-screen bg-theme-maroon text-white font-garet lg:text-3xl text-sm">
            {/* Sidebar content here */}
            <img src={Logo} className="lg:w-auto w-40" alt="" />
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
            <div>
              <button
                onClick={logout}
                className="w-full p-4 hover:bg-black duration-200 rounded-2xl bg-theme-blue text-center"
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
