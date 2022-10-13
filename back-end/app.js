const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const blogRouter = require('./routes/blogRoutes.js');
const userRouter = require('./routes/userRoutes.js');
const AppError = require('./utils/AppError.js');
const globalErrorHandler = require('./controller/errorController');

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//prevent from CORS policy error
app.use(cors());

//localhost:port/users
app.use('/blogs', blogRouter);
app.use('/', userRouter);

//check if wrong url written.
app.all('*', (req, res, next) => {
  next(new AppError(`Can not find ${req.originalUrl} on the server`, 404));
});

//=============Global Error Handler=====================
//if error not 404, then internal server error -500
app.use(globalErrorHandler);

module.exports = app;
