const express = require('express');
const blogController = require('../controller/blogController');

const userRouter = express.Router();

//get all users info and create user info
userRouter
  .route('/')
  .get(blogController.getUsers)
  .post(blogController.createUser);

//get all users info and create user info
userRouter
  .route('/:id')
  .get(blogController.getUser)
  .patch(blogController.updateUser)
  .delete(blogController.deleteUser);

module.exports = userRouter;
