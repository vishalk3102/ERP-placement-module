const studentDetails = require('../models/Students/StudentDetails')
const studentCredential = require('../models/Students/StudentCredentials')
const catchAsyncError = require('../middlewares/catchAsyncError')
const ErrorHandler = require('../utils/ErrorHandler')

// ---------------->STUDENT CREDENTIALS<--------------------
exports.registerStudent = catchAsyncError(async (req, res, next) => {
  let { loginid, password } = req.body
  /*  let user = await studentCredential.findOne({ loginid })
  if (!user) {
    return next(new ErrorHandler('User With This LoginId Already Exists', 400))
  } */
  const user = await studentCredential.create({
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

exports.loginStudent = catchAsyncError(async (req, res, next) => {
  let { loginid, password } = req.body
  let user = await studentCredential.findOne({ loginid })
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

exports.updateStudent = catchAsyncError(async (req, res, next) => {
  let user = await studentCredential.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
      useFindAndModify: false
    }
  )
  if (!user) {
    return next(new ErrorHandler('No User Exists!', 400))
  }
  res.status(200).json({
    success: true,
    message: 'Updated Successfull'
  })
})

exports.deleteStudent = catchAsyncError(async (req, res, next) => {
  let user = await studentCredential.findById(req.params.id)
  if (!user) {
    return next(new ErrorHandler('No User Exists!', 400))
  }
  await user.deleteOne()
  res.status(200).json({
    success: true,
    message: 'Deleted Successfull!'
  })
})

// ---------------->STUDENT DETAILS<--------------------
exports.getDetails = catchAsyncError(async (req, res, next) => {
  let user = await studentDetails.find()
  if (!user) {
    return next(new ErrorHandler('No Student Found', 400))
  }
  res.status(200).json({
    success: true,
    message: 'Student Details Found',
    user
  })
})

exports.addDetails = catchAsyncError(async (req, res, next) => {
  let user = await studentDetails.findOne({
    enrollmentNo: req.body.enrollmentNo
  })
  if (user) {
    return next(
      new ErrorHandler('Student With This Enrollment Already Exists', 400)
    )
  }
  user = await studentDetails.create(req.body)
  res.status(200).json({
    success: true,
    message: 'Student Details Added',
    user
  })
})

exports.updateDetails = catchAsyncError(async (req, res, next) => {
  let user = await studentDetails.findByIdAndUpdate(req.params.id, req.body)
  if (!user) {
    return next(new ErrorHandler('No Student Found', 400))
  }

  res.status(200).json({
    success: true,
    message: 'Updated Successfull'
  })
})

exports.deleteDetails = catchAsyncError(async (req, res, next) => {
  let { id } = req.body
  let user = await studentDetails.findByIdAndDelete(req.params.id)
  if (!user) {
    return next(new ErrorHandler('No Student Found', 400))
  }
  res.status(200).json({
    success: true,
    message: 'Deleted Successfull'
  })
})

exports.count = catchAsyncError(async (req, res, next) => {
  let counts = await studentDetails.count(req.body)

  res.status(200).json({
    success: true,
    message: 'Count Successfull!',
    counts
  })
})
