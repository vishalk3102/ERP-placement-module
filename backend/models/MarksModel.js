const mongoose = require('mongoose')

const markSchema = new mongoose.Schema(
  {
    enrollmentNo: {
      type: Number,
      required: true
    },
    branch: {
      type: String,
      required: true
    },
    marks: [
      {
        semester: {
          type: Number,
          required: true
        },
        midTerm: {
          type: Map,
          of: Number
        },
        endTerm: {
          type: Map,
          of: Number
        }
      }
    ]
  },
  { timestamps: true }
)

module.exports = mongoose.model('Mark', markSchema)
