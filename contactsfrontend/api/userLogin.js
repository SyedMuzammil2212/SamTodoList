import axiosInstance from "./axiosinstance";

const Userlogin = async (email, password) => {
  const requestdata = {
    email: email,
    password: password,
  };
  try {
    const response = await axiosInstance.post("/users/login", requestdata);
    localStorage.setItem("token", response.data.accesstoken);
    return response.data;
  } catch (error) {
    console.log(error);
    return { error: error.response?.data.message };
  }
};
export default Userlogin;
