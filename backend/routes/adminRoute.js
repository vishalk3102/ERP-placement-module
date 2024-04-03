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
router.get('/admin', isAuthenticated, authorizeAdmin, getAllAdmin)
router.get('/admin/:id', isAuthenticated, authorizeAdmin, getAdmin)
router.post('/admin/register', isAuthenticated, authorizeAdmin, registerAdmin)
router.put('/admin/update/:id', isAuthenticated, authorizeAdmin, updateAdmin)
router.delete('/admin/delete/:id', isAuthenticated, authorizeAdmin, deleteAdmin)

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
