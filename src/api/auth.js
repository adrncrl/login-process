import { api } from "../axios/instance";

const loginUser = async (data) => {
  const response = await api("post", `/auth/login`, data);
  console.log(response)
  return response.data;
};

const signUpUser = async (data) => {

  const response = await api("post", `/user/signup`, data)
};

const refreshUserData = async (token) => {
  // try {
  //   const response = await instance.get("/auth/refresh", {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  //   return response.data;
  // } catch (error) {
  //   console.error("Error fetching user data:", error);
  //   throw error;
  // }
  const response  = await api("get", `/auth/refresh`)
  return response.data
};

export { refreshUserData, loginUser, signUpUser };
