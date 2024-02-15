const express = require('express')
const router = express.Router()
const Material = require('../models/MaterialModel')
const catchAsyncError = require('../middlewares/catchAsyncError')
const ErrorHandler = require('../utils/ErrorHandler')

exports.getMaterial = catchAsyncError(async (req, res, next) => {
  let material = await Material.find(req.body)
  if (!material) {
    return next(new ErrorHandler('No Material Available!', 400))
  }
  res.status(200).json({
    success: true,
    message: 'Material Found!',
    material
  })
})

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
