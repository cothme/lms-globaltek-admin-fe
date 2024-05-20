import { useState } from "react";
import useAuthContext from "./useAuthContext";

interface user {
  family_name: string;
  given_name: string;
  email: string;
  password: string;
  c_password: string;
}

export const useSignUp = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (input: user) => {
    setIsLoading(true);
    setError(null);
    const response = await fetch(
      `http://localhost:${
        import.meta.env.VITE_REACT_APP_PORT
      }/api/auth/register`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      }
    );
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(json));
      dispatch({ type: "LOGIN", payload: json });

      setIsLoading(false);
    }
  };
  return { signup, isLoading, error };
};
