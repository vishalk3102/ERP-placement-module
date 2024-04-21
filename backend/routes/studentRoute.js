const express = require('express')
const {
  updateStudent,
  deleteStudent,
  registerStudent,
  getStudent,
  getAllStudent,
  getBranch,
  getSubject,
  getMaterial,
  getTimetable,
  getMarks,
  getNotice
} = require('../controllers/studentController')

const { isAuthenticated, authorizeAdmin } = require('../middlewares/auth')
const { getAllNotice } = require('../controllers/adminController')
const router = express.Router()

// BRANCH
// router.get('/branch/getbranch', isAuthenticated, getBranch)

//SUBJECT
router.get('/subject/getsubject', isAuthenticated, getSubject)

// MATERIAL ROUTE
router.get('/material/getmaterial', isAuthenticated, getMaterial)

// TIMETABLE
router.get('/timetable/gettimetable', isAuthenticated, getTimetable)

// MARKS
router.get('/marks/getmarks', isAuthenticated, getMarks)

// NOTICE
router.get('/student/notice', getAllNotice)
router.get('/admin/notice/:id', getNotice)

module.exports = router
