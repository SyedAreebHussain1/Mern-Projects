import { UPDATE, FETCH_ALL, CREATE, DELETE, LIKE } from "../constant";
export default (posts = [], action) => {
    console.log('action.payload', action.payload);
    switch (action.type) {
        case UPDATE:
            return posts.map((val, i) => val._id === action.payload._id ? action.payload : val)
        case FETCH_ALL:
            return action.payload
        case CREATE:
            return [...posts, action.payload];
        case DELETE:
            return [...posts];
        default:
            return posts
    }
}