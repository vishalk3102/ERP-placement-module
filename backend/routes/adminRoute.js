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
  deleteBranch
} = require('../controllers/adminController')

const { isAuthenticated, authorizeAdmin } = require('../middlewares/auth')
const router = express.Router()

// ADMIN
router.post('/admin/register', registerAdmin)
router.get('/admin', getAllAdmin)
router.get('/admin/:id', getStudent)
router.put('/admin/:id', updateAdmin)
router.delete('/admin/:id', deleteAdmin)

// BRANCH
router.post('/admin/branch/add', isAuthenticated, authorizeAdmin, addBranch)
router.delete(
  '/admin/branch/delete/:id',
  isAuthenticated,
  authorizeAdmin,
  deleteBranch
)

// SUBJECT
router.post('/admin/subject/add', isAuthenticated, authorizeAdmin, addSubject)
router.delete(
  '/admin/subject/delete/:id',
  isAuthenticated,
  authorizeAdmin,
  deleteSubject
)

// TIMETABLE
router.post(
  '/admin/timetable/add',
  isAuthenticated,
  authorizeAdmin,
  addTimetable
)
router.delete(
  '/admin/timetable/delete/:id',
  isAuthenticated,
  authorizeAdmin,
  deleteTimetable
)
module.exports = router
