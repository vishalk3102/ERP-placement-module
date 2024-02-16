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

  let user = await User.findOne({ employeeId })
  if (user) {
    return next(new ErrorHandler('Admin With this LoginId Already Exists', 400))
  }

  user = await User.create({
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

//GET ALL  ADMIN  --admin
exports.getAllAdmin = catchAsyncError(async (req, res, next) => {
  let admins = await User.find({ userType: 'admin' })

  res.status(200).json({
    success: true,
    message: 'All Faculties Loaded',
    admins
  })
})

// GET ADMIN
exports.getAdmin = catchAsyncError(async (req, res, next) => {
  const { id } = req.params

  let admin = await User.findById(id)
  if (!admin) {
    return next(new ErrorHandler('No Admin Exists', 400))
  }

  res.status(200).json({
    success: true,
    message: 'admin Details Loaded',
    admin
  })
})

// UPDATE ADMIN
exports.updateAdmin = catchAsyncError(async (req, res, next) => {
  const { id } = req.params

  let admin = await User.findById(id)
  if (!admin) {
    return next(new ErrorHandler('No Admin Exists', 400))
  }

  await User.findByIdAndUpdate(id, req.body)

  res.status(200).json({
    success: true,
    message: 'Successfully Updated'
  })
})

// DELETE ADMIN
exports.deleteAdmin = catchAsyncError(async (req, res, next) => {
  const { id } = req.params

  let admin = await User.findById(id)
  if (!admin) {
    return next(new ErrorHandler('No Admin Exists', 400))
  }

  await User.findByIdAndDelete(id, req.body)

  res.status(200).json({
    success: true,
    message: 'Successfully Updated'
  })
})
