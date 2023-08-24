
const { default: mongoose } = require('mongoose')
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
const updatePost = async (req, res) => {
    const { id: _id } = req.params
    const post = req.body
    // /post/139
    // is not valid 
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id')
    const updatedPost = await postMessage.findByIdAndUpdate(_id, post, { new: true })

    res.json(updatedPost)
}
const deletePost = async (req, res) => {
    // const { id: _id } = req.params
    const post = req.body
    // /post/139
    // is not valid 
    // if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No delete with that id')
    const deletedPost = await postMessage.findByIdAndRemove({ _id: req.params.id })
    // (err, collection) => {
    //         if (err) throw err;
    //         console.log(collection.result.n + " Record(s) deleted successfully");
    //         console.log(collection);
    //         // db.close()
    //     })

    res.json(deletedPost)
}

module.exports = { getPosts, createPost, updatePost, deletePost }