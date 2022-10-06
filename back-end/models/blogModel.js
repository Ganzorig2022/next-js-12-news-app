const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  id: String,
  image: String,
  likes: String,
  tags: [],
  text: String,
  publishDate: String,
  owner: {
    id: String,
    title: String,
    firstName: String,
    lastName: String,
    picture: String,
  },
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
