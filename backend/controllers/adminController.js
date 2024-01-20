const AdminCredentials = require('../models/Admin/AdminCredentials')
const AdminDetails = require('../models/Admin/AdminDetails')
const catchAsyncError = require('../middlewares/catchAsyncError')
const ErrorHandler = require('../utils/ErrorHandler')

// ---------------->ADMIN CREDENTIALS<--------------------
exports.registerAdmin = catchAsyncError(async (req, res, next) => {
  let { loginid, password } = req.body
  let user = await adminCredential.findOne({ loginid })
  if (!user) {
    return next(new ErrorHandler('Admin With This LoginId Already Exists', 400))
  }
  user = await adminCredential.create({
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

exports.loginAdmin = catchAsyncError(async (req, res, next) => {
  let { loginid, password } = req.body
  let user = await adminCredential.findOne({ loginid })
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

exports.updateAdmin = catchAsyncError(async (req, res, next) => {
  let user = await adminCredential.findByIdAndUpdate(req.params.id, req.body)
  if (!user) {
    return next(new ErrorHandler('No Admin Exists', 400))
  }
  res.status(200).json({
    success: true,
    message: 'Updated Successfull'
  })
})

exports.deleteAdmin = catchAsyncError(async (req, res, next) => {
  let user = await adminCredential.findByIdAndDelete(req.params.id)
  if (!user) {
    return next(new ErrorHandler('No Admin Exists!', 400))
  }
  res.status(200).json({
    success: true,
    message: 'Deleted Successfull!'
  })
})

// ---------------->ADMIN DETAILS<--------------------
exports.getDetails = catchAsyncError(async (req, res, next) => {
  let user = await adminDetails.find(req.body)
  if (!user) {
    return next(new ErrorHandler('No Admin Found', 400))
  }
  res.status(200).json({
    success: true,
    message: 'Admin Details Found',
    user
  })
})

exports.addDetails = catchAsyncError(async (req, res, next) => {
  let user = await studentDetails.findOne(req.body)
  if (user) {
    return next(
      new ErrorHandler('Admin With This EmployeeId Already Exists', 400)
    )
  }
  user = await adminDetails.create(req.body)
  res.status(200).json({
    success: true,
    message: 'Admin Details Added',
    user
  })
})

exports.updateDetails = catchAsyncError(async (req, res, next) => {
  let user = await adminDetails.findByIdAndUpdate(req.params.id, req.body)
  if (!user) {
    return next(new ErrorHandler('No Admin Found', 400))
  }
  res.status(200).json({
    success: true,
    message: 'Updated Successfull'
  })
})

exports.deleteDetails = catchAsyncError(async (req, res, next) => {
  let user = await adminDetails.findByIdAndDelete(req.params.id)
  if (!user) {
    return next(new ErrorHandler('No Admin Found', 400))
  }
  res.status(200).json({
    success: true,
    message: 'Deleted Successfull'
  })
})
