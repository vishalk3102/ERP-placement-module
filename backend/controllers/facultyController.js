const facultyCredentials = require('../models/Faculty/facultyCredentials')
const facultyDetails = require('../models/Faculty/facultyDetails')
const catchAsyncError = require('../middlewares/catchAsyncError')
const ErrorHandler = require('../utils/ErrorHandler')

// ---------------->FACULTY CREDENTIALS<--------------------
exports.registerFaculty = catchAsyncError(async (req, res, next) => {
  let { loginid, password } = req.body
  let user = await facultyCredentials.findOne({ loginid })
  if (!user) {
    return next(new ErrorHandler('User With This LoginId Already Exists', 400))
  }
  user = await facultyCredentials.create({
    loginid,
    password
  })
  res.status(200).json({
    success: true,
    message: 'Register Successfull',
    loginid: user.loginid,
    id: user.id
  })
})

exports.loginFaculty = catchAsyncError(async (req, res, next) => {
  let { loginid, password } = req.body
  let user = await facultyCredentials.findOne({ loginid })
  if (!user) {
    return next(new ErrorHandler('Wrong Credential', 400))
  }

  if (password !== user.password) {
    return next(new ErrorHandler('Wrong Credentials', 400))
  }
  res.status(200).json({
    success: true,
    message: 'Login Successfull',
    loginid: user.loginid,
    id: user.id
  })
})

exports.updateFaculty = catchAsyncError(async (req, res, next) => {
  let user = await facultyCredentials.findByIdAndUpdate(req.params.id, req.body)
  if (!user) {
    return next(new ErrorHandler('No User Exists!', 400))
  }
  res.status(200).json({
    success: true,
    message: 'Updated Successfull'
  })
})

exports.deleteFaculty = catchAsyncError(async (req, res, next) => {
  let user = await facultyCredentials.findByIdAndDelete(req.params.id)
  if (!user) {
    return next(new ErrorHandler('No User Exists!', 400))
  }
  res.status(200).json({
    success: true,
    message: 'Deleted Successfull!'
  })
})

// ---------------->FACULTY DETAILS<--------------------
exports.getDetails = catchAsyncError(async (req, res, next) => {
  let user = await facultyDetails.find(req.body)
  if (!user) {
    return next(new ErrorHandler('No Faculty Found', 400))
  }
  res.status(200).json({
    success: true,
    message: 'Faculty Details Found',
    user
  })
})

exports.addDetails = catchAsyncError(async (req, res, next) => {
  let user = await facultyDetails.findOne({
    enrollmentNo: req.body.enrollmentNo
  })
  if (user) {
    return next(
      new ErrorHandler('Faculty With This Enrollment Already Exists', 400)
    )
  }
  user = await facultyDetails.create(req.body)
  res.status(200).json({
    success: true,
    message: 'Faculty Details Added',
    user
  })
})

exports.updateDetails = catchAsyncError(async (req, res, next) => {
  let user = await facultyDetails.findByIdAndUpdate(req.params.id, req.body)
  if (!user) {
    return next(new ErrorHandler('No Faculty Found', 400))
  }
  res.status(200).json({
    success: true,
    message: 'Updated Successfull'
  })
})

exports.deleteDetails = catchAsyncError(async (req, res, next) => {
  let { id } = req.body
  let user = await facultyDetails.findByIdAndDelete(req.params.id)
  if (!user) {
    return next(new ErrorHandler('No Faculty Found', 400))
  }
  res.status(200).json({
    success: true,
    message: 'Deleted Successfull'
  })
})

exports.count = catchAsyncError(async (req, res, next) => {
  let user = await facultyDetails.count(req.body)

  res.status(200).json({
    success: true,
    message: 'Count Successfull!',
    user
  })
})
