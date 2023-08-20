import api from '../api/index'
import { fetchPosts, createPosts } from '../api/index'

// Action Creators
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await fetchPosts()
        dispatch({ type: 'FETCH_ALL', payload: data })
    } catch (error) {
        console.log('error', error?.message)
    }
}

export const createPost = (post, onSuccess) => async (dispatch) => {
    console.log('post', post)
    try {
        const { data } = await createPosts(post)
        dispatch({ type: 'CREATE', payload: data })
        onSuccess(data)
    } catch (error) {
        console.log('error', error?.message)
    }
}