import { useState, useEffect, useRef, useCallback } from "react";
import { getList } from "api/post";

const useGetPost = (searchParams) => {
  const [post, setPost] = useState([]);
  const [meta, setMeta] = useState({});
  const [isloading, setIsLoading] = useState(false);


  const hasFetched = useRef(false);

  const fetchPost = useCallback(async () => {
    setIsLoading(true);


    try {
      const response = await getList(searchParams);
      const { data, meta } = response;
      setPost(data);
      setMeta(meta);
    } catch (err) {
      console.error("Error fetching Posts:", err);
    } finally {
      setIsLoading(false);
    }
  }, [getList]);

  useEffect(() => {
    if (hasFetched.current) {
      fetchPost(searchParams);
    } else {
      hasFetched.current = true;
    }
  }, [searchParams, getList]);

  return { post, meta, isloading, refetch: fetchPost };
};

export default useGetPost;
