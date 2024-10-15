import { useState } from "react";
import { toast } from "react-toastify";

function useDeletePost(deletePost, triggerRefetch) {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClick = async (postId) => {
    setSuccess(false);
    setError(null);
    setLoading(true);

    try {
      await deletePost(postId);
      setSuccess(true);
      triggerRefetch();
      toast.success("Post deleted successfully!"); 
    }catch(error){
      setError(error);
      toast.error("Failed to delete post: " + (error.message || "An error occurred.")); 
    } finally {
      setLoading(false);
    }
  };

  return {
    handleClick,
    success,
    error,
    loading,
  };
}

export default useDeletePost;
