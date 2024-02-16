const express = require('express')
const {
  updateAdmin,
  deleteAdmin,
  registerAdmin,
  getAdmin,
  getAllAdmin
} = require('../controllers/adminController')

const { isAuthenticated, authorizeAdmin } = require('../middlewares/auth')
const router = express.Router()

// ADMIN ROUTE
router.get('/admin', isAuthenticated, authorizeAdmin, getAllAdmin)
router.get('/admin/:id', isAuthenticated, authorizeAdmin, getAdmin)
router.post('/admin/register', isAuthenticated, authorizeAdmin, registerAdmin)
router.put('/admin/update/:id', isAuthenticated, authorizeAdmin, updateAdmin)
router.delete('/admin/delete/:id', isAuthenticated, authorizeAdmin, deleteAdmin)

module.exports = router
