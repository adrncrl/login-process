import { useState, useEffect, useRef } from "react";

const useGetUsers = (getList, currentPage, itemsPerPage) => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const hasFetched = useRef(false); 

  const fetchPost = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await getList({
        limit: itemsPerPage,
        offset: currentPage,
      });
      const { data } = response;
      const { totalPages } = response.meta;
      setPost(data);
      setTotalPages(totalPages);
    } catch (err) {
      setError(err);
      console.error("Error fetching Posts:", err);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 600);
    }
  };

  useEffect(() => {
    if (hasFetched.current) {
      fetchPost();
    } else {
      hasFetched.current = true; 
    }
  }, [currentPage, itemsPerPage]);

  return { post, loading, error, totalPages, refetch: fetchPost };
};

export default useGetUsers;
