import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import UserForm from "./PostForm";

const PostEditModal = ({ data, handleEdit }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const handleConfirm = async (formData) => {
    await handleEdit(data.postId, formData);
    setModal(false);
  };

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Edit
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit Post</ModalHeader>
        <ModalBody>
          <UserForm
            post={data}
            onSubmit={handleConfirm}
            mode="edit"
            toggle={toggle}
          />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default PostEditModal;
