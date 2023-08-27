
const { default: mongoose } = require('mongoose')
// const mongoose = require('mongoose')
const PostMessage = require('../models/postMessage')

const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find()
        res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
const createPost = async (req, res) => {
    const { title, message, selectedFile, creator, tags } = req.body;
    // const post = req.body
    const newPostMessage = new PostMessage({ title, message, selectedFile, creator, tags })
    try {
        await newPostMessage.save()
        res.status(201).json(newPostMessage)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}
const updatePost = async (req, res) => {
    const { id: _id } = req.params
    const post = req.body
    // /post/139
    // is not valid 
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with that id: ${id}`)
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true })
    res.json(updatedPost)
}
const deletePost = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No delete with that id: ${id}`)
    await PostMessage.findByIdAndRemove(id)
    res.json({ message: "Post deleted successfully" })

    // my functio
    // const deletedPost = await PostMessage.findByIdAndRemove({ _id: req.params.id })
    // res.json(deletedPost)
}
const likePost = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No like with that id: ${id}`)
    // await PostMessage.save()
    const post = await PostMessage.findById(id)
    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true })
    res.json(updatedPost)
}

module.exports = { getPosts, createPost, updatePost, deletePost, likePost }