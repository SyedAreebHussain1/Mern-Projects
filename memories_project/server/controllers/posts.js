
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
const createPost = async (req, res) => {
    const post = req.body
    const newPost = new postMessage(post)
    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

module.exports = { getPosts, createPost }