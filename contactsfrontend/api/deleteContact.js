import axiosInstance from "./axiosinstance";

const deleteContact = async (token, id) => {
  const headers = {
    authorization: `Bearer ${token}`,
  };
  try {
    const response = await axiosInstance.delete(`/contacts/${id}`, {
      headers,
    });
    console.log(response, "rrr");
    return response.data;
  } catch (error) {
    console.log(error);

    return { error: error.response?.data.error || "Unexpected error occured." };
  }
};
export default deleteContact;
