const express = require('express')
const {
  updateAdmin,
  deleteAdmin,
  registerAdmin,
  getAdmin,
  getAllAdmin,
  addSubject,
  deleteSubject,
  addTimetable,
  deleteTimetable,
  addBranch,
  deleteBranch,
  getAllBranch,
  getAllSubject,
  getAllNotice,
  deleteNotice,
  updateNotice,
  addNotice
} = require('../controllers/adminController')

const { isAuthenticated, authorizeAdmin } = require('../middlewares/auth')
const {
  getAllFaculty,
  registerFaculty,
  getFaculty,
  updateFaculty,
  deleteFaculty
} = require('../controllers/facultyController')
const {
  getAllStudent,
  registerStudent,
  getStudent,
  updateStudent,
  deleteStudent
} = require('../controllers/studentController')
const router = express.Router()

// BRANCH
router.get('/admin/branch', getAllBranch)
router.post('/admin/branch/add', addBranch)
router.delete('/admin/branch/:id', deleteBranch)

// NOTICE
router.get('/admin/branch', getAllNotice)
router.post('/admin/branch/add', addNotice)
router.put('/admin/branch/:id', updateNotice)
router.delete('/admin/branch/:id', deleteNotice)

// SUBJECT
router.get('/admin/subject', getAllSubject)
router.post('/admin/subject/add', addSubject)
router.delete('/admin/subject/:id', deleteSubject)

// TIMETABLE
router.post(
  '/admin/timetable/add',
  isAuthenticated,
  authorizeAdmin,
  addTimetable
)
router.delete(
  '/admin/timetable/delete/:id',
  isAuthenticated,
  authorizeAdmin,
  deleteTimetable
)

// STUDENT
router.get('/admin/student', getAllStudent)
router.post('/admin/student/register', registerStudent)
router.get('/admin/student/:id', getStudent)
router.put('/admin/student/:id', updateStudent)
router.delete('/admin/student/:id', deleteStudent)

// FACULTY
router.get('/admin/faculty', getAllFaculty)
router.post('/admin/faculty/register', registerFaculty)
router.get('/admin/faculty/:id', getFaculty)
router.put('/admin/faculty/:id', updateFaculty)
router.delete('/admin/faculty/:id', deleteFaculty)

// ADMIN
router.post('/admin/register', registerAdmin)
router.get('/admin', getAllAdmin)
router.get('/admin/:id', getStudent)
router.put('/admin/:id', updateAdmin)
router.delete('/admin/:id', deleteAdmin)
module.exports = router
