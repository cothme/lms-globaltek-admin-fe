import { useState, useEffect } from "react";
import useAuthContext from "../useAuthContext";

interface User {
  _id: string;
  family_name: string;
  given_name: string;
  email: string;
}

export const useFetchAllStudents = () => {
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
          `${import.meta.env.VITE_REACT_APP_API_ROOT}/api/user`,
          {
            headers: {
              Authorization: `Bearer ${user.jwt}`,
            },
          }
        );
        const json = await response.json();
        if (response.ok) {
          setUsers(json.users);
        } else {
          setError(json.message || "Failed to fetch users");
        }
      } catch (err: any) {
        setError(err.message || "Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };

    if (user.jwt) {
      fetchUsers();
    }
  }, [user.jwt]);

  return { users, loading, error };
};
