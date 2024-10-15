import React from "react";
import CustomTable from "../../components/table/Table";
import useGetPost from "./useGetPost";
import { getList, createPost, updatePost, deletePost} from "../../api/post";
import useEditPost from "./useEditPost";
import useDeletePost from "./useDeletePost";
import PostDeleteModal from "./PostDeleteModal";
import PostEditModal from "./PostEditModal";
import CustomPagination from "../../components/pagination/CustomPagination";
import usePagination from "../../components/pagination/usePagination";
import PostCreateModal from "./PostCreateModal";
import useCreatePost from "./useCreatePost";
import { ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 
import styles from './styles.module.scss';

function Index() {
  const { currentPage, itemsPerPage } = usePagination();
  const { post, loading: fetchLoading, error, totalPages, refetch } = useGetPost(getList, currentPage, itemsPerPage);

  const { handleClick: handleCreatePost, loading: createLoading } = useCreatePost(createPost, refetch);
  // const { handleClick: handleDeleteUser, loading: deleteLoading } = useDeletePost(deletePost, refetch);
  // const { handleClick: handleEditUser, loading: editLoading } = useEditPost(updatePost, refetch);

  // const isLoading = fetchLoading || createLoading || editLoading || deleteLoading;

  return (
    <div>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick /> 

      <div className={styles['create-modal-wrapper']}>
        <PostCreateModal handleCreate={handleCreatePost} />
      </div>
      
      {post.length > 0 ? (
        <CustomTable
          children={post}
          // handleEdit={handleEditUser}
          // EditModal={UserEditModal}
          // handleDelete={handleDeleteUser}
          // DeleteModal={UserDeleteModal}
          // isLoading={isLoading}
        />
      ) : (
        <p>No data</p>
      )}
      <CustomPagination totalPages={totalPages} />
    </div>
  );
}

export default Index;
