const express = require('express')
const router = express.Router()
const Timetable = require('../models/Other/Timetable')
const catchAsyncError = require('../middlewares/catchAsyncError')
const ErrorHandler = require('../utils/ErrorHandler')

exports.getTimetable = catchAsyncError(async (req, res, next) => {
  let timetable = await Timetable.find(req.body)
  if (!timetable) {
    return next(new ErrorHandler('Timetable Not Found', 400))
  }
  res.status(200).json({
    success: true,
    message: 'All Timetable Loaded!',
    timetable
  })
})
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
