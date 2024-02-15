const ErrorHandler = require('../utils/ErrorHandler')
const catchAsyncError = require('./catchAsyncError')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

exports.isAuthenticated = catchAsyncError(async (req, res, next) => {
  const token = req.cookies.token

  if (!token) {
    return next(new ErrorHandler('Please login to access this resource', 401))
  }

  const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
  req.user = await User.findById(decodedToken.id)
  next()
})

exports.authorizeAdmin = (req, res, next) => {
  const token = req.cookies.token
  if (!token) {
    return next(new ErrorHandler('Authentication required', 401))
  }
  if (req.user.userType != 'admin') {
    return next(new ErrorHandler('Only Admin Allowed', 405))
  }
  next()
}
exports.authorizeStudent = (req, res, next) => {
  const token = req.cookies.token
  if (!token) {
    return next(new ErrorHandler('Authentication required', 401))
  }
  if (req.user.userType != 'student') {
    return next(new ErrorHandler('Only Student Allowed', 405))
  }
  next()
}
exports.authorizeFaculty = (req, res, next) => {
  const token = req.cookies.token
  if (req.user.userType != 'faculty') {
    return next(new ErrorHandler('Only Faculty Allowed', 405))
  }
  next()
}
