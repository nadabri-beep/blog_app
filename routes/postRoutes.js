const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

// GET all posts
router.get("/posts", postController.getAllPosts);

// GET a single post by ID
router.get("/posts/:id", postController.getPostById);

// POST a new post
router.post("/posts", postController.createPost);

// PUT (update) a post by ID
router.put("/posts/:id", postController.updatePost);

// DELETE a post by ID
router.delete("/posts/:id", postController.deletePost);

module.exports = router;
