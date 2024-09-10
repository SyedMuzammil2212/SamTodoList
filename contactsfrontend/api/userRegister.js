import axiosInstance from "./axiosinstance";

const UserRegister = async (username, email, password) => {
  const requestdata = {
    username: username,
    email: email,
    password: password,
  };
  try {
    const response = await axiosInstance.post("/users/register", requestdata);
    // localStorage.setItem("token", response.data.accesstoken);
    return response.data;
  } catch (error) {
    console.log(error);
    return { error: error.response?.data.message };
  }
};
export default UserRegister;
