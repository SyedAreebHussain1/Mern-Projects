import { apiEndPoint } from "./apiEndPoint";
import axios from "axios";


const { posts, auth } = apiEndPoint;
const API = axios.create({ baseURL: "http://localhost:5000/" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});


// auth
export const signIn = (formData) => API.post(auth.signin, formData);
export const signUp = (formData) => API.post(auth.signup, formData);

// post
export const fetchPosts = () => API.get(posts);
export const createPosts = (newPosts) => API.post(posts, newPosts);
export const updatePosts = (id, updatedPost) =>
  API.put(`${posts}/${id}`, updatedPost);
export const deletePosts = (id) => API.delete(`${posts}/${id}`);
export const likePosts = (id) => API.put(`${posts}/${id}/likePost`);
