import api from '../api/index'
import { fetchPosts, createPosts, updatePosts, deletePosts } from '../api/index'


// Action Creators
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await fetchPosts()
        console.log('data', data)
        dispatch({ type: 'FETCH_ALL', payload: data })
    } catch (error) {
        console.log('error', error?.message)
    }
}

export const createPost = (post, onSuccess) => async (dispatch) => {
    try {
        const { data } = await createPosts(post)
        dispatch({ type: 'CREATE', payload: data })
        onSuccess(data)
    } catch (error) {
        console.log('error', error?.message)
    }
}
export const updatePost = (id, post) => async (dispatch) => {
    // console.log('postid',id, post)
    try {
        const { data } = await updatePosts(id, post)
        dispatch({ type: 'UPDATE', payload: data })
        // console.log('data UPDATE',data)
    } catch (error) {
        console.log('error', error?.message)
    }
}
export const deletePost = (id) => async (dispatch) => {
    console.log('deletepostid',id)
    try {
        const { data } = await deletePosts(id)
        dispatch({ type: 'DELETE', payload: data })
        console.log('data DELETE',data)
    } catch (error) {
        console.log('error DELETE', error?.message)
    }
}