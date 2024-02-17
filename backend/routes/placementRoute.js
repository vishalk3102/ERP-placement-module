const express = require('express')
const {
  updateCompany,
  deleteCompany,
  registerCompanyProfile,
  getAllCompanies,
  getCompany,
  getStudent,
  updateStudent,
  deleteStudent,
  getAllStudent,
  registerPlacementProfile
} = require('../controllers/placementController')

const { isAuthenticated, authorizeAdmin } = require('../middlewares/auth')
const { registerStudent } = require('../controllers/studentController')
const router = express.Router()

// STUDENT
router.post('/placement/register', isAuthenticated, registerPlacementProfile)
router.get('/admin/placement/student/:id', isAuthenticated, getStudent)
router.get(
  '/admin/placement/students',
  isAuthenticated,
  authorizeAdmin,
  getAllStudent
)
router.put(
  '/admin/placement/student/update/:id',
  isAuthenticated,
  authorizeAdmin,
  updateStudent
)
router.delete(
  '/admin/placement/student/delete/:id',
  isAuthenticated,
  authorizeAdmin,
  deleteStudent
)

// COMPANY
router.get(
  '/admin/placement/company',
  isAuthenticated,
  authorizeAdmin,
  getAllCompanies
)
router.get(
  '/admin/placement/company/:id',
  isAuthenticated,
  authorizeAdmin,
  getCompany
)
router.post(
  '/admin/placement/company/register',
  isAuthenticated,
  authorizeAdmin,
  registerCompanyProfile
)
router.put(
  '/admin/placement/company/update/:id',
  isAuthenticated,
  authorizeAdmin,
  updateCompany
)
router.delete(
  '/admin/placement/company/delete/:id',
  isAuthenticated,
  authorizeAdmin,
  deleteCompany
)

module.exports = router
