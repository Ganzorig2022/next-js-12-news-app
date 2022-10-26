const Blog = require('../models/blogModel');
const AppError = require('../utils/AppError');
// const data = require('../data.json');

//==================Get mulitple data=============
exports.getUsers = async (req, res) => {
  const page = req.headers.page;
  const limit = req.headers.limit;
  const skipVal = (page - 1) * limit;
  try {
    //reading documents from mongodb
    const blogsData = await Blog.find().skip(skipVal).limit(limit);

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
exports.getUser = async (req, res, next) => {
  const id = req.params.id;
  const blog = await Blog.findOne({ id: id });

  //if id is WRONG then throw error
  if (!blog) {
    return next(new AppError('No blog found with that id', 404));
  }
  //if id is VALID then continue
  res.status(200).json({
    status: 'succes',
    data: blog,
  });
};

//==================Create new Data=============
exports.createUser = async (req, res) => {
  // firstly create all data at once
  // await Blog.deleteMany({});
  // const newBlog = await Blog.create(data.posts);
  // return res.status(200).json({
  //   status: 'success',
  //   posts: newBlog,
  // });
  try {
    const newData = await Blog.create({
      id: '60d21b4667d0d8992e610c96',
      image: 'https://img.dummyapi.io/photo-1564694202779-bc908c327862.jpg',
      likes: 37,
      tags: ['animal', 'dog', 'golden retriever'],
      text: 'adult Labrador retriever',
      publishDate: '2020-05-24T14:53:17.598Z',
      price: 350,
      owner: {
        id: '60d0fe4f5311236168a109ca',
        title: 'ms',
        firstName: 'Sara',
        lastName: 'Andersen',
        picture: 'https://randomuser.me/api/portraits/women/58.jpg',
      },
    });
    res.status(200).json({
      status: 'succes',
      post: newData,
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};

//=================Update data==============
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

//=================Delete data==============
exports.deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const blog = await Blog.findOneAndDelete(id);

    if (!blog) {
      return next(new AppError('No blog found with that id', 404));
    }
    //if id is VALID then continue
    res.status(200).json({
      status: 'succes',
      data: null,
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};
