import axiosInstance from "../axiosAPI";

const sendImage = async (image) => {
  let formData = new FormData();
  formData.append("file", image);
  const response = await axiosInstance.post("/user/addimage/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data.id || null
};

export default sendImage