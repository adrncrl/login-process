import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const UserDeleteModal = ({ postId, handleDelete }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleConfirm = (postId) => {
    handleDelete(postId);
    setModal(false);
  };

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Delete
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Delete User</ModalHeader>
        <ModalBody>Are you sure to delete user: {postId}?</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => handleConfirm(postId)}>
            Confirm
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default UserDeleteModal;
