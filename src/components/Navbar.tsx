import { Link } from "react-router-dom";
import { useLogout } from "./hooks/useLogout";
import useAuthContext from "./hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <>
      <nav className="bg-theme-maroon border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to={"/"}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="src/assets/branding/linkedlearnlogonotextwhite.png"
              className="h-16"
              alt="LinkedLearn Logo"
            />
            <span className="self-center text-2xl font-garetheavy whitespace-nowrap text-white">
              LinkedLearn
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          ></button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
              <li>
                {!user && (
                  <Link
                    to="/login"
                    className="block py-2 px-3 font-garet text-2xl text-white md:text-white md:p-0 dark:text-white"
                    aria-current="page"
                  >
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
          {user && (
            <div className="flex">
              <div className="text-xl bg-theme-3 p-4 rounded-lg mx-10 text-black font-garet">
                {user.given_name + " " + user.family_name}
              </div>
              <button
                data-testid="logout-button"
                onClick={handleLogout}
                className="text-3xl text-white font-garet"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Nav;
