const mongoose = require('mongoose')

const academicSchema = new mongoose.Schema({
  enrollmentNo: {
    type: String,
    required: true
  },
  universityRollNo: {
    type: Number,
    required: true
  },
  university: {
    type: String,
    required: true
  },
  course: {
    type: String,
    required: true
  },
  branch: {
    type: String,
    required: true
  },
  semester: {
    type: String,
    required: true
  },
  CGPA: {
    type: Number,
    required: true
  },
  graduationYear: {
    type: Number,
    required: true
  },
  percentageHighSchool: {
    type: Number,
    required: true
  },
  yearOfCompletionHighSchool: {
    type: Number,
    required: true
  },
  percentageIntermediate: {
    type: Number,
    required: true
  },
  yearOfCompletionIntermediate: {
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
    enum: ['Male', 'Female'],
    required: true
  },
  academics: academicSchema,
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('Placement', studentPlacementSchema)
