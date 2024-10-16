import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getPostById, updatePost } from "api/post";

function useEditPost(triggerRefetch) {
  const [data, setData] = useState({});
  const [isEditing, setIdEditing] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const [item, setItems] = useState({
    isOpen: false,
    id: null,
  });

  

  const { isOpen, id } = item;

  function toggleOpen(postId) {
    setItems({ isOpen: !!postId, id: postId });
  }

  const getData = async () => {
    try {
      setIsLoading(true);
      const data = await getPostById(id);
      console.log("expected", data);
      setData(data);
    } catch (error) {
      toast.error(
        "Failed to update post: " + (error.message || "An error occurred.")
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick = async (formData) => {
    try {
      setIdEditing(true);
      await updatePost(id, formData);
      triggerRefetch();
      toggleOpen(null);
      toast.success("Post updated successfully!");
    } catch (error) {
      toast.error(
        "Failed to update post: " + (error.message || "An error occurred.")
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (id) getData();
    else setData({});
  }, [id]);

  return {
    isFetching: isloading,
    isEditing,
    data,
    isEditOpen: isOpen,
    toggleEdit: toggleOpen,
    onEdit: handleClick,
  };
}

export default useEditPost;
