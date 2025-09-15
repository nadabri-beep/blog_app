const postModel = require("../models/postModel");

function getAllPosts(req, res) {
  const posts = postModel.getAllPosts(); 
  res.json(posts);
}

function getPostById(req, res) {
  const id = parseInt(req.params.id);
  const post = postModel.getPostById(id);
  if (post) res.json(post);
  else res.status(404).json({ message: "Post not found" });
}

function createPost(req, res) {
  const newPost = {
    id: Date.now(),
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    date: new Date().toISOString()
  };
  postModel.addPost(newPost);
  res.status(201).json({ message: "Post created", post: newPost });
}

function updatePost(req, res) {
  const id = parseInt(req.params.id);
  const updatedData = req.body;
  const success = postModel.updatePost(id, updatedData);
  if (success) res.json({ message: "Post updated" });
  else res.status(404).json({ message: "Post not found" });
}

function deletePost(req, res) {
  const id = parseInt(req.params.id);
  const existingPost = postModel.getPostById(id);
  if (existingPost) {
    postModel.deletePost(id);
    res.json({ message: "Post deleted" });
  } else res.status(404).json({ message: "Post not found" });
}

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
};
