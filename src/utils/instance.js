import axios from "axios";

const apiUrl = process.env.REACT_APP_API_BASE_URL;

console.log(apiUrl);
const instance = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally if needed
    return Promise.reject(error);
  }
);

export default instance;
