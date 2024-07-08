import { ImSearch } from "react-icons/im";
import LoadingScreen from "../helpers/LoadingScreen";
import { useFetchAllStudents } from "../hooks/student hooks/useFetchAllStudents";
import { useState } from "react";
import ProfileImagePlaceHolder from "../../assets/profile-img-placeholder.png";

const StudentsPage = () => {
  const { users, loading, error } = useFetchAllStudents();
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter(
    (user) =>
      user.user_name?.toLowerCase().includes(search.toLowerCase()) ||
      user.family_name?.toLowerCase().includes(search.toLowerCase()) ||
      user.given_name?.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <LoadingScreen />;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="flex-grow mx-4">
        <div className="relative">
          <input
            type="text"
            className="w-full inline-block border border-gray-300 rounded-lg px-4 py-2 pl-10 focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <ImSearch className="text-gray-400" />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Family Name</th>
              <th>Given Name</th>
              <th>Email</th>
              <th>Subscription</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={
                            user?.picture
                              ? user?.picture
                              : ProfileImagePlaceHolder
                          }
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
                  <span
                    className={`badge ${
                      user.subscription_tier === "Free" ||
                      user.subscription_tier === "free"
                        ? "badge-ghost"
                        : "badge-info"
                    } badge-sm`}
                  >
                    {user.subscription_tier}
                  </span>
                </td>
                <td>{user.email}</td>
                <td>{user.subscription_tier}</td>
                <th>
                  <a
                    data-testid={`select-student-${user._id}`}
                    href={`students/${user.user_name}`}
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
    </>
  );
};

export default StudentsPage;
