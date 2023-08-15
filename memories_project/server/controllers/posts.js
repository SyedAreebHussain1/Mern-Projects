
const postMessage = require('../models/postMessage')

const getPosts = async (req, res) => {
    try {
        const postMessages = await postMessage.find()
        // console.log(postMessages)
        res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
const createPost = (req, res) => {
    // console.log(req)
    res.send({ result: "Post Creation" })
}

module.exports = { getPosts, createPost }