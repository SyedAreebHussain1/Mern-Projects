import axios from 'axios'
import { apiEndPoint } from './apiEndPoint'

//Destructuring api end point
const { posts } = apiEndPoint;

export const fetchPosts = () => axios.get(posts);
export const createPosts = (newPosts) => axios.post(posts, newPosts);
export const updatePosts = (id, updatedPost) => axios.put(`${posts}/${id}`, updatedPost);
export const deletePosts = (id) => axios.delete(`${posts}/${id}`);
export const likePosts = (id) => axios.put(`${posts}/${id}/likePost`);