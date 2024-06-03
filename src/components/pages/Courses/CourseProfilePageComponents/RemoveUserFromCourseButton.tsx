import React, { useState } from "react";
import useRemoveUserFromCourse from "../../../hooks/course hooks/useRemoveUserFromCourse";
import { useParams } from "react-router-dom";
import LoadingScreen from "../../../helpers/LoadingScreen";
import User from "../../../interfaces/User";
import useFetchSubscribers from "../../../hooks/course hooks/useFetchSubscribers";
import CourseSubscribers from "./CourseProfileSubscribers";

const RemoveUserFromCourseButton: React.FC<User> = ({ _id }) => {
  const { courseId } = useParams();
  const { removeUserFromCourse, confirmDelete } = useRemoveUserFromCourse();
  const { subscribers, setSubscribers, loading, error } =
    useFetchSubscribers(courseId);

  if (loading) {
    return <LoadingScreen />;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleRemoveUser = () => {
    confirmDelete(courseId || "", String(_id));
  };

  return (
    <>
      <button
        className="rounded-md p-2 text-white bg-red-700"
        onClick={handleRemoveUser}
      >
        Remove
      </button>
    </>
  );
};

export default RemoveUserFromCourseButton;
