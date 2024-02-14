const express = require('express')
const {
  login,
  logout,
  getMyProfile,
  updateMyProfile
} = require('../controllers/userController')
const {
  isAuthenticated,
  authorizeStudent,
  authorizeFaculty,
  authorizeAdmin
} = require('../middlewares/auth')
const { registerAdmin } = require('../controllers/adminController')

const router = express.Router()

// // ---------------->ADMIN CREDENTIALS<--------------------
// router.post('/admin/auth/login', loginAdmin)
// router.post('/admin/auth/register', registerAdmin)
// router.post('/admin/auth/update/:id', updateAdmin)
// router.delete('/admin/auth/delete/:id', deleteAdmin)

// // ---------------->ADMIN DETAILS<--------------------
// router.get('/admin/details/getdetails', getDetails)
// router.post('/admin/details/adddetails', addDetails)
// router.post('/admin/details/updatedetails/:id', updateDetails)
// router.delete('/admin/details/deletedetails/:id', deleteDetails)

router.post('/register', registerAdmin)
router.post('/login', login)
router.get('/logout', logout)
router.get('/me', isAuthenticated, getMyProfile)
router.put('/me/update', isAuthenticated, updateMyProfile)
module.exports = router
