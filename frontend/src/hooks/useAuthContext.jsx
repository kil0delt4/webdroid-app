import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  try {
    if (!context) {
      throw Error("context is outside its zone");
    }
  } catch (error) {
    console.log(`error: ${error}`);
  }
  return context;
};
