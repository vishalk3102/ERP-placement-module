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
  getPlacementProfile,
  GetAllCompanyApplication
} = require('../controllers/placementController')
const { isAuthenticated, authorizeAdmin } = require('../middlewares/auth')
const router = express.Router()

// ADMIN PLACEMENT ROUTES
// --> STUDENT
router.get('/admin/placement/students', getAllStudent)
router.get('/admin/placement/student/view/:id', getStudent)
router.put('/admin/placement/student/:id', updateStudent)
router.delete('/admin/placement/student/:id', deleteStudent)

// --> COMPANY
router.get('/admin/placement/companies', getAllCompanies)
router.post('/admin/placement/company/add', registerCompanyProfile)
router.get('/admin/placement/company/view/:id', getCompany)
router.put('/admin/placement/company/:id', updateCompany)
router.delete('/admin/placement/company/:id', deleteCompany)

// --> JOB POSTING
router.get('/admin/placement/jobpostings', getAllJobPostings)
router.post('/admin/placement/jobposting/create', createJobPosting)
router.get('/admin/placement/jobposting/view/:id', getJobPosting)
router.put('/admin/placement/jobposting/:id', updateJobPosting)
router.delete('/admin/placement/jobposting/:id', deleteJobPosting)

//--> Application
router.get(
  '/admin/placement/application/company/companywise',
  getApplicationsByCompany
)

// STUDENT
router.post('/student/placement/register', registerPlacementProfile)
router.get('/student/placement/profile/:id', getPlacementProfile)
router.get('/student/placement/companies', getAllCompanies)
router.get('/student/placement/company/view/:id', getCompany)
router.get('/student/placement/eligiblejobs', getEligibleJobPostings)
router.get('/student/placement/eligiblejob/view/:id', getJobPosting)
router.get('/student/placement/application', getAllAppliedApplications)

router.post('/student/placement/eligiblejob/apply/:id', applyForJob)
router.get('/admin/placement/application', GetAllCompanyApplication)
router.get('/admin/placement/application/:id', getApplicationsByCompany)

module.exports = router
