const catchAsyncError = require('../middlewares/catchAsyncError')
const ErrorHandler = require('../utils/ErrorHandler')
const sendToken = require('../utils/jwtToken')
const User = require('../models/userModel')
const Company = require('../models/companyModel')
const Placement = require('../models/placementModel')
const Application = require('../models/Placement/applicationModel')
const JobPosting = require('../models/Placement/jobPostingModel')
const PlacementDrive = require('../models/Placement/driveModel')

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
      university,
      enrollmentNo,
      universityRollNo,
      course,
      branch,
      semester,
      CGPA,
      graduationYear,
      percentageHighSchool,
      yearOfCompletionHighSchool,
      percentageIntermediate,
      yearOfCompletionIntermediate
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
      university,
      enrollmentNo,
      universityRollNo,
      course,
      branch,
      semester,
      CGPA,
      graduationYear,
      percentageHighSchool,
      yearOfCompletionHighSchool,
      percentageIntermediate,
      yearOfCompletionIntermediate
    }
  })
  res.status(201).json({
    success: true,
    message: 'Successfully Registered',
    user
  })
})

// GET PLACEMENT PROFILE --student
exports.getPlacementProfile = catchAsyncError(async (req, res, next) => {
  const user = await Placement.findById(req.params.id)
  if (!user) {
    return next(new ErrorHandler('User Details Not Found', 404))
  }
  res.status(200).json({
    status: 'success',
    user
  })
})

// GET STUDENT --admin
exports.getStudent = catchAsyncError(async (req, res, next) => {
  const student = await Placement.findById(req.params.id)
  if (!student) {
    return next(new ErrorHandler('Student Details Not Found', 404))
  }
  res.status(200).json({
    status: 'success',
    message: 'profile fetched successfully',
    student
  })
})

// GET ALL STUDENTS --admin
exports.getAllStudent = catchAsyncError(async (req, res, next) => {
  const students = await Placement.find()

  res.status(200).json({
    success: true,
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
    message: 'Updated Successfully'
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
    message: 'Deleted Successfully'
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

// GET ALL COMPANIES --admin/student
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

// JOB POSTING
// CREATE JOB POST --admin
exports.createJobPosting = catchAsyncError(async (req, res, next) => {
  const {
    companyName,
    title,
    description,
    qualifications,
    eligibleCourse,
    salaryPackage,
    location,
    registrationLink,
    deadline
  } = req.body

  const newJob = await JobPosting.create({
    companyName,
    title,
    description,
    qualifications,
    eligibleCourse,
    salaryPackage,
    location,
    registrationLink,
    deadline
  })
  res.status(201).json({
    success: true,
    message: 'Job Posting Create successfully'
  })
})

// GET JOB POST --admin
exports.getJobPosting = catchAsyncError(async (req, res, next) => {
  const job = await JobPosting.findById(req.params.id)

  if (!job) {
    next(new ErrorHandler("Job doesn't exist ", 400))
  }
  res.status(200).json({
    success: true,
    message: 'Job loaded',
    job
  })
})

// GET ALL JOB POST --admin
exports.getAllJobPostings = catchAsyncError(async (req, res, next) => {
  const jobs = await JobPosting.find()

  res.status(200).json({
    success: true,
    message: 'All Job loaded',
    jobs
  })
})

// UPDATE JOB POST --admin
exports.updateJobPosting = catchAsyncError(async (req, res, next) => {
  const job = await JobPosting.findById(req.params.id)

  if (!job) {
    next(new ErrorHandler("Job doesn't exist ", 400))
  }
  await JobPosting.findByIdAndUpdate(req.params.id, req.body)
  res.status(201).json({
    success: true,
    message: 'Job updated successfully'
  })
})

// DELETE JOB POST --admin
exports.deleteJobPosting = catchAsyncError(async (req, res, next) => {
  const job = await JobPosting.findById(req.params.id)

  if (!job) {
    next(new ErrorHandler("Job doesn't exist ", 400))
  }
  await JobPosting.findByIdAndDelete(req.params.id)
  res.status(201).json({
    success: true,
    message: 'Job deleted successfully'
  })
})

// APPLICATION TRACKING
// GET ALL  ELIGIBLE JOB POST --student
exports.getEligibleJobPostings = catchAsyncError(async (req, res, next) => {
  const jobPostings = await JobPosting.find()

  res.status(200).json({
    success: true,
    count: jobPostings.length,
    jobPostings
  })
})

// APPLY TO JOB POSTING --student
exports.applyForJob = catchAsyncError(async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    university,
    universityRollNo,
    course,
    branch
  } = req.body

  const studentId = await Placement.findOne({ email: email }, { _id: 1 })
  const jobPostingId = req.params.id

  const newJob = await Application.create({
    student: studentId,
    jobPosting: jobPostingId,
    firstName,
    lastName,
    email,
    phoneNumber,
    university,
    universityRollNo,
    course,
    branch
  })

  res.status(201).json({
    success: true,
    message: 'Successfully Applied for Job',
    newJob
  })
})

// GET ALL APPLIED JOB APPLICATION --student
exports.getAllAppliedApplications = catchAsyncError(async (req, res, next) => {
  const studentId = req.params.studentId
  const applications = await Application.find({ student: studentId })

  res.status(200).json({
    success: true,
    message: 'All Application loaded',
    count: applications.length,
    applications
  })
})

// GET ALL COMPANIES IN APPLICATION TAB --admin
exports.GetAllCompanyApplication = catchAsyncError(async (req, res, next) => {
  const companies = await JobPosting.find({})

  res.status(200).json({
    success: true,
    count: companies.length,
    companies
  })
})

// GET APPLICATION COMPANY WISE --admin
exports.getApplicationsByCompany = catchAsyncError(async (req, res, next) => {
  const companyId = req.params.id
  const company = await JobPosting.findById(companyId)
  const companyName = company.companyName

  const applications = await Application.find({
    jobPosting: companyId
  })

  res.status(200).json({
    success: true,
    count: applications.length,
    applications,
    companyName
  })
})

// PLACEMENT DRIVE
// CREATE DRIVE
exports.createDrive = catchAsyncError(async (req, res, next) => {
  const { companyName, location, date } = req.body

  const newDrive = await JobPosting.create({
    companyName,
    location,
    date
  })
  res.status(201).json({
    success: true,
    message: 'Placement Drive  Create successfully'
  })
})

// GET ALL DRIVES  --admin/student
exports.getAllDrive = catchAsyncError(async (req, res, next) => {
  const drives = await PlacementDrive.find()

  res.status(200).json({
    success: true,
    message: 'All Drives loaded',
    count: Drives.length,
    drives
  })
})

// GET SINGLE DRIVE DETAILS
exports.getDrive = catchAsyncError(async (req, res, next) => {
  const drive = await PlacementDrive.findById(req.params.id)

  if (!drive) {
    next(new ErrorHandler("Drive doesn't exist ", 400))
  }
  res.status(200).json({
    success: true,
    message: 'Drive details loaded',
    drive
  })
})

// UPDATE DRIVE --admin
exports.updateDrive = catchAsyncError(async (req, res, next) => {
  const drive = await PlacementDrive.findById(req.params.id)

  if (!drive) {
    next(new ErrorHandler("Drive doesn't exist ", 400))
  }
  await JobPosting.findByIdAndUpdate(req.params.id, req.body)
  res.status(201).json({
    success: true,
    message: 'Job updated successfully'
  })
})

// DELETE DRIVE --admin
exports.deleteDrive = catchAsyncError(async (req, res, next) => {
  const drive = await PlacementDrive.findById(req.params.id)

  if (!drive) {
    next(new ErrorHandler("Job doesn't exist ", 400))
  }
  await JobPosting.findByIdAndDelete(req.params.id)
  res.status(201).json({
    success: true,
    message: 'Job deleted successfully'
  })
})
