import React from "react";
import { Button, FormGroup, Label, Input } from "reactstrap";
import usePostForm from "./usePostForm"; 
import styles from "./styles.module.scss";

const UserForm = ({ post, onSubmit, mode, toggle }) => {
  const {
    formData,
    handleChange,
    handleSubmit,
    isSubmitDisabled,
  } = usePostForm(post, mode, onSubmit);

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="title">Title</Label>
        <Input
          type="text"
          name="title"
          id="message"
          placeholder="Enter Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="message">Message</Label>
        <Input
          type="text"
          name="message"
          id="message"
          placeholder="Enter Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <div className={styles["action-wrapper"]}>
        <Button type="submit" color="primary" disabled={isSubmitDisabled}>
          {mode === "edit" ? "Update Message" : "Create Message"}
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default UserForm;
