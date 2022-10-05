const Blog = require('../models/blogModel');
const data = require('../data.json');
const dogData = data.posts;

//==================Get mulitple data=============
exports.getUsers = async (req, res) => {
  try {
    //reading documents from mongodb
    const blogsData = await Blog.find();

    res.status(200).json({
      status: 'success',
      results: blogsData.length,
      posts: blogsData,
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};

//===============Get single data===============
exports.getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const blog = await Blog.findOne({ id: id });
    res.status(200).json(blog);
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }

  // const user = dogData.find((user) => user.id === id);
};

//===============================
exports.createUser = async (req, res) => {
  // firstly create all data at once
  // await Blog.deleteMany({});
  // const newBlog = await Blog.create(data.posts);
  // return res.status(200).json({
  //   status: 'success',
  //   posts: newBlog,
  // });
};

//===============================
exports.updateUser = async (req, res) => {
  const update = req.body;
  try {
    const id = req.params.id;
    const updated = await Blog.findOneAndUpdate(id, update);
    res.status(200).json({
      status: 'success',
      update: updated,
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.deleteUser = (req, res) => {
  return res.status(200);
};
