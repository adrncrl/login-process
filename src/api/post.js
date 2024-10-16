import { api } from "axios/instance";
import qs from "qs";

const getList = async (params) => {
  return await api("get", `/post`, qs.parse(params));
};

const getPostById = async (postId) => {
  return await api("get", `/post/${postId}`);
};

const createPost = async (postData) => {
  return await api("post", `/post`, postData);
};

const updatePost = async (postId, postData) => {
  return await api("put", `/post/${postId}`, postData);
};

const deletePost = async (postId) => {
  return await api("delete", `/post/${postId}`);
};

export { getList, getPostById, createPost, updatePost, deletePost };
