import React from "react";
import useGetPost from "./useGetPost";

import useCreatePost from "./useCreatePost";
import useDeletePost from "./useDeletePost";
import useEditPost from "./useEditPost";

import PostCreate from "./PostCreateAction";
import PostAddModal from "./PostAddModal";
import PostDeleteModal from "./PostDeleteModal";
import PostTable from "./PostTable";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./styles.module.scss";

function Index() {
  const { post, meta, loading, totalPages, refetch } = useGetPost();
  const { onAdd, isAdding, isAddOpen, toggleAdd } = useCreatePost(refetch);
  const { isFetching, isEditing, data, isEditOpen, toggleEdit, onEdit,
  } = useEditPost(refetch);
  const { isDeleteOpen, id, isDeleting, toggleDelete, onDelete } =
    useDeletePost(refetch);

  // const isLoading = fetchLoading || createLoading || editLoading || deleteLoading;

  return (
    <div className={styles["container"]}>
      <PostCreate toggle={toggleAdd} />

      <PostTable
        post={post}
        isLoading={loading}
        toggleDelete={toggleDelete}
        toggleEdit={toggleEdit}
      />

      <PostAddModal
        isOpen={isAddOpen}
        isSubmmiting={isAdding}
        toggle={toggleAdd}
        onSubmit={onAdd}
      />

      <PostAddModal
        data={data}
        isLoading={isFetching}
        isOpen={isEditOpen}
        isSubmmiting={isEditing}
        toggle={toggleEdit}
        onSubmit={onEdit}
      />

      <PostDeleteModal
        postId={id}
        isOpen={isDeleteOpen}
        toggleDelete={toggleDelete}
        onSubmit={onDelete}
      />
    </div>
    // <div>
    //   <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick />
    //   <div className={styles['create-modal-wrapper']}>
    //     <PostCreateModal handleCreate={handleCreatePost} />
    //   </div>
    //   <CustomTable
    //     children={post}
    //     handleEdit={handleEditPost}
    //     EditModal={PostEditModal}
    //     handleDelete={handleDeletePost}
    //     DeleteModal={PostDeleteModal}
    //     isLoading={isLoading}
    //   />
    //   <CustomPagination totalPages={totalPages} />
    // </div>
  );
}

export default Index;
