import React from "react";
import useAuthContext from "../hooks/useAuthContext";

const CoursesPage = () => {
  const { user } = useAuthContext();
  return (
    <div className="lg:ml-80">
      <div className="text-3xl font-garet m-4">
        <span className="font-garetheavy text-theme-gold">Course List</span>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Family Name</th>
              <th>Given Name</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div key={user.email} className="font-bold">
                      {user.family_name}
                    </div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td key={user.email}>
                {user.given_name}
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td key={user.given_name}>{user.email}</td>
              <th>
                <button className="btn btn-ghost btn-xs">More Details</button>
              </th>
            </tr>

            {/* row 1 */}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default CoursesPage;
