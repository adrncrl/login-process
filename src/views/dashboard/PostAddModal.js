import React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Button,
} from "reactstrap";
import usePostForm from "./usePostForm";

const PostAddModal = (props) => {
  const { data, isOpen, isLoading, isSubmitting, toggle, onSubmit } = props;
  const header = data ? "Edit Post" : "Add Post";

  const { title, message } = data || {};
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader>{header}</ModalHeader>
      <ModalBody>
        <Form onSubmit={usePostForm(onSubmit)}>
          <FormGroup>
            <Label>Title</Label>
            <Input
              type="text"
              name="title"
              defaultValue={title}
              placeholder="Enter title"
              required
            />
            <FormFeedback>Required</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label>Message</Label>
            <Input
              type="message"
              name="message"
              defaultValue={message}
              placeholder="Enter message"
              required
            />
            <FormFeedback>Required</FormFeedback>
          </FormGroup>
          <Button type="submit" color="primary">
            {header}
          </Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default PostAddModal;
