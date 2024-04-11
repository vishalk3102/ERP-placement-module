const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true
  },
  industry: {
    type: String,
    required: true
  },
  website: {
    type: String,
    required: true
  },
  about: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  contactPerson: {
    type: String,
    required: true
  },
  contactEmail: {
    type: String,
    required: true,
    unique: true
  },
  contactPhone: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('Company', companySchema)
