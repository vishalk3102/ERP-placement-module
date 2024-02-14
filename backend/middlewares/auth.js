const ErrorHandler = require('../utils/ErrorHandler')
const catchAsyncError = require('./catchAsyncError')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

exports.isAuthenticated = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies
  console.log(token)
  // const { token } = req.headers.authorization.split('')[1]

  if (!token) {
    return next(new ErrorHandler('please Login to access this resource', 401))
  }

  const decodeToken = jwt.verify(token.toString(), process.env.JWT_SECRET)
  const userId = decodeToken.id
  console.log(decodeToken)
  console.log(decodeToken.id)
  req.user = await User.findById(userId)
  next()
})

// exports.authorizeRole = (...roles) => {
//   return (req, res, next) => {
//     if (!roles.includes(req.user.userType)) {
//       return next(
//         new ErrorHandler(
//           `User Type :${res.user.userType} is not allowed to access this resource`
//         )
//       )
//     }
//   }
// }
exports.authorizeAdmin = (req, res, next) => {
  const token = req.cookies['connect.sid']

  if (req.user.role != 'admin') {
    return next(new ErrorHandler('Only Admin Allowed', 405))
  }
  next()
}
exports.authorizeStudent = (req, res, next) => {
  const token = req.cookies['connect.sid']

  if (req.user.role != 'student') {
    return next(new ErrorHandler('Only Student Allowed', 405))
  }
  next()
}
exports.authorizeFaculty = (req, res, next) => {
  const token = req.cookies['connect.sid']

  if (req.user.role != 'faculty') {
    return next(new ErrorHandler('Only Faculty Allowed', 405))
  }
  next()
}
