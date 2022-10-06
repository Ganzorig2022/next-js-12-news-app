const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: [true, 'Id must be required'],
      trim: true,
      unique: true,
      maxLength: [40, 'Id must have less than 40 characters'],
      minLength: [10, 'Id must have more than 10 characters'],
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
    price: {
      type: Number,
      requred: [true, 'Must have a price'],
      validate: {
        validator: (val) => {
          return val < 300;
        },
        message: 'Price must be less than 300',
      },
    },
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

// enum: {
//   values: ['easy', 'medium', 'hard'],
//   message: 'Difficulty is either: easy, medium,difficult'
// }
