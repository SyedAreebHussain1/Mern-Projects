import { UPDATE, FETCH_ALL, CREATE, DELETE, LIKE } from '../constants/index'
import { fetchPosts, createPosts, updatePosts, deletePosts, likePosts } from '../api/index'

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await fetchPosts()
        dispatch({ type: FETCH_ALL, payload: data })
    } catch (error) {
        console.log('error', error?.message)
    }
}

export const createPost = (post, onSuccess) => async (dispatch) => {
    try {
        const { data } = await createPosts(post)
        dispatch({ type: CREATE, payload: data })
        onSuccess(data)
    } catch (error) {
        console.log('error', error?.message)
    }
}
export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await updatePosts(id, post)
        dispatch({ type: UPDATE, payload: data })
    } catch (error) {
        console.log('error', error?.message)
    }
}
export const deletePost = (id, deleteSuccess) => async (dispatch) => {
    try {
        const { data } = await deletePosts(id)
        dispatch({ type: DELETE, payload: id })
        deleteSuccess(data)
    } catch (error) {
        console.log('error', error?.message)
    }
}
export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await likePosts(id)
        dispatch({ type: LIKE, payload: data })
    } catch (error) {
        console.log('error', error?.message)
    }
}