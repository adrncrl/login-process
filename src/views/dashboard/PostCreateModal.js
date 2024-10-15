import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import UserForm from "./PostForm";

const UserCreateModal = ({ handleCreate }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleConfirm = async (formData) => {
    setModal(false);
    await handleCreate(formData);
  };

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Add user
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create User</ModalHeader>
        <ModalBody>
          <UserForm onSubmit={handleConfirm} toggle={toggle} mode="create" />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default UserCreateModal;
