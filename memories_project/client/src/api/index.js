import axios from 'axios'
import { apiEndPoint } from './apiEndPoint'

export const fetchPosts = () => axios.get(apiEndPoint.posts)