import axios from "axios";
const API = axios.create({ baseURL: `${process.env.REACT_APP_BACKEND_URL}` });
export const sendOtp = async (data) => {
  const res = await API.post("/auth/sendotp", { data });
  return res;
};
