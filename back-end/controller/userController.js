const User = require('../models/userModel');
const AppError = require('../utils/AppError');
const catchAsync = require('./../utils/catchAsync');

//==================Get mulitple data=============
exports.getUsers = async (req, res) => {
  try {
    //reading documents from mongodb
    const usersData = await User.find();

    res.status(200).json({
      status: 'success',
      results: usersData.length,
      posts: usersData,
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
  const user = await User.findOne({ id: id });

  //if id is WRONG then throw error
  if (!user) {
    return next(new AppError('No blog found with that id', 404));
  }
  //if id is VALID then continue
  res.status(200).json({
    status: 'success',
    data: user,
  });
};

//==================Create new Data=============
exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create({
      name: ' Ganzo',
      email: 'ganzo.galaxy@gmail.com',
      password: '123456',
      passwordConfirm: '123456',
    });
    res.status(200).json({
      status: 'success',
      post: newUser,
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
