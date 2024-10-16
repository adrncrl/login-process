import React from "react";

import useGetPost from "./useGetPost";
import useCreatePost from "./useCreatePost";
import useDeletePost from "./useDeletePost";
import useEditPost from "./useEditPost";

import PostCreate from "./PostCreateAction";
import PostAddModal from "./PostAddModal";
import PostDeleteModal from "./PostDeleteModal";
import PostTable from "./PostTable";

import CustomPagination from "components/pagination/CustomPagination";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./styles.module.scss";

function Index() {
  const { post, meta, loading, refetch } = useGetPost();
  const { onAdd, isAddOpen, toggleAdd } = useCreatePost(refetch);
  const { data, isEditOpen, toggleEdit, onEdit } = useEditPost(refetch);
  const { isDeleteOpen, id, toggleDelete, onDelete } = useDeletePost(refetch);

  return (
    <div className={styles["container"]}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
      />
      <PostCreate toggle={toggleAdd} />
      <PostTable
        post={post}
        isLoading={loading}
        toggleDelete={toggleDelete}
        toggleEdit={toggleEdit}
      />
      <PostAddModal isOpen={isAddOpen} toggle={toggleAdd} onSubmit={onAdd} />
      <PostAddModal
        data={data}
        isOpen={isEditOpen}
        toggle={toggleEdit}
        onSubmit={onEdit}
      />
      <PostDeleteModal
        postId={id}
        isOpen={isDeleteOpen}
        toggleDelete={toggleDelete}
        onSubmit={onDelete}
      />
      <CustomPagination meta={meta} />
    </div>
  );
}

export default Index;
