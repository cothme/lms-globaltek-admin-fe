import { useState, useEffect } from "react";
import useAuthContext from "../../hooks/useAuthContext";
import Course from "../../interfaces/Course";

const useFetchCoursesEnrolled = (id: string | null | undefined) => {
  const { user } = useAuthContext();
  const [coursesEnrolled, setCoursesEnrolled] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log(id);

    const fetchCoursesEnrolled = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `${import.meta.env.VITE_REACT_APP_API_ROOT}/api/user/courses/${id}`,
          {
            headers: {
              Authorization: `Bearer ${user.jwt}`,
            },
          }
        );
        const json = await response.json();
        if (response.ok) {
          setCoursesEnrolled(json.courses_enrolled);
        } else {
          setError(json.message || "Failed to fetch enrolled courses");
        }
      } catch (err: any) {
        setError(err.message || "Failed to fetch enrolled courses");
      } finally {
        setLoading(false);
      }
    };
    fetchCoursesEnrolled();
  }, [user]);

  useEffect(() => {
    console.log(coursesEnrolled);
  }, [coursesEnrolled]);

  return { coursesEnrolled, loading, error };
};

export default useFetchCoursesEnrolled;
