import axios from "axios";

export const handleCustomAuthRequest = (formValues, type) => {
  const baseURL = "http://localhost:5000/auth";

  const data =
    type === "login"
      ? handleCustomLogin(formValues, baseURL)
      : handleCustomRegister(formValues, baseURL);

  return data;
};

const handleCustomLogin = async (formValues, baseURL) => {
  try {
    const { data } = await axios.post(`${baseURL}/login`, formValues);
    return data;
  } catch (error) {
    return error.response.data
      ? error.response.data
      : { success: false, message: error.message };
  }
};

const handleCustomRegister = async (formValues, baseURL) => {
  try {
    const { data } = await axios.post(`${baseURL}/register`, formValues);
    return data;
  } catch (error) {
    return error.response.data
      ? error.response.data
      : { success: false, message: error.message };
  }
};

export const testEmail = async (formValues) => {
  console.log(formValues);
  try {
    const { data } = await axios.post(`/api/auth/signin/email`);
    // return data;
  } catch (error) {
    // return error.response.data
    //   ? error.response.data
    //   : { success: false, message: error.message };
  }
};
