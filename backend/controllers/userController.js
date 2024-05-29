const catchAsyncError = require('../middlewares/catchAsyncError')
const ErrorHandler = require('../utils/ErrorHandler')
const sendToken = require('../utils/jwtToken')
const crypto = require('crypto')
const User = require('../models/userModel')

// LOGIN USER FUNCTION
exports.login = catchAsyncError(async (req, res, next) => {
  let { userId, password, userType } = req.body

  if (!userId || !password || !userType) {
    return next(new ErrorHandler('Please Enter userId and Password'))
  }

  let user = null
  if (userType === 'admin' || userType === 'faculty') {
    let employeeId = userId
    user = await User.findOne({ employeeId }).select('+password')
  } else {
    let enrollmentNo = userId
    user = await User.findOne({ enrollmentNo }).select('+password')
  }

  if (!user) {
    return next(new ErrorHandler('Invalid Credentials', 401))
  }
  const isPasswordMatched = await user.comparePassword(password)

  if (!isPasswordMatched) {
    return next(new ErrorHandler('Invalid Credentials', 401))
  }

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
  if (!req.user || !req.user._id) {
    return next(new ErrorHandler('User not authenticated', 401))
  }
  const userId = req.user._id
  let user = await User.findById(userId)
  if (!user) {
    return next(new ErrorHandler('User Not Found', 400))
  }
  res.status(200).json({
    success: true,
    user
  })
})

// UPDATE PASSWORD --user
exports.updateMyPassword = catchAsyncError(async (req, res, next) => {
  let { userId, oldPassword, newPassword, userType } = req.body
  let user = null
  if (userType === 'admin' || userType === 'faculty') {
    let employeeId = userId
    user = await User.findOne({ employeeId }).select('+password')
  } else {
    let enrollmentNo = userId
    user = await User.findOne({ enrollmentNo }).select('+password')
  }

  const isPasswordMatched = await user.comparePassword(oldPassword)

  if (!isPasswordMatched) {
    return next(new ErrorHander('Old password is incorrect', 400))
  }

  user.password = newPassword

  await user.save()

  sendToken(user, 200, res)
})

// UPDATE MY PROFILE
exports.updateMyProfile = catchAsyncError(async (req, res, next) => {
  if (!req.user || !req.user._id) {
    return next(new ErrorHandler('User not authenticated', 401))
  }
  const userId = req.user._id
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
