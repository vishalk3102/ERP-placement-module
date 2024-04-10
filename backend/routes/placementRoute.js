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
router.get('/admin/placement/companies', getAllCompanies)
router.post('/admin/placement/company/add', registerCompanyProfile)
router.get('/admin/placement/company/:id', getCompany)
router.put('/admin/placement/company/:id', updateCompany)
router.delete('/admin/placement/company/:id', deleteCompany)

// --> JOB POSTING
router.get('/admin/placement/jobpostings', getAllJobPostings)
router.post('/admin/placement/jobposting/create', createJobPosting)
router.get('/admin/placement/jobposting/:id', getJobPosting)
router.put('/admin/placement/jobposting/:id', updateJobPosting)
router.delete('/admin/placement/jobposting/:id', deleteJobPosting)

//--> Application
router.get(
  '/admin/placement/application/company/companywise',
  getApplicationsByCompany
)

// STUDENT
router.post('/student/placement/register', registerPlacementProfile)
router.get('/student/placement/me', getPlacementProfile)
router.get('/student/placement/companies', getAllCompanies)
router.get('/student/placement/eligiblejobs', getEligibleJobPostings)
router.get('/student/placement/application', getAllAppliedApplications)

// router.post('/placement/jobs/apply', isAuthenticated, applyForJob)
// router.get('/placement/application/:id', isAuthenticated, getAppliedApplication)

module.exports = router
