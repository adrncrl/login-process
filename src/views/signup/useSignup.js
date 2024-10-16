import { useState } from "react";
import serialize from "form-serialize";
import { useNavigate } from "react-router-dom";
import { signUpUser } from "../../api/auth";

const useSignUp = () => {
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
    //const { firstName, lastName, email, password } = serializedData;

    try {
      await signUpUser(serializedData);
      setSuccess("Successfully signed up");
      navigate("/login");
    } catch (error) {
      setError("Error signing up. Please try again.");
    }
  };

  return { handleSignUp, success, error };
};

export default useSignUp;
