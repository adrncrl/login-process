import { useState } from "react";
import { toast } from "react-toastify";
import { deletePost } from "api/post";

function useDeletePost(triggerRefetch) {
  const [isLoading, setIsLoading] = useState(false);
  const [item, setItems] = useState({
    isOpen: false,
    id: null,
  });

  function toggleOpen(id = "") {
    setItems({ isOpen: !!id, id });
  }

  const handleClick = async () => {
    const { id } = item;

    try {
      setIsLoading(true);
      await deletePost(id);
      triggerRefetch();
      toggleOpen();
      toast.success("Post deleted successfully!");
    } catch (error) {
      toast.error(
        "Failed to delete post: " + (error.message || "An error occurred.")
      );
    } finally {
      setIsLoading(false);
    }
  };

  const { id, isOpen } = item;
  return {
    isDeleteOpen: isOpen,
    id: id,
    isDeleting: isLoading,
    toggleDelete: toggleOpen,
    onDelete: handleClick,
  };
}

export default useDeletePost;
