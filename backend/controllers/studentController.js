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
  let notice = await Notice.findById(req.params.id)
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

exports.getMarksByEnrollmentNo = catchAsyncError(async (req, res, next) => {
  const enrollmentNo = req.params.enrollmentNo
  let Mark = await Marks.findOne({ enrollmentNo })
  if (!Mark) {
    return next(new ErrorHandler('Marks Not Available', 400))
  }
  res.status(200).json({
    success: true,
    message: 'Marks loaded ',
    Mark
  })
})
