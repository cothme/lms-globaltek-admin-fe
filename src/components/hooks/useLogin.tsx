import { useState } from "react";
import useAuthContext from "./useAuthContext";

interface userLogin {
  user_name: string;
  password: string;
}
interface userGoogle {
  family_name: string;
  given_name: string;
  email: string;
}

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (input: userLogin) => {
    setIsLoading(true);
    setError(null);
    const response = await fetch(
      `http://localhost:${
        import.meta.env.VITE_REACT_APP_PORT
      }/api/auth/admin/login`,
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
  };

  const loginGoogle = async (input: userGoogle) => {
    setIsLoading(true);
    setError(null);
    const response = await fetch(
      `http://localhost:${
        import.meta.env.VITE_REACT_APP_PORT
      }/api/auth/admin/google`,
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
  };
  return { loginGoogle, login, isLoading, error };
};
