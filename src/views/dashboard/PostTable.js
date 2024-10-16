import CustomTable from "components/table/Table";
import React from "react";
import { Button } from "reactstrap";
import moment from "moment";
import styles from "./styles.module.scss"

const PostTable = (props) => {
  const { post, isLoading, toggleEdit, toggleDelete } = props;
  const heads = ["Title", "Message", "Created At", "Actions"];

  return (
    <CustomTable heads={heads} isLoading={isLoading}>
      {post?.map((data) => (
        <tr key={data.postId} className={styles["table-row"]}>
          <td>{data.title}</td>
          <td>{data.message}</td>
          <td>{moment(data.createdAt).format("YYYY-MM-DD | hh:mm:ss A")}</td>
          <td>
            <div className={styles["action-buttons"]}>
              <Button onClick={()=> toggleEdit(data)}>Edit</Button>
              <Button color="danger" onClick={()=> toggleDelete(data.postId)}>Delete</Button>
            </div>
          </td>
        </tr>
      ))}
    </CustomTable>
  );
};

export default PostTable
