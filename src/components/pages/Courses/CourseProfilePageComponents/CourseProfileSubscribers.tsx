import React from "react";
import useFetchSubscribers from "../../../hooks/course hooks/useFetchSubscribers";
import User from "../../../interfaces/User";
import RemoveUserFromCourseButton from "./RemoveUserFromCourseButton";

interface UserProp {
  id: string | null | undefined;
}

const Loading: React.FC = () => (
  <div className="text-black font-garet text-center text-4xl m-4 bg-white rounded-xl p-4">
    Loading...
  </div>
);

const Error: React.FC<{ message: string }> = ({ message }) => (
  <div className="text-black font-garet text-center text-4xl m-4 bg-white rounded-xl p-4">
    Error: {message}
  </div>
);

const NoCourses: React.FC = () => (
  <div className="text-black font-garet text-center text-4xl m-4 bg-white rounded-xl p-4">
    No users enrolled
  </div>
);

export const CourseSubscribers: React.FC<{ users: User[] }> = ({ users }) => (
  <div className="relative m-10 mt-0">
    <div className="flex flex-col">
      <div className="overflow-x-auto mt-4">
        <table className="table text-black bg-white w-full">
          <thead>
            <tr>
              <th>Family Name</th>
              <th>Given Name</th>
              <th>Subscription Type</th>

              <th>Quick Actions</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.family_name}</td>
                <td>{user.given_name}</td>
                <td>{user.subscription_tier}</td>

                <td>
                  <div className="flex gap-4">
                    <RemoveUserFromCourseButton _id={user._id} />
                  </div>
                </td>
                <td>
                  <a
                    className="btn bg-gray-300 p-2 rounded-lg"
                    href={`/students/profile/${user._id}`}
                  >
                    More Details
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export const Subscribers: React.FC<UserProp> = ({ id }) => {
  const { subscribers, error, loading } = useFetchSubscribers(id);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;
  if (!subscribers || subscribers.length === 0) return <NoCourses />;

  return <CourseSubscribers users={subscribers} />;
};

export default CourseSubscribers;
