import { useState, useEffect } from "react";
import useAuthContext from "../../hooks/useAuthContext";
import User from "../../interfaces/User";

const useFetchSubscribers = (id: string | null | undefined) => {
  const { user } = useAuthContext();
  const [subscribers, setSubscribers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSubscribers = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_REACT_APP_API_ROOT
          }/api/course/subscribers/${id}`,
          {
            headers: {
              Authorization: `Bearer ${user.jwt}`,
            },
          }
        );
        const json = await response.json();
        if (response.ok) {
          setSubscribers(json.subscribers);
        } else {
          setError(json.message || "Failed to fetch subscribers");
        }
      } catch (err: any) {
        setError(err.message || "Failed to fetch subscribers");
      } finally {
        setLoading(false);
      }
    };
    fetchSubscribers();
  }, []);

  useEffect(() => {
    console.log(subscribers);
  }, [subscribers]);

  return { setSubscribers, subscribers, loading, error };
};

export default useFetchSubscribers;
