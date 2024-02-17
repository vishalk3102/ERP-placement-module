const catchAsyncError = require('../middlewares/catchAsyncError')
const ErrorHandler = require('../utils/ErrorHandler')
const sendToken = require('../utils/jwtToken')
const User = require('../models/userModel')
const Material = require('../models/MaterialModel')
const Marks = require('../models/MarksModel')

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
  if (user) {
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

//GET ALL  FACULTY  --admin
exports.getAllFaculty = catchAsyncError(async (req, res, next) => {
  let faculties = await User.find({ userType: 'faculty' })

  res.status(200).json({
    success: true,
    message: 'All Faculties Loaded',
    faculties
  })
})

// GET FACULTY
exports.getFaculty = catchAsyncError(async (req, res, next) => {
  const { id } = req.params

  let faculty = await User.findById(id)
  if (!faculty) {
    return next(new ErrorHandler('No Faculty Exists', 400))
  }

  res.status(200).json({
    success: true,
    message: 'Faculty Details Loaded',
    faculty
  })
})

// UPDATE FACULTY
exports.updateFaculty = catchAsyncError(async (req, res, next) => {
  const { id } = req.params

  let faculty = await User.findById(id)
  if (!faculty) {
    return next(new ErrorHandler('No Faculty Exists', 400))
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
    return next(new ErrorHandler('No Faculty Exists', 400))
  }

  await User.findByIdAndDelete(id, req.body)

  res.status(200).json({
    success: true,
    message: 'Successfully Updated'
  })
})

// ADD MATERIAL
exports.addMaterial = catchAsyncError(async (req, res, next) => {
  let { faculty, link, subject, title } = req.body
  let Material = await Material.create({
    faculty,
    link,
    subject,
    title
  })

  res.status(200).json({
    success: true,
    message: 'Material Added!'
  })
})

// UPDATE MATERIAL
exports.updateMaterial = catchAsyncError(async (req, res, next) => {
  let { faculty, link, subject, title } = req.body
  let material = await Material.findByIdAndUpdate(req.params.id, {
    faculty,
    link,
    subject,
    title
  })
  if (!material) {
    return next(new ErrorHandler('No Material Available!', 400))
  }
  res.status(200).json({
    success: true,
    message: 'Material Updated!'
  })
})

// DELETE MATERIAL
exports.deleteMaterial = catchAsyncError(async (req, res, next) => {
  let material = await Material.findByIdAndDelete(req.params.id)
  if (!material) {
    return next(new ErrorHandler('No Material Available!', 400))
  }
  res.status(200).json({
    success: true,
    message: 'Material Deleted!',
    material
  })
})

// ADD MARKS
exports.addMarks = catchAsyncError(async (req, res, next) => {
  const { enrollmentNo, internal, external } = req.body
  if (!enrollmentNo || !internal || !external) {
    return next(
      new ErrorHandler(
        'Enrollment number, internal, and external marks are required',
        400
      )
    )
  }
  const mark = new Marks({
    enrollmentNo,
    internal: { total: internal },
    external: { total: external }
  })
  await mark.save()
  res.status(200).json({
    success: true,
    message: 'Marks Added!'
  })
})

// DELETE MARKS
exports.deleteMarks = catchAsyncError(async (req, res, next) => {
  let marks = await Marks.findById(req.params.id)
  if (!marks) {
    return next(new ErrorHandler('No mark data found!', 400))
  }

  await marks.deleteOne()
  res.status(200).json({
    success: true,
    message: 'Marks Deleted!'
  })
})
