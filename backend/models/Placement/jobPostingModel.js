const mongoose = require('mongoose')

const jobPostingSchema = new mongoose.Schema({
  companyName: {
    // type: mongoose.Schema.Types.ObjectId,
    type: String,
    ref: 'Company',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  qualifications: {
    type: String,
    required: true
  },
  eligibleCourse: {
    type: String,
    required: true
  },
  salaryPackage: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  registrationLink: {
    type: String,
    required: true
  },
  deadline: {
    type: Date,
    required: true
  }
})

module.exports = mongoose.model('jobPosting', jobPostingSchema)
