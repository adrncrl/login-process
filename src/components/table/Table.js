import React from "react";
import { Table } from "reactstrap";
import styles from "./styles.module.scss";

function CustomTable(props) {
  const { heads, children, isLoading } = props;

  return (
    <div className={styles["table-container"]}>
      {isLoading ? (
        <div className={styles["loading"]}>
          <p>Loading...</p>
        </div>
      ) : children?.length > 0 ? (
        <Table striped responsive className={styles["custom-table"]}>
          <thead className={styles["table-head"]}>
            <tr>
              {heads?.map((head, key) => (
                <th key={key} className={styles["table-head-cell"]}>
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={styles["table-body"]}>
            {children}
          </tbody>
        </Table>
      ) : (
        <p>No data</p>
      )}
    </div>
  );
}
// function CustomTable({
//   children,
//   handleEdit,
//   EditModal,
//   handleDelete,
//   DeleteModal,
//   isLoading,
// }) {
//   const heads = ["Post ID", "Title", "Message", "Created At", "Actions"];

//   return (
//     <div className={styles["table-container"]}>
//       {isLoading ? (
//         <div className={styles["loading"]}>
//           <p>Loading...</p>
//         </div>
//       ) : children?.length > 0 ? (
//         <Table striped responsive className={styles["custom-table"]}>
//           <thead className={styles["table-head"]}>
//             <tr>
//               {heads.map((head, key) => (
//                 <th key={key} className={styles["table-head-cell"]}>
//                   {head}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody className={styles["table-body"]}>
//             {children?.map((data) => (
//               <tr key={data.postId} className={styles["table-row"]}>
//                 <td>{data.postId}</td>
//                 <td>{data.title}</td>
//                 <td>{data.message}</td>
//                 <td>{moment(data.createdAt).format("YYYY-MM-DD | hh:mm:ss A")}</td>
//                 <td>
//                   <div className={styles["action-buttons"]}>
//                     <DeleteModal postId={data.postId} handleDelete={handleDelete} />
//                     <EditModal data={data} handleEdit={handleEdit} />
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       ) : (
//         <p>No data</p>
//       )}
//     </div>
//   );
// }

export default CustomTable;
