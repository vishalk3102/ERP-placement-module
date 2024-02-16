const express = require('express')
const {
  updateFaculty,
  deleteFaculty,
  registerFaculty,
  getFaculty,
  getAllFaculty
} = require('../controllers/facultyController')

const { isAuthenticated, authorizeAdmin } = require('../middlewares/auth')
const router = express.Router()

// FACULTY ROUTE
router.get('/admin/faculty', isAuthenticated, authorizeAdmin, getAllFaculty)
router.get('/admin/faculty/:id', isAuthenticated, authorizeAdmin, getFaculty)

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
