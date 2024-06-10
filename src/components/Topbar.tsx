import { Link, useLocation } from "react-router-dom";
import { capitalizeFirstLetter } from "./helpers/capitalizeFirstLetter";

const Topbar = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="text-xl breadcrumbs font-garet m-4 border border-gray-200  rounded-lg p-4">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;

          const displayName = capitalizeFirstLetter(value.replace(/%20/g, " "));

          const isLastPart = index === pathnames.length - 1;

          return (
            <li key={to}>
              {!isLastPart && <Link to={to}>{displayName}</Link>}

              {isLastPart && displayName}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Topbar;
