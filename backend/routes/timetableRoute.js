const express = require('express')
const {
  getTimetable,
  addTimetable,
  deleteTimetable
} = require('../controllers/timetableController')
const { isAuthenticated, authorizeAdmin } = require('../middlewares/auth')

const router = express.Router()

// ---------------->Timetable<--------------------
router.get('/timetable/gettimetable', isAuthenticated, getTimetable)
router.post(
  '/admin/timetable/addtimetable',
  isAuthenticated,
  authorizeAdmin,
  addTimetable
)
router.delete(
  '/admin/timetable/deletetimetable/:id',
  isAuthenticated,
  authorizeAdmin,
  deleteTimetable
)

router.get('')
