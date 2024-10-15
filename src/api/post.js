import instance from "../axios/instance";
import qs from "qs";
import Cookies from "js-cookie";

const getToken = () => Cookies.get("token");

const getList = async (params) => {
  const queryString = qs.stringify(params, { addQueryPrefix: true });
  const token = getToken();

  try {
    const response = await instance.get(`/post${queryString}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log("Fetch error:", error);
    throw error;
  }
};

const getPostById = async (postId) => {
  const token = getToken();

  try {
    const response = await instance.get(`/post/${postId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log("Fetch error:", error);
    throw error;
  }
};

const createPost = async (postData) => {
  const token = getToken();

  try {
    const response = await instance.post("/post", postData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log("Create error:", error);
    throw error;
  }
};

const updatePost = async (postId, postData) => {
  const token = getToken();

  try {
    const response = await instance.put(`/post/${postId}`, postData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log("Update error:", error);
    throw error;
  }
};

const deletePost = async (postId) => {
  const token = getToken();

  try {
    const response = await instance.delete(`/post/${postId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log("Delete error:", error);
    throw error;
  }
};

export { getList, getPostById, createPost, updatePost, deletePost };
