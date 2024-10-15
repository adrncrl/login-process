import instance from "../axios/instance";


const loginUser = async (email, password) => {
  try {
    const response = await instance.post("/auth/login", {
      email,
      password,
    });
    return response.data.data; 
  } catch (error) {
    console.error("Error during login:", error);
    throw error; 
  }
};

const signUpUser = async (firstName, lastName, email, password) => {
  try {
    const response = await instance.post("/user/signup", {
      firstName,
      lastName,
      email,
      password,
    });
    return response.data; 
  } catch (error) {
    console.error("Error during signup:", error);
    throw error; 
  }
};

const refreshUserData = async (token) => {
  try {
    const response = await instance.get("/auth/refresh", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data; 
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error; 
  }
};

export { refreshUserData, loginUser, signUpUser };