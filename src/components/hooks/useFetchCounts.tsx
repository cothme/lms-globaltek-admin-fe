import { useEffect, useState } from "react";
import useAuthContext from "./useAuthContext";

const useFetchCounts = () => {
  const { user } = useAuthContext();
  const [userCount, setUserCount] = useState(0);
  const [courseCount, setCourseCount] = useState(0);
  const [adminCount, setAdminCount] = useState(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchCourses = async () => {
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
        setCourseCount(json);
        if (response.ok) {
          setCourseCount(json.courseCount);
        }
      } catch (err: any) {
        setError(err.message || "Failed to fetch courses");
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
    const fetchAdmins = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_REACT_APP_API_ROOT}/api/admin`,
          {
            headers: {
              Authorization: `Bearer ${user.jwt}`,
            },
          }
        );
        const json = await response.json();
        setAdminCount(json);
        if (response.ok) {
          setAdminCount(json.adminCount);
        }
      } catch (err: any) {
        setError(err.message || "Failed to fetch admins");
      } finally {
        setLoading(false);
      }
    };
    fetchAdmins();
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_REACT_APP_API_ROOT}/api/user`,
          {
            headers: {
              Authorization: `Bearer ${user.jwt}`,
            },
          }
        );
        const json = await response.json();
        setUserCount(json);
        if (response.ok) {
          setUserCount(json.userCount);
        }
      } catch (err: any) {
        setError(err.message || "Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);
  return { userCount, adminCount, courseCount, loading, error };
};

export default useFetchCounts;
