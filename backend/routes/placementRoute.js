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
} = require('../controllers/placementController')
const { isAuthenticated, authorizeAdmin } = require('../middlewares/auth')
const router = express.Router()

// STUDENT
router.post('/placement/register', isAuthenticated, registerPlacementProfile)
router.get('/admin/placement/student/:id', isAuthenticated, getStudent)
router
  .route('/admin/placement/students')
  .get(isAuthenticated, authorizeAdmin, getAllStudent)
  .put(isAuthenticated, authorizeAdmin, updateStudent)
  .delete(isAuthenticated, authorizeAdmin, deleteStudent)

// COMPANY
router.get(
  '/admin/placement/company',
  isAuthenticated,
  authorizeAdmin,
  getAllCompanies
)

router.post(
  '/admin/placement/company/register',
  isAuthenticated,
  authorizeAdmin,
  registerCompanyProfile
)
router
  .route('/admin/placement/company/:id')
  .get(isAuthenticated, authorizeAdmin, getCompany)
  .put(isAuthenticated, authorizeAdmin, updateCompany)
  .delete(isAuthenticated, authorizeAdmin, deleteCompany)

// JOB POSTING
router.post(
  '/admin/placement/jobs/newjob',
  isAuthenticated,
  authorizeAdmin,
  createJobPosting
)

router.get(
  '/admin/placement/jobs',
  isAuthenticated,
  authorizeAdmin,
  getAllJobPostings
)

router
  .route('/admin/placement/jobs/:id')
  .get(isAuthenticated, authorizeAdmin, getJobPosting)
  .put(isAuthenticated, authorizeAdmin, updateJobPosting)
  .delete(isAuthenticated, authorizeAdmin, deleteJobPosting)

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
