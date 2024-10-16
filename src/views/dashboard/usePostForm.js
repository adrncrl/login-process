import { useEffect, useState } from "react";
import serialize from "form-serialize";

const usePostForm = (onSubmit) => {
  // const [formData, setFormData] = useState({
  //   title: post?.title || "",
  //   message: post?.message || "",
  // });

  // useEffect(() => {
  //   setFormData({
  //     title: post?.title || "",
  //     message: post?.message || "",
  //   });
  // }, [post]);

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData((prevData) => ({ ...prevData, [name]: value }));
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    if (form.checkValidity() === false) {
      form.classList.add("was-validated");
      return false;
    }

    const serializedData = serialize(form, { hash: true });
    onSubmit(serializedData);
  };

  // const isCreateMode = mode === "create";
  // const isFormEmpty = Object.values(formData).every((value) => !value);
  // const isFormUnchanged =
  //   !isCreateMode &&
  //   formData.title === post?.title &&
  //   formData.message === post?.message 

  // const isSubmitDisabled = isCreateMode ? isFormEmpty : isFormUnchanged;

  return handleSubmit
};

export default usePostForm;
