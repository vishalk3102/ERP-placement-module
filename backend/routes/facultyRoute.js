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
