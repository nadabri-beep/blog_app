const fs = require("fs");
const path = require("path");
const { title } = require("process");

const postsFilePath = path.join(__dirname, "../data/posts.json");

function getAllPosts() {
  const data = fs.readFileSync(postsFilePath, "utf-8");
  return JSON.parse(data);
}

function getPostById(id) {
  const posts = getAllPosts();
  return posts.find(post => post.id === id);
}

function addPost(newPost) {
  const posts = getAllPosts();
  posts.push(newPost);
  fs.writeFileSync(postsFilePath, JSON.stringify(posts, null, 2));
}

function updatePost(id, updatedData) {
  const posts = getAllPosts();
  const index = posts.findIndex(post => post.id === id);
  if (index !== -1) {
    posts[index] = { ...posts[index], ...updatedData };
    fs.writeFileSync(postsFilePath, JSON.stringify(posts, null, 2));
    return true;
  }
  return false;
}

function deletePost(id) {
  const posts = getAllPosts();
  const filteredPosts = posts.filter(post => post.id !== id);
  
  fs.writeFileSync(postsFilePath, JSON.stringify(filteredPosts, null, 2));
}

module.exports = {
  getAllPosts,
  getPostById,
  addPost,
  updatePost,
  deletePost
};
