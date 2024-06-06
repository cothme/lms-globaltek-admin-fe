import LoadingScreen from "../helpers/LoadingScreen";
import { useFetchAllStudents } from "../hooks/student hooks/useFetchAllStudents";

const StudentsPage = () => {
  const { users, loading, error } = useFetchAllStudents();

  if (loading) {
    return <LoadingScreen />;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="lg:ml-60">
        <div className="text-4xl breadcrumbs font-garetheavy text-theme-blue m-4">
          <ul>
            <li>
              <a href="/students">Student</a>
            </li>
          </ul>
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
                  <td>{user.subscription_tier}</td>
                  <th>
                    <a
                      data-testid={`select-student-${user._id}`}
                      href={`students/profile/${user._id}`}
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
