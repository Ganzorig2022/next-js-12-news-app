const express = require('express');
const blogController = require('../controller/blogController');
//user is logged in checking middleware function
const authController = require('./../controller/authController');

const blogRouter = express.Router();

//get all users info and create user info
blogRouter
  .route('/')
  .get(authController.protect, blogController.getUsers)
  .post(blogController.createUser);

//get all users info and create user info
blogRouter
  .route('/:id')
  .get(blogController.getUser)
  .patch(blogController.updateUser)
  .delete(blogController.deleteUser);

module.exports = blogRouter;
