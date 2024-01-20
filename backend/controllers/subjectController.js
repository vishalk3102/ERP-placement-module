const express = require('express')
const router = express.Router()
const Subject = require('../models/Other/Subject')
const catchAsyncError = require('../middlewares/catchAsyncError')
const ErrorHandler = require('../utils/ErrorHandler')

exports.getSubject = catchAsyncError(async (req, res, next) => {
  let subject = await Subject.find()
  if (!subject) {
    return next(new ErrorHandler('No Subject Available', 400))
  }
  res.status(200).json({
    success: true,
    message: 'All Subject Loaded!',
    subject
  })
})
exports.addSubject = catchAsyncError(async (req, res, next) => {
  let { name, code } = req.body
  let subject = await Subject.findOne({ code })
  if (!subject) {
    return next(new ErrorHandler('Subject Already Exists', 400))
  }
  await Subject.create({
    name,
    code
  })
  res.status(200).json({
    success: true,
    message: 'Subject Added!'
  })
})

exports.deleteSubject = catchAsyncError(async (req, res, next) => {
  let subject = await Subject.findByIdAndDelete(req.params.id)
  if (!Subject) {
    return next(new ErrorHandler('No Subject Exists!', 400))
  }
  res.status(200).json({
    success: true,
    message: 'Subject Deleted!'
  })
})
