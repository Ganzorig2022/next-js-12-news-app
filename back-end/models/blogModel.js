const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: [true, 'Id must be required'],
      trim: true,
      unique: true,
    },
    image: {
      type: String,
      required: [true, 'Image must be required'],
      trim: true,
    },
    likes: {
      type: String,
      required: [true, 'Likes must be required'],
      trim: true,
    },
    tags: { type: Array, default: [] },
    text: { type: String, required: true, trim: true },
    publishDate: { type: String, required: true, trim: true },
    owner: {
      id: { type: String, required: true, trim: true },
      title: { type: String, required: true, trim: true },
      firstName: { type: String, required: true, trim: true },
      lastName: { type: String, required: true, trim: true },
      picture: { type: String, required: true, trim: true },
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
