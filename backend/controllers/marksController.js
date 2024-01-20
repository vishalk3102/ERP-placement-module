const express = require('express')
const router = express.Router()
const Marks = require('../models/Other/Marks')
const catchAsyncError = require('../middlewares/catchAsyncError')
const ErrorHandler = require('../utils/ErrorHandler')

exports.getMarks = catchAsyncError(async (req, res, next) => {
  let Mark = await Marks.find(req.body)
  if (!Mark) {
    return next(new ErrorHandler('Marks Not Available', 400))
  }
  res.status(200).json({
    success: true,
    message: 'All Marks Loaded!',
    branches
  })
})
exports.addMarks = catchAsyncError(async (req, res, next) => {
  let { enrollmentNo } = req.body
  let Mark = await Marks.findOne({ enrollmentNo })
  if (Mark) {
    const data = await Marks.findByIdAndUpdate(Mark._id, req.body)
  } else {
    const data = await Marks.create(req.body)
  }
  res.status(200).json({
    success: true,
    message: 'Marks Added!'
  })
})

exports.deleteMarks = catchAsyncError(async (req, res, next) => {
  let mark = await Branch.findByIdAndDelete(req.params.id)
  if (!mark) {
    return next(new ErrorHandler('No Marks Data Exists!', 400))
  }
  res.status(200).json({
    success: true,
    message: 'Marks Deleted!'
  })
})
