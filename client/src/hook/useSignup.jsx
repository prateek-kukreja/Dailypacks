import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (name, email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(
      "https://dailypacks.onrender.com/api/auth/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      }
    );
    const res_data = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(res_data.error);
      return false;
    }

    if (response.ok) {
      // save the user to local storage
      localStorage.setItem("user", JSON.stringify(res_data));

      //   update the auth context
      dispatch({ type: "LOGIN", payload: res_data });

      setIsLoading(false);
      return true;
    }
  };

  return { signup, error, isLoading };
};
