const catchAsyncError = require('../middlewares/catchAsyncError')
const ErrorHandler = require('../utils/ErrorHandler')
const User = require('../models/userModel')
const sendToken = require('../utils/jwtToken')

// REGISTER STUDENT
exports.registerStudent = catchAsyncError(async (req, res, next) => {
  let {
    enrollmentNo,
    firstName,
    lastName,
    email,
    password,
    phoneNumber,
    gender,
    semester,
    branch
  } = req.body

  let user = await User.findOne({ enrollmentNo })
  if (user) {
    return next(
      new ErrorHandler('Student With this LoginId Already Exists', 400)
    )
  }

  user = await User.create({
    userType: 'student',
    enrollmentNo,
    firstName,
    lastName,
    email,
    password,
    phoneNumber,
    gender,
    semester,
    branch
  })
  sendToken(user, 201, res)
})

//GET ALL  STUDENT
exports.getAllStudent = catchAsyncError(async (req, res, next) => {
  let students = await User.find({ userType: 'student' })

  res.status(200).json({
    success: true,
    message: 'All Students Loaded',
    students
  })
})

//GET STUDENT
exports.getStudent = catchAsyncError(async (req, res, next) => {
  const { id } = req.params

  let student = await User.findById(id)
  if (!student) {
    return next(new ErrorHandler('No Student Exists', 400))
  }

  res.status(200).json({
    success: true,
    message: 'Student Details Loaded',
    student
  })
})

// UPDATE STUDENT
exports.updateStudent = catchAsyncError(async (req, res, next) => {
  const { id } = req.params

  let student = await User.findById(id)
  if (!student) {
    return next(new ErrorHandler('No Student Exists', 400))
  }

  await User.findByIdAndUpdate(id, req.body)

  res.status(200).json({
    success: true,
    message: 'Successfully Updated'
  })
})

// DELETE STUDENT
exports.deleteStudent = catchAsyncError(async (req, res, next) => {
  const { id } = req.params

  let student = await User.findById(id)
  if (!student) {
    return next(new ErrorHandler('No Student Exists', 400))
  }

  await User.findByIdAndDelete(id, req.body)

  res.status(200).json({
    success: true,
    message: 'Successfully Updated'
  })
})
