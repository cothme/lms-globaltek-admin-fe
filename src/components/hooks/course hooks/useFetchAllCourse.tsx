import { useState, useEffect } from "react";
import useAuthContext from "../useAuthContext";
import Course from "../../interfaces/Course";

export const useFetchAllCourse = () => {
  const { user } = useAuthContext();
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [refresh, setRefresh] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [pages] = useState<number>(1);
  const limit = 10;

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_REACT_APP_API_ROOT
          }/api/course/?limit=${limit}&page=${page}`,
          {
            headers: {
              Authorization: `Bearer ${user.jwt}`,
            },
          }
        );
        const json = await response.json();
        if (response.ok) {
          setLoading(false);

          setCourses(json.courses);
        } else if (response.status === 404) {
          setError(json.message || "No courses found");
        } else {
          setError(json.message || "Failed to fetch courses");
        }
      } catch (err: any) {
        setError(err.message || "Failed to fetch courses");
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, [refresh]);

  const triggerRefresh = () => {
    setRefresh((prev) => !prev);
  };

  return {
    setRefresh,
    refresh,
    courses,
    loading,
    error,
    triggerRefresh,
    page,
    setPage,
    pages,
  };
};
