import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5000" });
export const getUser = () => API.get("/admin/users");
export const blockUser = (id) => API.put(`/admin/${id}`);
export const getPosts = () => API.get("/admin/posts");
export const Rposts = () => API.get(`/admin/rposts`);
export const deletePost = (id, uid) => API.delete(`admin/${id}/${uid}/report`);
