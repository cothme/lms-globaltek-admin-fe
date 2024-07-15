import { useState, useCallback } from "react";
import { toastNotify } from "../../helpers/toastNotify";
import swal from "sweetalert";
import useAuthContext from "../useAuthContext";
import { useNavigate } from "react-router-dom";

const useDeleteTopic = (topicId: string, courseId: string) => {
  const { user } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleDelete = useCallback(async () => {
    const confirmDeletion = await swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this topic!",
      icon: "warning",
      buttons: [
        "Cwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwancel",
        "Delete",
      ],
      dangerMode: true,
    });

    if (!confirmDeletion) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_API_ROOT}/api/topic/${topicId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${user.jwt}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete the topic");
      }

      toastNotify("Deleted Successfully!");
      navigate("/courses/" + courseId);
    } catch (error: any) {
      console.error("Error deleting topic:", error);
      setError(error);
      swal({
        icon: "error",
        text: String(error),
      });
    } finally {
      setLoading(false);
    }
  }, [courseId]);

  return { handleDelete, loading, error };
};

export default useDeleteTopic;
