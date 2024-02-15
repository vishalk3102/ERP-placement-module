const express = require('express')
const {
  getMarks,
  addMarks,
  deleteMarks
} = require('../controllers/marksController')
const {
  isAuthenticated,
  authorizeAdmin,
  authorizeFaculty
} = require('../middlewares/auth')

const router = express.Router()

// ---------------->Marks<--------------------
router.get('/marks/getmarks', isAuthenticated, getMarks)
router.post(
  '/faculty/marks/addmarks',
  isAuthenticated,
  authorizeFaculty,
  addMarks
)
router.delete(
  '/faculty/marks/deletemarks/:id',
  isAuthenticated,
  authorizeAdmin,
  deleteMarks
)

router.get('')
