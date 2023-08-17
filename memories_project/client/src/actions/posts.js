import api from '../api/index'
import { fetchPosts } from '../api/index'
// Action Creators
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await fetchPosts()
        dispatch({ type: 'FETCH_ALL', payload: data })
    } catch (error) {
        console.log('error', error?.message)
    }
}