import { useState } from "react";
import useAuthContext from "./useAuthContext";

interface userGoogle {
  family_name: string;
  given_name: string;
  email: string;
}

export const useGoogleLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const loginGoogle = async (input: userGoogle) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch(
        `http://localhost:${
          import.meta.env.VITE_REACT_APP_PORT
        }/api/auth/google`,
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
        localStorage.setItem("token", JSON.stringify(json.jwt));
        dispatch({ type: "LOGIN", payload: json });

        setIsLoading(false);
      }
    } catch (error) {
      console.log("Error");
    }
  };
  return { loginGoogle, isLoading, error };
};
