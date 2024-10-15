import { useState, useEffect } from 'react';

const useGetUsers = (getList, currentPage, itemsPerPage) => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  const fetchPost = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await getList({limit: itemsPerPage, offset: currentPage });
      console.log(response)
      const { data} = response;
      const {totalPages} = response.meta
      setPost(data);
      setTotalPages(totalPages);
    } catch (err) {
      setError(err);
      console.error("Error fetching Posts:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [currentPage, itemsPerPage]);

  return { post, loading, error, totalPages, refetch: fetchPost };
};

export default useGetUsers;
