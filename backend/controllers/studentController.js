const catchAsyncError = require('../middlewares/catchAsyncError')
const ErrorHandler = require('../utils/ErrorHandler')
const sendToken = require('../utils/jwtToken')
const User = require('../models/userModel')
const Branch = require('../models/BranchModel')
const Notice = require('../models/NoticeModel')
const Subject = require('../models/SubjectModel')
const Material = require('../models/MaterialModel')
const Timetable = require('../models/TimetableModel')
const Marks = require('../models/MarksModel')
const { default: mongoose } = require('mongoose')

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

// GET STUDENT
exports.getStudent = catchAsyncError(async (req, res, next) => {
  let student = await User.findById(req.params.id)
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

// // GET BRANCH
// exports.getBranch = catchAsyncError(async (req, res, next) => {
//   let branches = await Branch.find()
//   if (!branches) {
//     return next(new ErrorHandler('No Branch Available', 400))
//   }
//   res.status(200).json({
//     success: true,
//     message: 'All Branches Loaded!',
//     branches
//   })
// })

// GET NOTICE
exports.getNotice = catchAsyncError(async (req, res, next) => {
  let notice = await Notice.find(req.body)
  if (!notice) {
    return next(new ErrorHandler('No Notice Available!', 400))
  }
  res.status(200).json({
    success: true,
    message: 'Notice Found!',
    notice
  })
})

//GET SUBJECT
exports.getSubject = catchAsyncError(async (req, res, next) => {
  let subjects = await Subject.find()
  if (!subjects) {
    return next(new ErrorHandler('No Subject Available', 400))
  }
  res.status(200).json({
    success: true,
    message: 'All Subject Loaded!',
    subjects
  })
})

//GET MATERIALS
exports.getMaterial = catchAsyncError(async (req, res, next) => {
  let material = await Material.find(req.body)
  if (!material) {
    return next(new ErrorHandler('No Material Available!', 400))
  }
  res.status(200).json({
    success: true,
    message: 'Material Found!',
    material
  })
})

//GET TIMETABLE
exports.getTimetable = catchAsyncError(async (req, res, next) => {
  let timetable = await Timetable.find(req.body)
  if (!timetable) {
    return next(new ErrorHandler('Timetable Not Found', 400))
  }
  res.status(200).json({
    success: true,
    message: 'All Timetable Loaded!',
    timetable
  })
})

// GET MARKS
exports.getMarks = catchAsyncError(async (req, res, next) => {
  let Mark = await Marks.find()
  if (!Mark) {
    return next(new ErrorHandler('Marks Not Available', 400))
  }
  res.status(200).json({
    success: true,
    message: 'All Marks Loaded!',
    Mark
  })
})
