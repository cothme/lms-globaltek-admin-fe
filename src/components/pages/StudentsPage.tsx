import { useEffect, useState } from "react";
import useAuthContext from "../hooks/useAuthContext";

interface User {
  _id: string;
  family_name: string;
  given_name: string;
  email: string;
}

const StudentsPage = () => {
  const { user } = useAuthContext();
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_API_ROOT}/api/admin`,
        {
          headers: {
            Authorization: `Bearer ${user.jwt}`,
          },
        }
      );
      const json = await response.json();
      setUsers(json);
      if (response.ok) {
        setUsers(json.users);
      }
    };
    fetchUsers();
  }, []);
  return (
    <>
      <div className="lg:ml-60">
        <div className="text-3xl font-garet m-4">
          <span className="font-garetheavy text-theme-gold">Student List</span>
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
              {users.map((user) => (
                <tr key={user._id}>
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
                        <div className="font-bold">{user.family_name}</div>
                        <div className="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {user.given_name}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Desktop Support Technician
                    </span>
                  </td>
                  <td>{user.email}</td>
                  <th>
                    <a
                      href={`/profile/${user._id}`}
                      className="btn btn-ghost btn-xs"
                    >
                      More Details
                    </a>
                  </th>
                </tr>
              ))}
              {/* row 1 */}
            </tbody>
            {/* foot */}
          </table>
        </div>
      </div>
    </>
  );
};

export default StudentsPage;
