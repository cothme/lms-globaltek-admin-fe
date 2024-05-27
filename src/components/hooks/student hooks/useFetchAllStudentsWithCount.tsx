import { useEffect, useState } from "react";
import useAuthContext from "../useAuthContext";
import User from "../../interfaces/User";

const useFetchAllStudentsWithCount = (count: number) => {
  const { user } = useAuthContext();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `${import.meta.env.VITE_REACT_APP_API_ROOT}/api/admin/count/${count}`,
          {
            headers: {
              Authorization: `Bearer ${user.jwt}`,
            },
          }
        );
        const json = await response.json();
        if (response.ok) {
          setUsers(json.user);
        } else {
          setError(json.message || "Failed to fetch users");
        }
      } catch (err: any) {
        setError(err.message || "Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [count, user.jwt]);

  return { users, loading, error };
};

export default useFetchAllStudentsWithCount;
