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
  getAppliedApplication
} = require('../controllers/placementcontroller')
const { isAuthenticated, authorizeAdmin } = require('../middlewares/auth')
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
  '/admin/placement/student/:id',
  isAuthenticated,
  authorizeAdmin,
  updateStudent
)
router.delete(
  '/admin/placement/student/:id',
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

// JOB POSTING
router.post(
  '/admin/placement/jobs/newjob',
  isAuthenticated,
  authorizeAdmin,
  createJobPosting
)
router.get(
  '/admin/placement/jobs/:id',
  isAuthenticated,
  authorizeAdmin,
  getJobPosting
)
router.get(
  '/admin/placement/jobs',
  isAuthenticated,
  authorizeAdmin,
  getAllJobPostings
)
router.put(
  '/admin/placement/jobs/:id',
  isAuthenticated,
  authorizeAdmin,
  updateJobPosting
)
router.delete(
  '/admin/placement/jobs/:id',
  isAuthenticated,
  authorizeAdmin,
  deleteJobPosting
)

//JOB POST AND APPLICATION -- student
router.get('/placement/jobs', isAuthenticated, getEligibleJobPostings)
router.post('/placement/jobs/apply', isAuthenticated, applyForJob)
router.get(
  '/placement/applications',
  isAuthenticated,
  getAllAppliedApplications
)
router.get('/placement/application/:id', isAuthenticated, getAppliedApplication)
router.get(
  '/admin/placement/applications',
  isAuthenticated,
  authorizeAdmin,
  getApplicationsByCompany
)

module.exports = router
