const catchAsyncError = require('../middlewares/catchAsyncError')
const ErrorHandler = require('../utils/ErrorHandler')
const sendToken = require('../utils/jwtToken')
const User = require('../models/userModel')
const Notice = require('../models/NoticeModel')
const Branch = require('../models/BranchModel')
const Subject = require('../models/SubjectModel')
const Timetable = require('../models/TimetableModel')
const cloudinary = require('cloudinary')
const getDataUri = require('../utils/dataUri')

//STUDENT
// REGISTER STUDENT
exports.registerStudent = catchAsyncError(async (req, res, next) => {
  let {
    enrollmentNo,
    firstName,
    lastName,
    email,
    phoneNumber,
    gender,
    semester,
    course,
    branch,
    universityRollNo,
    section
  } = req.body
  console.log('Received Form Data:', req.body)

  let student = await User.findOne({ enrollmentNo })
  if (student) {
    return next(
      new ErrorHandler('Student With this LoginId Already Exists', 400)
    )
  }

  const password = 'student@1234'

  student = await User.create({
    userType: 'student',
    enrollmentNo,
    firstName,
    lastName,
    email,
    password,
    phoneNumber,
    gender,
    semester,
    course,
    branch,
    universityRollNo,
    section,
    profile: {
      public_id: myCloud.public_id,
      url: myCloud.secure_url
    }
  })
  res.status(201).json({
    success: true,
    message: 'Student Added Successfully',
    student
  })
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

//FACULTY
// REGISTER FACULTY
exports.registerFaculty = catchAsyncError(async (req, res, next) => {
  let {
    employeeId,
    firstName,
    lastName,
    email,
    phoneNumber,
    gender,
    department,
    post,
    experience,
    profile
  } = req.body

  let faculty = await User.findOne({ employeeId })
  if (faculty) {
    return next(
      new ErrorHandler('Faculty With this LoginId Already Exists', 400)
    )
  }

  const myCloud = await cloudinary.v2.uploader.upload(profile, {
    folder: 'profile'
  })

  const password = 'faculty@1234'

  faculty = await User.create({
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
    experience,
    profile: {
      public_id: myCloud.public_id,
      url: myCloud.secure_url
    }
  })
  res.status(201).json({
    success: true,
    message: 'Faculty Added Successfully',
    faculty
  })
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
  let faculty = await User.findById(req.params.id)
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

// REGISTER ADMIN
exports.registerAdmin = catchAsyncError(async (req, res, next) => {
  let { employeeId, firstName, lastName, email, phoneNumber, gender } = req.body

  let admin = await User.findOne({ employeeId })
  if (admin) {
    return next(new ErrorHandler('Admin With this LoginId Already Exists', 400))
  }

  const password = 'admin@1234'
  admin = await User.create({
    userType: 'admin',
    employeeId,
    firstName,
    lastName,
    email,
    password,
    phoneNumber,
    gender
  })

  res.status(201).json({
    success: true,
    message: 'Admin Added Successfully',
    admin
  })
})

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
  // let notice = await Notice.findOne({ link, description, title, type })
  // if (!notice) {
  //   return next(new ErrorHandler('Notice Already Exists!', 400))
  // }
  const notice = await Notice.create({
    link,
    description,
    title,
    type
  })
  res.status(200).json({
    success: true,
    message: 'Notice Added Successfully',
    notice
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
