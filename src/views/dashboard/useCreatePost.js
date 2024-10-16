import { useState } from "react";
import { toast } from "react-toastify";
import { createPost } from "api/post";

function useCreateUser(triggerRefetch) {
  const [isloading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  const addPost = async (formData) => {
    setIsLoading(true);

    try {
      setIsLoading(true)
      await createPost(formData);
      setIsLoading(false)
      toggleOpen()
      triggerRefetch();
      toast.success("Post created successfully!");
    } catch (error) {
      toast.error(
        "Failed to create user: " + (error.message || "An error occurred.")
      );
    } finally {
      setIsLoading(false);
    }
  };

  return {
    onAdd: addPost,
    isAdding: isloading,
    isAddOpen: isOpen,
    toggleAdd: toggleOpen,
  };
}

export default useCreateUser;
