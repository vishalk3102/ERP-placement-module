const catchAsyncError = require('../middlewares/catchAsyncError')
const ErrorHandler = require('../utils/ErrorHandler')
const User = require('../models/userModel')
const Company = require('../models/companyModel')
const Placement = require('../models/placementModel')
const sendToken = require('../utils/jwtToken')

// STUDENT
// REGISTER FOR PLACEMENT PROFILE --student
exports.registerPlacementProfile = catchAsyncError(async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    dateOfBirth,
    gender,
    academics: {
      degree,
      major,
      university,
      graduationYear,
      CGPA,
      percentage10th,
      yearOfCompletion10th,
      percentage12th,
      yearOfCompletion12th
    }
  } = req.body

  const user = await Placement.create({
    firstName,
    lastName,
    email,
    phoneNumber,
    dateOfBirth,
    gender,
    academics: {
      degree,
      major,
      university,
      graduationYear,
      CGPA,
      percentage10th,
      yearOfCompletion10th,
      percentage12th,
      yearOfCompletion12th
    }
  })
  res.status(200).json({
    success: true,
    message: 'Registered for Placement'
  })
})

// GET STUDENT --admin
exports.getStudent = catchAsyncError(async (req, res, next) => {
  const placementProfile = await Placement.findById(req.params.id)
  if (!placementProfile) {
    return next(new ErrorHandler('You are not registered for placement', 404))
  }
  res.status(200).json({
    status: 'success',
    message: 'profile fetched successfully',
    placementProfile
  })
})

// GET ALL STUDENTS --admin
exports.getAllStudent = catchAsyncError(async (req, res, next) => {
  const students = await Placement.find()

  res.status(200).json({
    success: true,
    message: 'All Student loaded',
    students
  })
})

// UPDATE STUDENT --admin
exports.updateStudent = catchAsyncError(async (req, res, next) => {
  const { id } = req.params
  const student = await Placement.findById(id)
  if (!student) {
    next(new ErrorHandler('No Student exists', 404))
  }
  await Placement.findByIdAndUpdate(id, req.body)
  res.status(200).json({
    success: true,
    message: 'Student Details  updated Successfully'
  })
})

// DELETE STUDENT --admin
exports.deleteStudent = catchAsyncError(async (req, res, next) => {
  const { id } = req.params
  const student = await Placement.findById(id)
  if (!student) {
    next(new ErrorHandler('No Student exists', 404))
  }
  await Placement.findByIdAndDelete(id)
  res.status(200).json({
    success: true,
    message: 'Student Details  deleted Successfully'
  })
})

// COMPANY
// REGISTER COMPANY FOR PLACEMENT --admin
exports.registerCompanyProfile = catchAsyncError(async (req, res, next) => {
  const {
    companyName,
    industry,
    website,
    about,
    location,
    package,
    contactPerson,
    contactEmail,
    contactPhone
  } = req.body

  const company = await Company.create({
    companyName,
    industry,
    website,
    about,
    location,
    package,
    contactPerson,
    contactEmail,
    contactPhone
  })
  res.status(200).json({
    success: true,
    message: 'Company Registered for Placement'
  })
})

// GET ALL COMPANIES --admin
exports.getAllCompanies = catchAsyncError(async (req, res, next) => {
  let companies = await Company.find({})

  res.status(200).json({
    success: true,
    message: 'All Companies loaded',
    companies
  })
})

// GET COMPANY  --admin/student
exports.getCompany = catchAsyncError(async (req, res, next) => {
  const company = await Company.findById(req.params.id)
  if (!company) {
    return next(new ErrorHandler('Company Data not found', 404))
  }
  res.status(200).json({
    success: true,
    message: 'Company data loaded',
    company
  })
})

// UPDATE COMPANY --admin
exports.updateCompany = catchAsyncError(async (req, res, next) => {
  const { id } = req.params
  const company = await Company.findById(id)
  if (!company) {
    next(new ErrorHandler('No Company exists', 404))
  }
  await Company.findByIdAndUpdate(id, req.body)
  res.status(200).json({
    success: true,
    message: 'Company Details  updated Successfully'
  })
})

// DELETE COMPANY --admin
exports.deleteCompany = catchAsyncError(async (req, res, next) => {
  const { id } = req.params
  const company = await Company.findById(id)
  if (!company) {
    next(new ErrorHandler('No Company exists', 404))
  }
  await Company.findByIdAndDelete(id)
  res.status(200).json({
    success: true,
    message: 'Company Details  deleted Successfully'
  })
})
