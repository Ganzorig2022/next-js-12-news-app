const { promisify } = require('util'); //built-in method
const jwt = require('jsonwebtoken');
const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/AppError');

//get unique token using jsonwebtoken
const signToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);

  //create a new token
  const token = signToken(newUser._id);

  //create a cookie
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;

  res.cookie('jwt', token, cookieOptions);

  // remove password from output
  newUser.password = undefined;

  res.status(201).json({
    status: 'success',
    token,
    data: {
      user: newUser,
    },
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // 1) check if email and password exist
  if (!email || !password) {
    return next(new AppError('Please provide email and password', 400));
  }
  // 2) check if user exists && password is correct
  const user = await User.findOne({ email }).select('+password');
  // const correct = await user.correctPassword(password, user.password);

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError('Incorrect email or password', 401));
  }

  // 3) If everything ok, send token to client
  //create a new token
  const token = signToken(user._id);

  res.status(200).json({
    status: 'success',
    token,
  });
});

//  Protecting other routes if user is not logged in
exports.protect = catchAsync(async (req, res, next) => {
  let token;
  // 1) Get the token and check if it exists
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    // req.headers dotroos {authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDc2'}-ees token-oo tasdaj awna.
    token = req.headers.authorization.split(' ')[1];
    console.log('token', token);
  }
  if (!token) {
    return next(new AppError('You are not logged in!', 401));
  }
  // 2) Validate token
  //promisify() returns promise
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  //{ id: '6347690801008d9ed39ed220', iat: 1665640725, exp: 1665727125 } burtgeltei hereglegchiin ID butsaana.
  if (decoded)
    // // 3) Check if user stil exists
    // const freshUser = await User.findById(decoded.id);
    // if (!freshUser) {
    //   return next(
    //     new AppError('User belonging to this token DOES NOT EXIST anymore!', 401)
    //   );
    // }

    // // 4) Check if user changed password after the token was issued
    // if (freshUser.changedPasswordAfter(decoded.iat)) {
    //   return next(
    //     new AppError('User recently changed password! Please log in again!', 401)
    //   );
    // }

    // 5) GRANT ACCESS TO PROTECTED ROUTE
    next();
});
