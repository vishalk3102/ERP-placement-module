const express = require('express')
const {
  login,
  logout,
  getMyProfile,
  updateMyProfile,
  updateMyPassword
} = require('../controllers/userController')
const { isAuthenticated } = require('../middlewares/auth')
const { registerAdmin } = require('../controllers/adminController')

const router = express.Router()

router.post('/register', registerAdmin)
router.post('/login', login)
router.get('/logout', logout)
// router.get('/me', isAuthenticated, getMyProfile)
// router.put('/me/update', isAuthenticated, updateMyProfile)
router.route('/password/update').put(updateMyPassword)
module.exports = router
