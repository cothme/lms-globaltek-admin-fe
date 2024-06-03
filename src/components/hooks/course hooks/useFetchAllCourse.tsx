import { useState, useEffect } from "react";
import useAuthContext from "../useAuthContext";
import Course from "../../interfaces/Course";

export const useFetchAllCourse = () => {
  const { user } = useAuthContext();
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [refresh, setRefresh] = useState<boolean>(false);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(false);
      setError(null);
      try {
        const response = await fetch(
          `${import.meta.env.VITE_REACT_APP_API_ROOT}/api/course`,
          {
            headers: {
              Authorization: `Bearer ${user.jwt}`,
            },
          }
        );
        const json = await response.json();
        if (response.ok) {
          setCourses(json.courses);
        } else {
          setError(json.message || "Failed to fetch courses");
        }
      } catch (err: any) {
        setError(err.message || "Failed to fetch courses");
      } finally {
      }
    };
    fetchCourses();
  }, [courses]);

  const triggerRefresh = () => {
    setRefresh((prev) => !prev);
    console.log(refresh);
  };

  return { courses, loading, error, triggerRefresh };
};
