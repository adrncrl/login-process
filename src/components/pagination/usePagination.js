import { useSearchParams } from "react-router-dom";

const usePagination = (defaultLimit = 10, defaultOffset = 0) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("offset")) || defaultOffset;
  const itemsPerPage = Number(searchParams.get("limit")) || defaultLimit;

  const updateUrlParams = (limit, offset) => {
    const newParams = { limit, offset };
    setSearchParams(newParams);
  };

  const handlePageChange = (offset) => {
    updateUrlParams(itemsPerPage, offset);
  };

  const handleLimitChange = (limit) => {
    updateUrlParams(limit, defaultOffset);
  };

  return {
    currentPage,
    itemsPerPage,
    handlePageChange,
    handleLimitChange,
  };
};

export default usePagination;
