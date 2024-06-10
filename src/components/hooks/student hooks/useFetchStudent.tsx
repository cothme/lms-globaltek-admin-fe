import { useEffect, useState } from "react";
import useAuthContext from "../useAuthContext";
import userInterface from "../../interfaces/User";
import { useParams } from "react-router-dom";

const useFetchStudent = () => {
  const [users, setUser] = useState<userInterface | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuthContext();
  const { userName } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_REACT_APP_API_ROOT}/api/user/${userName}`,
          {
            headers: {
              Authorization: `Bearer ${user.jwt}`,
            },
          }
        );
        const json = await response.json();
        setUser(json);
        if (response.ok) {
          setUser(json);
        }
      } catch (err: any) {
        setError(err.message || "Failed to fetch student");
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);
  return { users, loading, error };
};

export default useFetchStudent;
