import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import Course from "../../interfaces/Course";

const useFetchCourse = (courseId: string | undefined) => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!courseId) return;

    const fetchCourse = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `${import.meta.env.VITE_REACT_APP_API_ROOT}/api/course/${courseId}`,
          {
            headers: {
              Authorization: `Bearer ${user.jwt}`,
            },
          }
        );
        const json = await response.json();
        if (response.ok) {
          setCourse(json);
        } else {
          setError(json.message || "Failed to fetch course");
          navigate("/courses");
        }
      } catch (err: any) {
        setError(err.message || "Failed to fetch course");
        navigate("/mycourses");
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [courseId, navigate, user.jwt]);

  return { course, loading, error, setCourse };
};

export default useFetchCourse;
