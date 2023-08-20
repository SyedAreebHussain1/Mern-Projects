import axios from 'axios'
import { apiEndPoint } from './apiEndPoint'

export const fetchPosts = () => axios.get(apiEndPoint.posts)
export const createPosts = (newPosts) => axios.post(apiEndPoint.posts, newPosts)