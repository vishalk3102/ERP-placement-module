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
  status: {
    type: String,
    enum: ['applied', 'shortlisted', 'rejected'],
    default: 'applied'
  }
})

module.exports = mongoose.model('Application', applicationSchema)
