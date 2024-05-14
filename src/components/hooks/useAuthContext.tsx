import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("afsdfg");
  }
  return context;
};

export default useAuthContext;
