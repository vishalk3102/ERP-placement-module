const mongoose = require('mongoose')

const academicSchema = new mongoose.Schema({
  degree: {
    type: String,
    required: true
  },
  major: {
    type: String,
    required: true
  },
  university: {
    type: String,
    required: true
  },
  graduationYear: {
    type: Number,
    required: true
  },
  CGPA: {
    type: Number,
    required: true
  },
  percentage10th: {
    type: Number,
    required: true
  },
  yearOfCompletion10th: {
    type: Number,
    required: true
  },
  percentage12th: {
    type: Number,
    required: true
  },
  yearOfCompletion12th: {
    type: Number,
    required: true
  }
})

const studentPlacementSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true
  },
  academics: academicSchema,
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('Placement', studentPlacementSchema)
