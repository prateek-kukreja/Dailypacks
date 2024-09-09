import { useState } from "react";
import { useAuthContext } from "../hook/useAuthContext";

export const useSignin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signin = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const interruptionMessage = setTimeout(() => {
      alert(
        "Please note that our backend deployment process may experience temporary interruptions due to inactivity detection by our hosting provider. If such an interruption occurs, deployment will automatically resume after approximately 50 seconds. We apologize for any inconvenience this may cause and appreciate your understanding."
      );
    }, 5000);

    const response = await fetch("http://localhost:3001/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const res_data = await response.json();

    if (!response.ok) {
      clearTimeout(interruptionMessage);
      setIsLoading(false);
      setError(res_data.error);
      return false; // return false on failure
    }

    if (response.ok) {
      clearTimeout(interruptionMessage);

      // save the user to local storage
      localStorage.setItem("user", JSON.stringify(res_data));

      // update the auth context
      dispatch({ type: "LOGIN", payload: res_data });

      setIsLoading(false);
      return true; // return true on success
    }
  };

  return { signin, error, isLoading };
};
