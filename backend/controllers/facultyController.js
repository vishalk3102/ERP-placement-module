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
  const { enrollmentNo, branch, marks } = req.body

  if (!enrollmentNo || !branch || !marks || !Array.isArray(marks)) {
    return next(
      new ErrorHandler('Enrollment number, branch, and marks are required', 400)
    )
  }

  const updatedMarks = {}

  marks.forEach(semesterMarks => {
    const { semester, midTerm, endTerm } = semesterMarks

    if (!semester) {
      return next(new ErrorHandler('Semester each mark entry', 400))
    }

    const semesterKey = `marks.${semester - 1}`
    updatedMarks[semesterKey] = {
      semester,
      midTerm,
      endTerm
    }
  })

  const result = await Marks.findOneAndUpdate(
    { enrollmentNo, branch },
    { $set: updatedMarks },
    { new: true, upsert: true }
  )

  res.status(200).json({
    success: true,
    message: 'Marks added successfully',
    marks: result
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
