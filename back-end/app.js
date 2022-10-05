const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const userRouter = require('./routes/userRoutes.js');

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//prevent from CORS policy error
app.use(cors());

//localhost:port/users
app.use('/users', userRouter);

module.exports = app;
