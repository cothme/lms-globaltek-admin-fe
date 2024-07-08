import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Course from "../../interfaces/Course";
import useAuthContext from "../useAuthContext";
import swal from "sweetalert";
import { toastNotify } from "../../helpers/toastNotify";

const useDeleteTopic = (
  course: Course | null,
  setCourse: (course: Course) => void
) => {
  const [isPublishing, setIsPublishing] = useState(false);
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const updatePublishedStatus = async (
    courseId: string | undefined,
    newStatus: boolean | undefined
  ) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_API_ROOT}/api/topic/${courseId}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${user.jwt}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ published: newStatus }),
        }
      );

      if (!response.ok) {
        throw new Error("");
      }

      swal({
        icon: "success",
        text: course?.published
          ? "Unpublished Successfully!"
          : "Published Successfully!",
      });
      return true;
    } catch (error) {
      swal({
        icon: "error",
        text: String("Unauthorized"),
      });
      return false;
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_API_ROOT}/api/course/${course?._id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${user.jwt}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        toastNotify("Deleted Successfully!");
        navigate("/courses");
      } else if (response.status === 403) {
        swal({
          icon: "error",
          text: String("Unauthorized"),
        });
        throw new Error("Unauthorized");
      }
    } catch (error) {
      console.error("Error deleting course:", error);
      swal({
        icon: "error",
        text: String(error),
      });
    }
  };

  const confirmDelete = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this course!",
      icon: "warning",
      buttons: ["Cancel", "Delete"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        handleDelete();
      }
    });
  };
  return { isPublishing, confirmDelete };
};

export default useDeleteTopic;
