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
  getMarks
} = require('../controllers/studentController')

const { isAuthenticated, authorizeAdmin } = require('../middlewares/auth')
const router = express.Router()

// STUDENT ROUTE
router.get('/admin/student', isAuthenticated, authorizeAdmin, getAllStudent)
router.get('/admin/student/:id', isAuthenticated, authorizeAdmin, getStudent)
router.post(
  '/admin/student/register',
  isAuthenticated,
  authorizeAdmin,
  registerStudent
)
router.put(
  '/admin/student/update/:id',
  isAuthenticated,
  authorizeAdmin,
  updateStudent
)
router.delete(
  '/admin/student/delete/:id',
  isAuthenticated,
  authorizeAdmin,
  deleteStudent
)

// BRANCH
router.get('/branch/getbranch', isAuthenticated, getBranch)

//SUBJECT
router.get('/subject/getsubject', isAuthenticated, getSubject)

// MATERIAL ROUTE
router.get('/material/getmaterial', isAuthenticated, getMaterial)

// TIMETABLE
router.get('/timetable/gettimetable', isAuthenticated, getTimetable)

// MARKS
router.get('/marks/getmarks', isAuthenticated, getMarks)

module.exports = router
