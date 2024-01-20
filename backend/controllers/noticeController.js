const express = require('express')
const router = express.Router()
const Notice = require('../models/Other/Notice')
const catchAsyncError = require('../middlewares/catchAsyncError')
const ErrorHandler = require('../utils/ErrorHandler')

exports.getNotice = catchAsyncError(async (req, res, next) => {
  let notice = await Notice.find(req.body)
  if (!notice) {
    return next(new ErrorHandler('No Notice Available!', 400))
  }
  res.status(200).json({
    success: true,
    message: 'Notice Found!',
    notice
  })
})

exports.addNotice = catchAsyncError(async (req, res, next) => {
  let { link, description, title, type } = req.body
  let notice = await Notice.findOne({ link, description, title, type })
  if (!notice) {
    return next(new ErrorHandler('Notice Already Exists!', 400))
  }
  await Notice.create({
    link,
    description,
    title,
    type
  })
  res.status(200).json({
    success: true,
    message: 'Notice Added Successfully'
  })
})

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
