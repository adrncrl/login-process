import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const PostDeleteModal = (props) => {
  const {postId, isOpen, toggleDelete, onSubmit} = props;
  
  return (

      <Modal isOpen={isOpen} toggle={toggleDelete}>
        <ModalHeader toggle={()=>toggleDelete()}>Delete User</ModalHeader>
        <ModalBody>Are you sure to delete user: {postId}?</ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={() => onSubmit(postId)}>
            Delete
          </Button>
        </ModalFooter>
      </Modal>

  );
};

export default PostDeleteModal;
