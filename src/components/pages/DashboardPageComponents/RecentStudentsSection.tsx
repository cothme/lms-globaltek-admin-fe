import useFetchAllStudentsWithCount from "../../hooks/student hooks/useFetchAllStudentsWithCount";

const RecentStudentsSection = () => {
  const { users, loading, error } = useFetchAllStudentsWithCount(3);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <>
      <div>
        <div className="text-3xl font-garet m-4">
          Recent{" "}
          <span className="font-garetheavy text-theme-blue">Students</span>
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
                    <button className="btn btn-ghost btn-xs">details</button>
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

export default RecentStudentsSection;
