const express = require('express')
const {
  updateStudent,
  deleteStudent,
  registerStudent,
  getStudent,
  getAllStudent
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

module.exports = router
