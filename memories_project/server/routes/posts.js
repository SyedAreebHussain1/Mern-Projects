const express = require("express");
const {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} = require("../controllers/posts");
const auth = require("../middleware/auth");
const router = express.Router();

router.get("/", getPosts);
router.post("/", auth, createPost);
router.put("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.put("/:id/likePost", auth, likePost);
module.exports = router;
