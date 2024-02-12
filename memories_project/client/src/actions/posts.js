import {
  UPDATE,
  FETCH_ALL,
  CREATE,
  DELETE,
  LIKE,
  FETCH_BY_SEARCH,
  START_LOADING,
  END_LOADING,
} from "../constants/index";
import {
  fetchPosts,
  createPosts,
  updatePosts,
  deletePosts,
  likePosts,
  fetchPostsBySearch,
} from "../api/index";

export const getPosts = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await fetchPosts(page);
    dispatch({ type: FETCH_ALL, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log("error", error?.message);
  }
};
export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const {
      data: { data },
    } = await fetchPostsBySearch(searchQuery);
    dispatch({ type: FETCH_BY_SEARCH, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log("error", error?.message);
  }
};

export const createPost = (post, onSuccess) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await createPosts(post);
    dispatch({ type: CREATE, payload: data });
    onSuccess(data);
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log("error", error?.message);
  }
};
export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await updatePosts(id, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log("error", error?.message);
  }
};
export const deletePost = (id, deleteSuccess) => async (dispatch) => {
  try {
    const { data } = await deletePosts(id);
    dispatch({ type: DELETE, payload: id });
    deleteSuccess(data);
  } catch (error) {
    console.log("error", error?.message);
  }
};
export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await likePosts(id);
    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log("error", error?.message);
  }
};
