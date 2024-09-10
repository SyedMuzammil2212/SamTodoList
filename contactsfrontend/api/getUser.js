import axiosInstance from "./axiosinstance";
const getUser = async (token) => {
  const headers = {
    authorization: `Bearer ${token}`,
  };
  try {
    const response = await axiosInstance.get("/users/current", {
      headers,
    });
    console.log(response, "rrr");
    return response;
  } catch (error) {
    console.log(error);
    localStorage.removeItem("token");
    window.location.href = "/login";
    return null;
  }
};
export default getUser;
