import axiosInstance from "./axiosinstance";

const updateContact = async (token, id, requestdata) => {
  const headers = {
    authorization: `Bearer ${token}`,
  };
  try {
    const response = await axiosInstance.put(`/contacts/${id}`, requestdata, {
      headers,
    });
    console.log(response, "rrr");
    return response.data;
  } catch (error) {
    console.log(error);

    return { error: error.response?.data.error || "Unexpected error occured." };
  }
};
export default updateContact;
