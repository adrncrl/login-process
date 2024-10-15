import { useState } from "react";
import { toast } from "react-toastify";

function useEditPost(editUser, triggerRefetch) {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClick = async (postId, formData) => {
    setSuccess(false);
    setError(null);
    setLoading(true);

    try {
      await editUser(postId, formData);
      triggerRefetch();
      setSuccess(true);
      toast.success("Post updated successfully!"); 
    } catch (error) {
      console.log("Edit error:", error);
      setError(error);
      toast.error("Failed to update post: " + (error.message || "An error occurred.")); 
    } finally {
      setLoading(false);
    }
  };

  return {
    handleClick,
    loading,
    error,
    success,
  };
}

export default useEditPost;
