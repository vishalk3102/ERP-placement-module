const catchAsyncError = require('../middlewares/catchAsyncError')
const ErrorHandler = require('../utils/ErrorHandler')
const User = require('../models/userModel')
const sendToken = require('../utils/jwtToken')

// REGISTER ADMIN
exports.registerAdmin = catchAsyncError(async (req, res, next) => {
  let {
    employeeId,
    firstName,
    lastName,
    email,
    password,
    phoneNumber,
    gender
  } = req.body

  /*  let user = await User.findOne({ employeeId })
  if (!user) {
    return next(new ErrorHandler('Admin With this LoginId Already Exists', 400))
  } */

  const user = await User.create({
    userType: 'admin',
    employeeId,
    firstName,
    lastName,
    email,
    password,
    phoneNumber,
    gender
  })

  sendToken(user, 201, res)
})

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

  let user = await User.findOne({ employeeId })
  if (!user) {
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

// REGISTER FACULTY
exports.registerFaculty = catchAsyncError(async (req, res, next) => {
  let {
    employeeId,
    firstName,
    lastName,
    email,
    password,
    phoneNumber,
    gender,
    department,
    post,
    experience
  } = req.body

  let user = await User.findOne({ employeeId })
  if (!user) {
    return next(
      new ErrorHandler('Faculty With this LoginId Already Exists', 400)
    )
  }

  user = await User.create({
    userType: 'faculty',
    employeeId,
    firstName,
    lastName,
    email,
    password,
    phoneNumber,
    gender,
    department,
    post,
    experience
  })
  sendToken(user, 201, res)
})
// UPDATE FACULTY
exports.updateFaculty = catchAsyncError(async (req, res, next) => {
  const { id } = req.params

  let faculty = await User.findById(id)
  if (!faculty) {
    return next(new ErrorHandler('No Student Exists', 400))
  }

  await User.findByIdAndUpdate(id, req.body)

  res.status(200).json({
    success: true,
    message: 'Successfully Updated'
  })
})

// DELETE FACULTY
exports.deleteFaculty = catchAsyncError(async (req, res, next) => {
  const { id } = req.params

  let faculty = await User.findById(id)
  if (!faculty) {
    return next(new ErrorHandler('No Student Exists', 400))
  }

  await User.findByIdAndDelete(id, req.body)

  res.status(200).json({
    success: true,
    message: 'Successfully Updated'
  })
})
