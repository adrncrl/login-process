import React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Button,
} from "reactstrap";
import CustomForm from "components/form/Form";


const PostAddModal = (props) => {
  const { data, isOpen, toggle, onSubmit } = props;
  const { title, message } = data || {};
  const header = data ? "Edit Post" : "Add Post";

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={() => toggle()}>{header}</ModalHeader>
      <ModalBody>
        <CustomForm onSubmit={onSubmit}>
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
        </CustomForm>
      </ModalBody>
    </Modal>
  );
};

export default PostAddModal;
