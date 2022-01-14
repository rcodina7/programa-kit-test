import axios from "axios";

export const handlePasswordlessAuthRequest = (formValues, type) => {
  const baseURL = "http://localhost:5000/passwordlessAuth";

  const data = handlePasswordlessLogin(formValues, baseURL);
  return data;
};

const handlePasswordlessLogin = async (formValues, baseURL) => {
  try {
    const { data } = await axios.post(`${baseURL}`, formValues);
    return data;
  } catch (error) {
    return error.response?.data
      ? error.response?.data
      : { success: false, message: error.message };
  }
};
