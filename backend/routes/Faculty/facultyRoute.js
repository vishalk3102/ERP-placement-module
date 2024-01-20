const express = require('express')
const {
  registerFaculty,
  loginFaculty,
  updateFaculty,
  deleteFaculty,
  getDetails,
  addDetails,
  updateDetails,
  deleteDetails,
  count
} = require('../../controllers/facultyController')
// const { isAuthenticated, authorizeAdmin } = require('../middlewares/auth')

const router = express.Router()

// ---------------->FACULTY CREDENTIALS<--------------------
router.post('/faculty/auth/login', loginFaculty)
router.post('/faculty/auth/register', registerFaculty)
router.post('/faculty/auth/update/:id', updateFaculty)
router.delete('/faculty/auth/delete/:id', deleteFaculty)

// ---------------->FACULTY DETAILS<--------------------
router.get('/faculty/details/getdetails', getDetails)
router.post('/faculty/details/adddetails', addDetails)
router.post('/faculty/details/updatedetails/:id', updateDetails)
router.delete('/faculty/details/deletedetails/:id', deleteDetails)
router.get('/faculty/details/count', count)

module.exports = router
