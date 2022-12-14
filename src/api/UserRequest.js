import axios from "axios";

const API = axios.create({ baseURL: `${process.env.REACT_APP_BACKEND_URL}` });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const getUser = (userId) => {
  console.log(userId);
  return API.get(`/user/${userId}`);
};
export const updateUser = (id, formData) => API.put(`/user/${id}`, formData);
export const getAllUser = () => API.get("/user");
export const followUser = (id, data) => API.put(`/user/${id}/follow`, data);
export const unfollowUser = (id, data) => API.put(`/user/${id}/unfollow`, data);
export const search = (searchData) => {
  console.log(searchData, "search");
  return API.get(`/user/search?data=${searchData}`);
};
