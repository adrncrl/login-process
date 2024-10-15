
import { useState } from "react";
import serialize from "form-serialize";
import axios from "axios";
import { toast } from "react-toastify";

const useLogin = (onSuccess) => {
  const [error, setError] = useState("");
  
  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.target;

    if (form.checkValidity() === false) {
      form.classList.add("was-validated");
      return false;
    }

    const serializedData = serialize(form, { hash: true });
    const { email, password } = serializedData;

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/auth/login",
        {
          email,
          password,
        }
      );

      const { token, ...userData } = response.data.data;
      onSuccess(token, userData);
      toast.success("Login successfully!"); 
    } catch (error) {
      setError("Invalid email or password");
    }
  };

  return { handleLogin, error };
};

export default useLogin;
