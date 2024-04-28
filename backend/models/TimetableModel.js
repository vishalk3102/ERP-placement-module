const mongoose = require('mongoose')

const timeTableSchema = new mongoose.Schema(
  {
    branch: {
      type: String,
      required: true
    },
    semester: {
      type: Number,
      required: true
    },
    timetable: {
      public_id: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      }
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Timetable', timeTableSchema)
