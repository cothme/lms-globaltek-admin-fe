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
    const fetchCounts = async () => {
      try {
        const [coursesResponse, adminsResponse, usersResponse] =
          await Promise.all([
            fetch(`${import.meta.env.VITE_REACT_APP_API_ROOT}/api/course`, {
              headers: {
                Authorization: `Bearer ${user.jwt}`,
              },
            }),
            fetch(`${import.meta.env.VITE_REACT_APP_API_ROOT}/api/admin`, {
              headers: {
                Authorization: `Bearer ${user.jwt}`,
              },
            }),
            fetch(`${import.meta.env.VITE_REACT_APP_API_ROOT}/api/user`, {
              headers: {
                Authorization: `Bearer ${user.jwt}`,
              },
            }),
          ]);

        const [coursesData, adminsData, usersData] = await Promise.all([
          coursesResponse.json(),
          adminsResponse.json(),
          usersResponse.json(),
        ]);

        if (coursesResponse.ok) {
          setCourseCount(coursesData.courseCount);
        } else {
          setCourseCount(0);
        }

        if (adminsResponse.ok) {
          setAdminCount(adminsData.adminCount);
        } else {
          setAdminCount(0);
        }

        if (usersResponse.ok) {
          setUserCount(usersData.userCount);
        } else {
          setUserCount(0);
        }
      } catch (err: any) {
        setError(err.message || "Failed to fetch counts");
      } finally {
        setLoading(false);
      }
    };

    fetchCounts();
  }, [user.jwt]);

  return { userCount, adminCount, courseCount, loading, error };
};

export default useFetchCounts;
