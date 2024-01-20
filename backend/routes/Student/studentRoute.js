const express = require('express')
const {
  loginStudent,
  registerStudent,
  updateStudent,
  deleteStudent,
  getDetails,
  addDetails,
  updateDetails,
  deleteDetails,
  count
} = require('../../controllers/studentController')

const router = express.Router()

// ---------------->STUDENT CREDENTIALS<--------------------
router.post('/student/auth/login', loginStudent)
router.post('/student/auth/register', registerStudent)
router.post('/student/auth/update/:id', updateStudent)
router.delete('/student/auth/delete/:id', deleteStudent)

// ---------------->STUDENT DETAILS<--------------------
router.get('/student/details/getdetails', getDetails)
router.post('/student/details/adddetails', addDetails)
router.post('/student/details/updatedetails/:id', updateDetails)
router.delete('/student/details/deletedetails/:id', deleteDetails)
router.get('/student/details/count', count)

module.exports = router
