import { useState } from "react";
import useAuthContext from "../useAuthContext";
import { toastNotify } from "../../helpers/toastNotify";
import swal from "sweetalert";
import useFetchSubscribers from "./useFetchSubscribers";

const useRemoveUserFromCourse = (userId: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useAuthContext();
  const { triggerRefresh } = useFetchSubscribers(userId);

  const removeUserFromCourse = async (courseId: string, userId: string) => {
    setLoading(true);
    setError(null);
    console.log(userId, courseId);
    try {
      const response = await fetch(
        `http://localhost:4000/api/admin/remove/${userId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.jwt}`,
          },
          body: JSON.stringify({ courseName: courseId }),
        }
      );

      const json = await response.json();

      if (!response.ok) {
        throw new Error(json.message || "Failed to remove user from course");
      }
      toastNotify(json.message);
      triggerRefresh();
      return true;
    } catch (err: any) {
      setError(err.message);
      toastNotify(err.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const confirmDelete = (courseId: string, userId: string) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this course!",
      icon: "warning",
      buttons: ["Cancel", "Delete"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        return removeUserFromCourse(courseId, userId);
      }
      return false;
    });
  };

  return { removeUserFromCourse, loading, error, confirmDelete };
};

export default useRemoveUserFromCourse;
