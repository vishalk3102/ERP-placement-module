const mongoose = require('mongoose')

const driveSchema = new mongoose.Schema({
  companyName: {
    type: String,
    ref: 'Company',
    required: true
  },
  location: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
})

module.exports = mongoose.model('Drive', driveSchema)
