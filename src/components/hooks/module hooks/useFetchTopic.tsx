import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthContext from "../useAuthContext";
import Topic from "../../interfaces/Topic";

const useFetchTopic = (topicName: string | undefined) => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const [topic, setTopic] = useState<Topic | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!topicName) return;

    const fetchTopic = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_REACT_APP_API_ROOT
          }/api/topic/getTopic/${topicName}`,
          {
            headers: {
              Authorization: `Bearer ${user.jwt}`,
            },
          }
        );
        const json = await response.json();
        if (response.ok) {
          setTopic(json);
        } else {
          setError(json.message || "Failed to fetch course");
          navigate("/courses");
        }
      } catch (err: any) {
        setError(err.message || "Failed to fetch course");
        navigate("/courses");
      } finally {
        setLoading(false);
      }
    };

    fetchTopic();
  }, [topicName, navigate, user.jwt]);

  return { topic, loading, error, setTopic };
};

export default useFetchTopic;
