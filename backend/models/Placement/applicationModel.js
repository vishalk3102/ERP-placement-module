const mongoose = require('mongoose')

const applicationSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Placement',
    required: true
  },
  jobPosting: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'jobPosting',
    required: true
  },
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
    required: true
  },
  phoneNumber: {
    type: String,
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
  universityRollNo: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Application', applicationSchema)
