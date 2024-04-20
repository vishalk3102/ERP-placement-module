const mongoose = require('mongoose')

const offerSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true
  },
  salaryPackage: {
    type: String,
    required: true
  }
})
const placedStudentSchema = new mongoose.Schema({
  fullName: {
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
  offers: [offerSchema]
})

module.exports = mongoose.model('PlacedStudent', placedStudentSchema)