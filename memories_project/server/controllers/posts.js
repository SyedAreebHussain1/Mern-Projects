const { default: mongoose } = require("mongoose");
const PostMessage = require("../models/postMessage");

const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const createPost = async (req, res) => {
  const post = req.body
  const newPostMessage = new PostMessage({ ...post, creator: req.userId, createdAt: new Date().toISOString() });
  try {
    await newPostMessage.save();
    res.status(201).json(newPostMessage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;
  // /post/139
  // is not valid
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`No post with that id: ${id}`);
  const updatedPost = await PostMessage.findByIdAndUpdate(
    _id,
    { ...post, _id },
    { new: true }
  );
  res.json(updatedPost);
};
const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No delete with that id: ${id}`);
  await PostMessage.findByIdAndRemove(id);
  res.json({ message: "Post deleted successfully" });
};
const likePost = async (req, res) => {
  const { id } = req.params;
  if (!req.userId) {
    return res.json({ message: "Unauthenticated" });
  }
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No like with that id: ${id}`);
  const post = await PostMessage.findById(id);

  const index = post.likes.findIndex((id) => id === String(req.userId));

  if (index === -1) {
    // like the post
    post.likes.push(req.userId);
  } else {
    // dislike a post
    post.likes = post.likes.filter((id) => id !== String(req.userId));
  }
  const updatedPost = await PostMessage.findByIdAndUpdate(
    id,
    post,
    { new: true }
  );
  res.json(updatedPost);
};

module.exports = { getPosts, createPost, updatePost, deletePost, likePost };
