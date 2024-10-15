import React from "react";
import { Table } from "reactstrap";
import styles from "./styles.module.scss";

function CustomTable({
  children,
  handleEdit,
  EditModal,
  handleDelete,
  DeleteModal,
  isLoading,
}) {
  const heads = [
    "ID",
    "Title",
    "Message",
    "Actions",
  ];

  return (
    <div className={styles["table-container"]}>
      {isLoading ? (
        <div className={styles["loading"]}>
          <p>Loading...</p>
        </div>
      ) : (
        <Table striped responsive className={styles["custom-table"]}>
          <thead className={styles["table-head"]}>
            <tr>
              {heads.map((head, key) => (
                <th key={key} className={styles["table-head-cell"]}>
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={styles["table-body"]}>
            {children?.map((data) => (
              <tr key={data.userId} className={styles["table-row"]}>
                <td>{data.postId}</td>
                <td>{data.title}</td>
                <td>{data.message}</td>
                <td>{data.createdAt}</td>
                {/* <td>
                  <div className={styles["action-buttons"]}>
                    <DeleteModal userID={data.id} handleDelete={handleDelete} />
                    <EditModal userID={data} handleEdit={handleEdit} />
                  </div>
                </td> */}
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default CustomTable;
