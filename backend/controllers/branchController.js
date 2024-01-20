const express = require('express')
const Branch = require('../models/Other/Branch')
const catchAsyncError = require('../middlewares/catchAsyncError')
const ErrorHandler = require('../utils/ErrorHandler')

exports.getBranch = catchAsyncError(async (req, res, next) => {
  let branches = await Branch.find()
  if (!branches) {
    return next(new ErrorHandler('No Branche Available', 400))
  }
  res.status(200).json({
    success: true,
    message: 'All Branches Loaded!',
    branches
  })
})
exports.addBranch = catchAsyncError(async (req, res, next) => {
  let { name } = req.body
  let branch = await Branch.findOne({ name })
  if (!branch) {
    return next(new ErrorHandler('Already Exists', 400))
  }
  res.status(200).json({
    success: true,
    message: 'Branch Added!'
  })
})

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
