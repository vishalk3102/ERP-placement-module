const express = require('express')
const Subject = require('../models/SubjectModel')
const catchAsyncError = require('../middlewares/catchAsyncError')
const ErrorHandler = require('../utils/ErrorHandler')

exports.getSubject = catchAsyncError(async (req, res, next) => {
  let subjects = await Subject.find()
  if (!subjects) {
    return next(new ErrorHandler('No Subject Available', 400))
  }
  res.status(200).json({
    success: true,
    message: 'All Subject Loaded!',
    subjects
  })
})
exports.addSubject = catchAsyncError(async (req, res, next) => {
  let { name, code } = req.body
  if (!name || !code) {
    return next(new ErrorHandler('Name and Code are required', 400))
  }
  let subject = await Subject.findOne({ name })
  if (subject) {
    return next(new ErrorHandler('Subject Already Exists', 400))
  }

  // subject = new Subject({ name, code })
  // await subject.save()

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
