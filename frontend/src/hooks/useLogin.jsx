import axios from "axios";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAuthContext();
  const [error, setError] = useState(null);

  const login = async ({ email, password }) => {
    try {
      const response = await axios.post("http://localhost:3000/api/login", {
        email,
        password,
      });
      console.log(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
      dispatch({ type: "LOGIN", payload: response.data });
      if (!response.ok) setError(response.error);
    } catch (error) {
      setLoading(true);
      if (error.response) {
        console.log(error.message);
        console.log(error.response.data.error);
        setError(error.response.data.error);
        console.log(`Error is this:  ${error}`);
      } else {
        console.log(error.message);
        setError(error.message);
      }
    }
    if (error === null) {
      setLoading(false);
    }
  };
  return { login, loading, error };
};
