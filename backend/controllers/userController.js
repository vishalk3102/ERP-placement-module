const catchAsyncError = require('../middlewares/catchAsyncError')
const ErrorHandler = require('../utils/ErrorHandler')
const sendToken = require('../utils/jwtToken')
const crypto = require('crypto')
const User = require('../models/userModel')

// LOGIN USER FUNCTION
exports.login = catchAsyncError(async (req, res, next) => {
  // let { loginId, password, userType } = req.body
  let { employeeId, password } = req.body

  if (!employeeId || !password) {
    return next(new ErrorHandler('Please Enter loginId and Password'))
  }

  // if (userType === 'admin' || userType === 'faculty') {
  //   let user = await User.findOne({ employeeId: loginId })
  // } else {
  //   let user = await User.findOne({ enrollmentNo: loginId })
  // }
  // let user = await User.findOne({ employeeId })
  let user = await User.findOne({ employeeId }).select('+password')
  if (!user) {
    return next(new ErrorHandler('Invalid Credentials', 401))
  }

  const isPasswordMatched = await user.comparePassword(password)

  if (!isPasswordMatched) {
    return next(new ErrorHandler('Invalid Credentials', 401))
  }

  /*  res.status(200).json({
    success: true,
    message: 'Login Successfull'
  }) */
  sendToken(user, 200, res)
})

// LOGOUT USER FUNCTION
exports.logout = catchAsyncError(async (req, res, next) => {
  res.cookie('token', null, {
    expires: new Date(Date.now()),
    httpOnly: true
  })

  res.status(200).json({
    success: true,
    message: 'Logged Out'
  })
})

// GET MY PROFILE
exports.getMyProfile = catchAsyncError(async (req, res, next) => {
  const userId = req.user.userId
  let user = await User.findById(userId)
  if (!user) {
    return next(new ErrorHandler('User Not Found', 400))
  }
  res.status(200).json({
    success: true,
    user
  })
})

// UPDATE MY PROFILE
exports.updateMyProfile = catchAsyncError(async (req, res, next) => {
  const userId = req.user.userId
  let user = await User.findById(userId)
  if (!user) {
    return next(new ErrorHandler('User Not Found', 400))
  }
  await User.findByIdAndUpdate(userId, req.body)
  res.status(200).json({
    success: true,
    message: 'Profile Updated Successfull'
  })
})
