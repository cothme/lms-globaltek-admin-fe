import Tier from "../../interfaces/Tier";
import useAuthContext from "../useAuthContext";
import { useState, useEffect } from "react";

function useFetchTiers() {
  const [tiers, setTiers] = useState<Tier[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuthContext();
  useEffect(() => {
    const fetchTiers = async () => {
      console.log("fetching courses");

      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `${import.meta.env.VITE_REACT_APP_API_ROOT}/api/tier`,
          {
            headers: {
              Authorization: `Bearer ${user.jwt}`,
            },
          }
        );
        const json = await response.json();
        if (response.ok) {
          setLoading(false);

          setTiers(json.tiers);
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
    fetchTiers();
  }, []);
  return { tiers, loading, error };
}

export default useFetchTiers;
