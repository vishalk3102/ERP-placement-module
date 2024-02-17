const express = require('express')
const {
  updateFaculty,
  deleteFaculty,
  registerFaculty,
  getFaculty,
  getAllFaculty,
  addMaterial,
  updateMaterial,
  deleteMaterial,
  addMarks,
  deleteMarks
} = require('../controllers/facultyController')

const {
  isAuthenticated,
  authorizeFaculty,
  authorizeAdmin
} = require('../middlewares/auth')
const router = express.Router()

// FACULTY ROUTE
router.get('/admin/faculty', isAuthenticated, authorizeAdmin, getAllFaculty)
router.get('/admin/faculty/:id', isAuthenticated, authorizeAdmin, getFaculty)

router.post(
  '/admin/faculty/register',
  isAuthenticated,
  authorizeAdmin,
  registerFaculty
)
router.put(
  '/admin/faculty/update/:id',
  isAuthenticated,
  authorizeAdmin,
  updateFaculty
)
router.delete(
  '/admin/faculty/delete/:id',
  isAuthenticated,
  authorizeAdmin,
  deleteFaculty
)

// MATERIAL ROUTE
router.post(
  '/admin/material/addmaterial',
  isAuthenticated,
  authorizeFaculty,
  addMaterial
)
router.put(
  '/admin/material/updatematerial/:id',
  isAuthenticated,
  authorizeFaculty,
  updateMaterial
)
router.delete(
  '/admin/material/deletematerial/:id',
  isAuthenticated,
  authorizeFaculty,
  deleteMaterial
)

// MARKS
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

module.exports = router
