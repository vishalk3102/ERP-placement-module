const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')

const userSchema = new mongoose.Schema({
  // COMMON FIELD FOR USER TYPES
  userType: {
    type: String,
    enum: ['admin', 'student', 'faculty'],
    default: 'admin',
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
    required: true,
    validate: [validator.isEmail, 'Please provide a valid email']
  },
  password: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  profile: {
    type: String
  },

  // COMMON FIELD FOR ADMIN  AND EMPLOYEE
  employeeId: {
    type: Number
  },

  // FACULTY FIELD
  department: {
    type: String
  },
  experience: {
    type: Number
  },
  post: {
    type: String
  },

  // STUDENT FIELD
  enrollmentNo: {
    type: Number
  },
  semester: {
    type: Number
  },
  branch: {
    type: String
  },
  course: {
    type: String
  },
  universityRollNo: {
    type: String
  },
  section: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date
})

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next()
  }

  this.password = await bcrypt.hash(this.password, 10)
})

// JWT TOKEN
userSchema.methods.getJWTToken = function () {
  const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: '1d'
  })
  return token
}

// COMPARE PASSWORD
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password)
}

module.exports = mongoose.model('User', userSchema)
