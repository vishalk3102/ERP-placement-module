const adminCredentials = require('../models/Admin/AdminCredentials')
const adminDetails = require('../models/Admin/AdminDetails')
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

  // res.status(201).json({
  //   success: true,
  //   message: 'Admin Registered Successfully'
  // })
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

  /*  res.status(201).json({
    success: true,
    message: 'Student Registered Successfully'
  }) */
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

  // res.status(201).json({
  //   success: true,
  //   message: 'Faculty Registered Successfully'
  // })
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

// ---------------->ADMIN CREDENTIALS<--------------------
// exports.registerAdmin = catchAsyncError(async (req, res, next) => {
//   let { loginid, password } = req.body
//   /*  let user = await adminCredentials.findOne({ loginid })
//   if (!user) {
//     return next(new ErrorHandler('Admin With This LoginId Already Exists', 400))
//   } */
//   user = await adminCredentials.create({
//     loginid,
//     password
//   })
//   res.status(200).json({
//     success: true,
//     message: 'Register Successfull',
//     loginid: user.loginid,
//     id: user.id
//   })
// })

// exports.loginAdmin = catchAsyncError(async (req, res, next) => {
//   let { loginid, password } = req.body
//   let user = await adminCredentials.findOne({ loginid })
//   if (!user) {
//     return next(new ErrorHandler('Wrong Credential', 400))
//   }

//   if (password !== user.password) {
//     return next(new ErrorHandler('Wrong Credentials', 400))
//   }
//   res.status(200).json({
//     success: true,
//     message: 'Login Successfull',
//     loginid: user.loginid,
//     id: user.id
//   })
// })
// // ---------------->ADMIN DETAILS<--------------------
// exports.getDetails = catchAsyncError(async (req, res, next) => {
//   let user = await adminDetails.find(req.body)
//   if (!user) {
//     return next(new ErrorHandler('No Admin Found', 400))
//   }
//   res.status(200).json({
//     success: true,
//     message: 'Admin Details Found',
//     user
//   })
// })

// exports.addDetails = catchAsyncError(async (req, res, next) => {
//   let user = await adminDetails.findOne(req.body)
//   if (user) {
//     return next(
//       new ErrorHandler('Admin With This EmployeeId Already Exists', 400)
//     )
//   }
//   user = await adminDetails.create(req.body)
//   res.status(200).json({
//     success: true,
//     message: 'Admin Details Added',
//     user
//   })
// })

// exports.updateDetails = catchAsyncError(async (req, res, next) => {
//   let user = await adminDetails.findByIdAndUpdate(req.params.id, req.body)
//   if (!user) {
//     return next(new ErrorHandler('No Admin Found', 400))
//   }
//   res.status(200).json({
//     success: true,
//     message: 'Updated Successfull'
//   })
// })

// exports.deleteDetails = catchAsyncError(async (req, res, next) => {
//   let user = await adminDetails.findByIdAndDelete(req.params.id)
//   if (!user) {
//     return next(new ErrorHandler('No Admin Found', 400))
//   }
//   res.status(200).json({
//     success: true,
//     message: 'Deleted Successfull'
//   })
// })
