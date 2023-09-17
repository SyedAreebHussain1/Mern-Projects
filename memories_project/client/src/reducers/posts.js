import { UPDATE, FETCH_ALL, CREATE, DELETE, LIKE } from "../constants";
export default (posts = [], action) => {
    // console.log('action =>', action.payload);
    switch (action.type) {
        case UPDATE:
            return posts.map((val) => val._id === action.payload._id ? action.payload : val)
        case FETCH_ALL:
            return action.payload
        case CREATE:
            return [...posts, action.payload];
        case DELETE:
            return posts.filter((val) => val._id !== action.payload)
        case LIKE:
            return posts.map((val) => (val._id === action.payload._id ? action.payload : val));
        default:
            return posts
    }
}