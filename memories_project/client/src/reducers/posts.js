import {
  UPDATE,
  FETCH_ALL,
  CREATE,
  DELETE,
  LIKE,
  FETCH_BY_SEARCH,
  START_LOADING,
  END_LOADING,
  FETCH_POST,
} from "../constants";
export default (state = { isLoading: true, posts: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case FETCH_ALL:
      return {
        ...state,
        posts: action?.payload?.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_POST:
      return { ...state, post: action.payload };
    case FETCH_BY_SEARCH:
      return { ...state, posts: action.payload };
    case LIKE:
      return {
        ...state,
        posts: state.posts.map((val) =>
          val._id === action.payload._id ? action.payload : val
        ),
      };
    case CREATE:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case UPDATE:
      return {
        ...state,
        posts: state.posts.map((val) =>
          val._id === action.payload._id ? action.payload : val
        ),
      };
    case DELETE:
      return {
        ...state,
        posts: state.posts.filter((val) => val._id !== action.payload),
      };
    default:
      return state;
  }
};
