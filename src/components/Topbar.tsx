import { Link, useLocation } from "react-router-dom";
import { capitalizeFirstLetter } from "./helpers/capitalizeFirstLetter";

const Topbar = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  return (
    <>
      <div className="text-lg breadcrumbs font-garet m-4">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join("/")}`;
            const displayName = capitalizeFirstLetter(value);

            return index === pathnames.length - 1 ? (
              <li key={to}>{displayName}</li>
            ) : (
              <li key={to}>
                <Link to={to}>{displayName}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Topbar;
