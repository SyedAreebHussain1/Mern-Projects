export default (posts = [], action) => {
    console.log('action.payload',action.payload);
    switch (action.type) {
        case 'UPDATE':
            return posts.map((val) => val._id === action.payload._id ? action.payload : val)
        case 'FETCH_ALL':
            return action.payload
        case 'CREATE':
            return [...posts, action.payload];
        default:
            return posts
    }
}