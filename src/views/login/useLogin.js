
import { useState } from "react";
import serialize from "form-serialize";
import axios from "axios";
import { toast } from "react-toastify";
import { loginUser } from "../../api/auth";

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
      const { token, ...userData } = await loginUser(email, password);
      onSuccess(token, userData);
      toast.success("Login successfully!"); 
    } catch (error) {
      setError("Invalid email or password");
    }
  };

  return { handleLogin, error };
};

export default useLogin;
