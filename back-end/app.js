const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');

const app = express();
const blogRouter = require('./routes/blogRoutes');
const userRouter = require('./routes/userRoutes');
const AppError = require('./utils/AppError');
const globalErrorHandler = require('./controller/errorController');

//================================ 1) GLOBAL MIDDLEWARES================================
//Set security HTTP headers
app.use(helmet());

//Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));

//Limit requests from same API
const limiter = rateLimit({
  max: 100, //ONE HUNDRED requests with same ip in ONE HOUR
  windowMs: 60 * 60 * 1000, //360000ms = 0.1 hour
  message: 'Too many requests from this IP, please try again in one hour',
});

app.use('/blogs', limiter);

//prevent from CORS policy error
app.use(cors());

//Test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//================================ 2) ROUTES================================
//localhost:port/blogs
app.use('/blogs', blogRouter);
app.use('/', userRouter);

//check if wrong url written.
app.all('*', (req, res, next) => {
  next(new AppError(`Can not find ${req.originalUrl} on the server`, 404));
});

//================================3) Global Error Handler=====================
//if error not 404, then internal server error -500
app.use(globalErrorHandler);

module.exports = app;
