// src/hooks/useSignUp.js
import { useState } from "react";
import serialize from "form-serialize";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 

const useSignUp = (onSuccess) => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const handleSignUp = async (event) => {
    event.preventDefault();
    const form = event.target;

    if (form.checkValidity() === false) {
      form.classList.add("was-validated");
      return false;
    }

    const serializedData = serialize(form, { hash: true });
    const { firstName, lastName, email, password } = serializedData;

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/user/signup",
        {
          firstName,
          lastName,
          email,
          password,
        }
      );

      setSuccess("Successfully signed up");
      setError(""); 
      navigate('/login'); 
    } catch (error) {
      setError("Error signing up. Please try again.");
      setSuccess(""); 
    }
  };

  return { handleSignUp, success, error };
};

export default useSignUp;
