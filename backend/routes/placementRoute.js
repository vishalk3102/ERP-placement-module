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
  registerPlacementProfile,
  createJobPosting,
  getJobPosting,
  getAllJobPostings,
  updateJobPosting,
  deleteJobPosting,
  applyForJob,
  getEligibleJobPostings,
  getAllAppliedApplications,
  getApplicationsByCompany,
  getAppliedApplication,
  getPlacementProfile
} = require('../controllers/placementController')
const { isAuthenticated, authorizeAdmin } = require('../middlewares/auth')
const router = express.Router()

// ADMIN PLACEMENT ROUTES
// --> STUDENT
router.get('/admin/placement/students', isAuthenticated, getAllStudent)
router.get('/admin/placement/student/:id', isAuthenticated, getStudent)
router.put('/admin/placement/student/:id', isAuthenticated, updateStudent)
router.delete('/admin/placement/student/:id', isAuthenticated, deleteStudent)

// --> COMPANY
router.get(
  '/admin/placement/companies',
  // isAuthenticated,
  // authorizeAdmin,
  getAllCompanies
)
router.post(
  '/admin/placement/company/add',
  isAuthenticated,
  authorizeAdmin,
  registerCompanyProfile
)
router.get(
  '/admin/placement/company/:id',
  isAuthenticated,
  authorizeAdmin,
  getCompany
)
router.put(
  '/admin/placement/company/:id',
  isAuthenticated,
  authorizeAdmin,
  updateCompany
)
router.delete(
  '/admin/placement/company/:id',
  isAuthenticated,
  authorizeAdmin,
  deleteCompany
)

// --> JOB POSTING
router.get(
  '/admin/placement/jobpostings',
  isAuthenticated,
  authorizeAdmin,
  getAllJobPostings
)
router.post(
  '/admin/placement/jobposting/create',
  isAuthenticated,
  authorizeAdmin,
  createJobPosting
)
router.get(
  '/admin/placement/jobposting/:id',
  isAuthenticated,
  authorizeAdmin,
  getJobPosting
)
router.put(
  '/admin/placement/jobposting/:id',
  isAuthenticated,
  authorizeAdmin,
  updateJobPosting
)
router.delete(
  '/admin/placement/jobposting/:id',
  isAuthenticated,
  authorizeAdmin,
  deleteJobPosting
)

//--> Application
router.get(
  '/admin/placement/application/company/companywise',
  isAuthenticated,
  authorizeAdmin,
  getApplicationsByCompany
)

// STUDENT
router.post(
  '/student/placement/register',
  isAuthenticated,
  registerPlacementProfile
)
router.get('/student/placement/me', isAuthenticated, getPlacementProfile)
router.get(
  '/student/placement/companies',
  isAuthenticated,
  authorizeAdmin,
  getAllCompanies
)
router.get(
  '/student/placement/eligiblejobs',
  isAuthenticated,
  getEligibleJobPostings
)
router.get(
  '/student/placement/application',
  isAuthenticated,
  getAllAppliedApplications
)

// router.post('/placement/jobs/apply', isAuthenticated, applyForJob)
// router.get('/placement/application/:id', isAuthenticated, getAppliedApplication)

module.exports = router
