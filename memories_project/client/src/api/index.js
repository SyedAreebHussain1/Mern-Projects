import axios from "axios";
import { apiEndPoint } from "./apiEndPoint";

const { posts, auth } = apiEndPoint;
const API = axios.create({ baseURL: "http://localhost:5000/" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const signIn = (formData) => API.post(auth.signin, formData);
export const signUp = (formData) => API.post(auth.signup, formData);

export const fetchPosts = (page) => API.get(`${posts}?page=${page}`);
export const fetchPostsBySearch = (searchQuery) =>
  API.get(
    `${posts}/search?searchQuery=${searchQuery.search || "none"}&tags=${
      searchQuery.tags
    }`
  );
export const createPosts = (newPosts) => API.post(posts, newPosts);
export const updatePosts = (id, updatedPost) =>
  API.put(`${posts}/${id}`, updatedPost);
export const deletePosts = (id) => API.delete(`${posts}/${id}`);
export const likePosts = (id) => API.put(`${posts}/${id}/likePost`);
