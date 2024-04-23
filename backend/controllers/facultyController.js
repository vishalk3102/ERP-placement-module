const catchAsyncError = require('../middlewares/catchAsyncError')
const ErrorHandler = require('../utils/ErrorHandler')
const sendToken = require('../utils/jwtToken')
const User = require('../models/userModel')
const Material = require('../models/MaterialModel')
const Marks = require('../models/MarksModel')

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
exports.addStudentMarks = catchAsyncError(async (req, res, next) => {
  const { enrollmentNo, marksList, branch, semester, examType } = req.body

  if (!enrollmentNo || !marksList || !Array.isArray(marksList)) {
    return next(new ErrorHandler('Enrollment number,marks are required', 400))
  }

  const marksToUpdate = {}

  if (examType === 'mid') {
    marksList.forEach(item => {
      marksToUpdate[`midTerm.${item.subject}`] = item.mark
    })
  } else if (examType === 'end') {
    marksList.forEach(item => {
      marksToUpdate[`endTerm.${item.subject}`] = item.mark
    })
  } else {
    return next(new ErrorHandler('Invalid exam type', 400))
  }

  const marks = await Marks.findOneAndUpdate(
    { enrollmentNo, branch, semester },
    { $set: marksToUpdate },
    { new: true, upsert: true }
  )

  res.status(200).json({
    success: true,
    message: 'Marks added succesfully',
    marks
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
