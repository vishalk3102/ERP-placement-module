const express = require('express')
const {
  registerAdmin,
  loginAdmin,
  updateAdmin,
  deleteAdmin,
  getDetails,
  addDetails,
  updateDetails,
  deleteDetails,
  count
} = require('../../controllers/adminController')
// const { isAuthenticated, authorizeAdmin } = require('../middlewares/auth')

const router = express.Router()

// ---------------->ADMIN CREDENTIALS<--------------------
router.post('/admin/auth/login', loginAdmin)
router.post('/admin/auth/register', registerAdmin)
router.post('/admin/auth/update/:id', updateAdmin)
router.delete('/admin/auth/delete/:id', deleteAdmin)

// ---------------->ADMIN DETAILS<--------------------
router.get('/admin/details/getdetails', getDetails)
router.post('/admin/details/adddetails', addDetails)
router.post('/admin/details/updatedetails/:id', updateDetails)
router.delete('/admin/details/deletedetails/:id', deleteDetails)

module.exports = router
