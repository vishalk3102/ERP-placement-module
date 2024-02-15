const express = require('express')
const {
  updateStudent,
  deleteStudent,
  updateFaculty,
  deleteFaculty,
  registerFaculty,
  registerStudent
} = require('../controllers/adminController')

const { isAuthenticated, authorizeAdmin } = require('../middlewares/auth')
const router = express.Router()

// STUDENT ROUTE
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

// FACULTY ROUTE
router.post(
  '/admin/faculty/register',
  isAuthenticated,
  authorizeAdmin,
  registerFaculty
)
router.put(
  '/admin/faculty/update/:id',
  isAuthenticated,
  authorizeAdmin,
  updateFaculty
)
router.delete(
  '/admin/faculty/delete/:id',
  isAuthenticated,
  authorizeAdmin,
  deleteFaculty
)

module.exports = router
