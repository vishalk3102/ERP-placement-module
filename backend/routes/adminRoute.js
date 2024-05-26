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
  addNotice,
  getAllFaculty,
  registerFaculty,
  getFaculty,
  updateFaculty,
  deleteFaculty,
  getAllStudent,
  registerStudent,
  getStudent,
  updateStudent,
  deleteStudent
} = require('../controllers/adminController')
const { getNotice } = require('../controllers/studentController')

const { isAuthenticated, authorizeAdmin } = require('../middlewares/auth')
const singleUpload = require('../middlewares/multer')
const router = express.Router()

// BRANCH
router.get('/admin/branch', getAllBranch)
router.post('/admin/branch/add', addBranch)
router.delete('/admin/branch/:id', deleteBranch)

// NOTICE
router.get('/admin/notice', getAllNotice)
router.post('/admin/notice/add', addNotice)
router.get('/admin/notice/:id', getNotice)
router.put('/admin/notice/:id', updateNotice)
router.delete('/admin/notice/:id', deleteNotice)

// SUBJECT
router.delete('/admin/subject/:id', deleteSubject)
router.get('/admin/subject', getAllSubject)
router.post('/admin/subject/add', addSubject)

// ADMIN
router.post('/admin/register', registerAdmin)
router.get('/admin', getAllAdmin)
router.get('/admin/:id', getAdmin)
router.put('/admin/:id', updateAdmin)
router.delete('/admin/:id', deleteAdmin)

// STUDENT
router.get('/admin/student', getAllStudent)
router.post('/admin/student/register', registerStudent)
router.get('/admin/student/:enrollmentNo', getStudent)
router.put('/admin/student/:id', updateStudent)
router.delete('/admin/student/:id', deleteStudent)

// FACULTY
router.get('/admin/faculty', getAllFaculty)
router.post('/admin/faculty/register', registerFaculty)
router.get('/admin/faculty/:id', getFaculty)
router.put('/admin/faculty/:id', updateFaculty)
router.delete('/admin/faculty/:id', deleteFaculty)

module.exports = router
