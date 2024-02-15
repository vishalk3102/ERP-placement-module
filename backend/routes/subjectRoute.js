const express = require('express')
const {
  getSubject,
  addSubject,
  deleteSubject
} = require('../controllers/subjectController')
const { isAuthenticated, authorizeAdmin } = require('../middlewares/auth')

const router = express.Router()

// ---------------->Subject<--------------------
router.get('/subject/getsubject', isAuthenticated, getSubject)
router.post(
  '/admin/subject/addsubject',
  isAuthenticated,
  authorizeAdmin,
  addSubject
)
router.delete(
  '/admin/subject/deletesubject/:id',
  isAuthenticated,
  authorizeAdmin,
  deleteSubject
)

module.exports = router
