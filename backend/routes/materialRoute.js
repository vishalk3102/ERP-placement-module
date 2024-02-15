const express = require('express')
const {
  getMaterial,
  addMaterial,
  updateMaterial,
  deleteMaterial
} = require('../controllers/materialsController')
const { isAuthenticated, authorizeFaculty } = require('../middlewares/auth')

const router = express.Router()

// ---------------->Material<--------------------
router.get('/material/getmaterial', isAuthenticated, getMaterial)
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

router.get('')
