import React from "react";
import { Pagination, PaginationItem, PaginationLink, Input } from "reactstrap";
import usePagination from "./usePagination";
import styles from "./styles.module.scss";


const CustomPagination = (props) => {
  const {meta} = props;
  const {totalPages} = meta;
  
  const { currentPage, itemsPerPage, handlePageChange, handleLimitChange } = usePagination();
  const limitOptions = [10, 20, 50];

  return (
    <div className={styles["pagination-container"]}>
      <div className={styles["limit-selector"]}>
        <span>Items per page:</span>
        <Input
          type="select"
          onChange={(e) => handleLimitChange(Number(e.target.value))}
          value={totalPages}
          // value={itemsPerPage}
        >
          {limitOptions.map((limit) => (
            <option key={limit} value={limit}>
              {limit}
            </option>
          ))}
        </Input>
      </div>

      <Pagination
        aria-label="Page navigation"
        className={styles["pagination-controls"]}
      >
        <PaginationItem disabled={currentPage === 0}>
          <PaginationLink first onClick={() => handlePageChange(0)} />
        </PaginationItem>
        <PaginationItem disabled={currentPage === 0}>
          <PaginationLink
            previous
            onClick={() => handlePageChange(currentPage - 1)}
          />
        </PaginationItem>

        {[...Array(totalPages)].map((_, i) => (
          <PaginationItem active={i === currentPage} key={i}>
            <PaginationLink onClick={() => handlePageChange(i)}>
              {i + 1} 
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem disabled={currentPage === totalPages - 1}>
          <PaginationLink
            next
            onClick={() => handlePageChange(currentPage + 1)}
          />
        </PaginationItem>
        <PaginationItem disabled={currentPage === totalPages - 1}>
          <PaginationLink last onClick={() => handlePageChange(totalPages - 1)} />
        </PaginationItem>
      </Pagination>
    </div>
  );
};

export default CustomPagination;
