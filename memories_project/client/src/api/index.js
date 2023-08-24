import axios from 'axios'
import { apiEndPoint } from './apiEndPoint'

export const fetchPosts = () => axios.get(apiEndPoint.posts)
export const createPosts = (newPosts) => axios.post(apiEndPoint.posts, newPosts)
export const updatePosts = (id, updatedPost) => axios.patch(`${apiEndPoint.posts}/${id}`, updatedPost)
export const deletePosts = (id) => axios.delete(`${apiEndPoint.posts}/${id}`)