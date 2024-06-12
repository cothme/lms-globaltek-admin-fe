import React from "react";
import useFetchSubscribers from "../../../hooks/course hooks/useFetchSubscribers";
import User from "../../../interfaces/User";
import RemoveUserFromCourseButton from "./RemoveUserFromCourseButton";

interface UserProp {
  id: string | null | undefined;
}

export const CourseProfileSubscribers: React.FC<UserProp> = ({ id }) => {
  const { subscribers, error, loading } = useFetchSubscribers(id);

  if (loading) {
    return (
      <div className="text-black font-garet text-center text-4xl m-4 bg-white rounded-xl p-4">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-black font-garet text-center text-4xl m-4 bg-white rounded-xl p-4">
        {error}
      </div>
    );
  }

  if (!subscribers?.length) {
    return (
      <div className="text-black font-garet text-center text-4xl m-4 bg-white rounded-xl p-4">
        No users enrolled
      </div>
    );
  }

  return (
    <div className="overflow-x-auto border-gray-300 shadow-md rounded-lg glass">
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
          {subscribers.map((user: User) => (
            <tr key={user._id}>
              <td>{user.family_name}</td>
              <td>{user.given_name}</td>
              <td>{user.subscription_tier}</td>
              <td>
                <RemoveUserFromCourseButton _id={user._id} />
              </td>
              <td>
                <a
                  className="btn bg-gray-300 p-2 rounded-lg"
                  href={`/students/${user.user_name}`}
                >
                  More Details
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseProfileSubscribers;
