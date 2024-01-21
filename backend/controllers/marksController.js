const express = require('express')
const Marks = require('../models/Other/Marks')
const catchAsyncError = require('../middlewares/catchAsyncError')
const ErrorHandler = require('../utils/ErrorHandler')

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
exports.addMarks = catchAsyncError(async (req, res, next) => {
  const { enrollmentNo, internal, external } = req.body
  if (!enrollmentNo || !internal || !external) {
    return next(
      new ErrorHandler(
        'Enrollment number, internal, and external marks are required',
        400
      )
    )
  }
  const mark = new Marks({
    enrollmentNo,
    internal: { total: internal },
    external: { total: external }
  })
  await mark.save()
  res.status(200).json({
    success: true,
    message: 'Marks Added!'
  })
})

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
