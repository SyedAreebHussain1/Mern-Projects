const express = require("express")
const { getPosts, createPost, updatePost, deletePost } = require("../controllers/posts")
const router = express.Router()

router.get('/', getPosts)
router.post('/', createPost)
router.put('/:id', updatePost)
router.delete('/:id', deletePost)
module.exports = router