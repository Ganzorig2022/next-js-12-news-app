const express = require('express');
const authController = require('../controller/authController');
const userController = require('../controller/userController');

const userRouter = express.Router();

userRouter.post('/signup', authController.signup);

// //get all users info and create user info
// userRouter
//   .route('/')
//   .get(userController.getUsers)
//   .post(userController.createUser);

// //get all users info and create user info
// userRouter
//   .route('/:id')
//   .get(userController.getUser)
//   .patch(userController.updateUser)
//   .delete(userController.deleteUser);

module.exports = userRouter;
