import { useSearchParams } from "react-router-dom";
import qs from 'qs'

const usePagination = (defaultLimit = 10, defaultOffset = 0) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const offset = Number(searchParams.get("offset")) || defaultOffset;
  const limit = Number(searchParams.get("limit")) || defaultLimit;

  const updateUrlParams = (limit, offset) => {
    const newParams = { limit, offset };
    setSearchParams(newParams);
  };

  const handlePageChange = (offset) => {
    updateUrlParams(limit, offset);
  };

  const handleLimitChange = (limit) => {
    updateUrlParams(limit, defaultOffset);
  };

  const queryString = qs.stringify({ limit, offset });

  return {
    offset,
    limit,
    handlePageChange,
    handleLimitChange,
    searchParams:  queryString
  };
};

export default usePagination;
