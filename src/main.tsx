import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthContextProvider } from "./components/context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_REACT_APP_CLIENT_ID}>
        <App />
      </GoogleOAuthProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
