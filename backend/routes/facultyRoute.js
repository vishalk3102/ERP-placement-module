const express = require('express')
const {
  addMaterial,
  updateMaterial,
  deleteMaterial,
  deleteMarks,
  addStudentMarks,
  addTimetable,
  deleteTimetable
} = require('../controllers/facultyController')

const { getNotice } = require('../controllers/studentController')

const { getAllNotice } = require('../controllers/adminController')

const {
  isAuthenticated,
  authorizeFaculty,
  authorizeAdmin
} = require('../middlewares/auth')
const router = express.Router()

// MATERIAL ROUTE
router.post(
  '/admin/material/addmaterial',
  isAuthenticated,
  authorizeFaculty,
  addMaterial
)
router.put(
  '/admin/material/updatematerial/:id',
  isAuthenticated,
  authorizeFaculty,
  updateMaterial
)
router.delete(
  '/admin/material/deletematerial/:id',
  isAuthenticated,
  authorizeFaculty,
  deleteMaterial
)

// MARKS
router.post('/faculty/marks/add', addStudentMarks)

// NOTICE
router.get('/faculty/notice', getAllNotice)
router.get('/faculty/notice/:id', getNotice)

// TIMETABLE
router.post('/admin/timetable/add', addTimetable)
router.delete('/admin/timetable/delete/:id', deleteTimetable)

module.exports = router
