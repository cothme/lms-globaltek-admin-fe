import React from "react";
import useAuthContext from "./hooks/useAuthContext";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuthContext();

  if (user) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
