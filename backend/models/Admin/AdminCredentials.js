const mongoose = require('mongoose')

const adminCredentials = new mongoose.Schema(
  {
    loginid: {
      type: Number,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Admin Credential', adminCredentials)
