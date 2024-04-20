const catchAsyncError = require('../middlewares/catchAsyncError')
const ErrorHandler = require('../utils/ErrorHandler')
const sendToken = require('../utils/jwtToken')
const User = require('../models/userModel')
const Notice = require('../models/NoticeModel')
const Branch = require('../models/BranchModel')
const Subject = require('../models/SubjectModel')
const Timetable = require('../models/TimetableModel')

// REGISTER ADMIN
exports.registerAdmin = catchAsyncError(async (req, res, next) => {
  let { employeeId, firstName, lastName, email, phoneNumber, gender } = req.body

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
    admins
  })
})

// GET ADMIN
exports.getAdmin = catchAsyncError(async (req, res, next) => {
  let admin = await User.findById(req.params.id)
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

// GET ALL BRANCH

exports.getAllBranch = catchAsyncError(async (req, res, next) => {
  let branches = await Branch.find()

  res.status(200).json({
    success: true,
    branches
  })
})

// ADD BRANCH
exports.addBranch = catchAsyncError(async (req, res, next) => {
  let { name } = req.body
  let branch = await Branch.findOne({ name })

  if (branch) {
    return next(new ErrorHandler('Already Exists', 400))
  }

  branch = await Branch.create({
    name
  })
  res.status(200).json({
    success: true,
    message: 'Branch Added!',
    branch
  })
})

// DELETE BRANCH
exports.deleteBranch = catchAsyncError(async (req, res, next) => {
  let branch = await Branch.findByIdAndDelete(req.params.id)
  if (!branch) {
    return next(new ErrorHandler('No Branch Data Exists!', 400))
  }
  res.status(200).json({
    success: true,
    message: 'Branch Deleted!'
  })
})

// GET ALL NOTICE
exports.getAllNotice = catchAsyncError(async (req, res, next) => {
  const notices = await Notice.find({})

  res.status(200).json({
    success: true,
    notices
  })
})

// ADD NOTICE
exports.addNotice = catchAsyncError(async (req, res, next) => {
  let { link, description, title, type } = req.body
  let notice = await Notice.findOne({ link, description, title, type })
  if (!notice) {
    return next(new ErrorHandler('Notice Already Exists!', 400))
  }
  await Notice.create({
    link,
    description,
    title,
    type
  })
  res.status(200).json({
    success: true,
    message: 'Notice Added Successfully'
  })
})

// UPDATE NOTICE
exports.updateNotice = catchAsyncError(async (req, res, next) => {
  let { link, description, title, type } = req.body
  let notice = await Notice.findByIdAndUpdate(req.params.id, {
    link,
    description,
    title,
    type
  })
  if (!notice) {
    return next(new ErrorHandler('No Notice Available!', 400))
  }
  res.status(200).json({
    success: true,
    message: 'Notice Updated Successfully'
  })
})

// DELETE NOTICE
exports.deleteNotice = catchAsyncError(async (req, res, next) => {
  let notice = await Notice.findByIdAndDelete(req.params.id)
  if (!notice) {
    return next(new ErrorHandler('No Notice Available!', 400))
  }
  res.status(200).json({
    success: true,
    message: 'Notice Deleted Successfully',
    Notice
  })
})

// GET ALL  SUBJECT
exports.getAllSubject = catchAsyncError(async (req, res, next) => {
  const subjects = await Subject.find({})

  res.status(200).json({
    success: true,
    subjects
  })
})

// ADD SUBJECT
exports.addSubject = catchAsyncError(async (req, res, next) => {
  let { name, code } = req.body
  if (!name || !code) {
    return next(new ErrorHandler('Name and Code are required', 400))
  }
  let subject = await Subject.findOne({ name })
  if (subject) {
    return next(new ErrorHandler('Subject Already Exists', 400))
  }

  subject = await Subject.create({
    name,
    code
  })
  res.status(200).json({
    success: true,
    message: 'Subject Added!',
    subject
  })
})

// DELETE SUBJECT
exports.deleteSubject = catchAsyncError(async (req, res, next) => {
  let subject = await Subject.findByIdAndDelete(req.params.id)
  if (!subject) {
    return next(new ErrorHandler('No Subject Exists!', 400))
  }
  res.status(200).json({
    success: true,
    message: 'Subject Deleted!'
  })
})

//ADD TIMETABLE
exports.addTimetable = catchAsyncError(async (req, res, next) => {
  let { link, semester, branch } = req.body
  let timetable = await Timetable.findOne({ semester, branch })
  if (!timetable) {
    return next(new ErrorHandler('Already Exists', 400))
  }
  await Timetable.findByIdAndUpdate(timetable._id, req.body)
  res.status(200).json({
    success: true,
    message: 'Timetable Added!'
  })
})

//DELETE TIMETABLE
exports.deleteTimetable = catchAsyncError(async (req, res, next) => {
  let timetable = await Timetable.findByIdAndDelete(req.params.id)
  if (!timetable) {
    return next(new ErrorHandler('No Timetable Data Exists!', 400))
  }
  res.status(200).json({
    success: true,
    message: 'Timetable Deleted!'
  })
})
