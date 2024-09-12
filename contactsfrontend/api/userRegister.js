import axiosInstance from "./axiosinstance";

const UserRegister = async (formData) => {
  try {
    const response = await axiosInstance.post("/users/register", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    // localStorage.setItem("token", response.data.accesstoken);
    return response.data;
  } catch (error) {
    console.log(error);
    return { error: error.response?.data.message };
  }
};
export default UserRegister;
