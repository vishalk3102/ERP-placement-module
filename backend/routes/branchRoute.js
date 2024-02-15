const express = require('express')
const {
  getBranch,
  addBranch,
  deleteBranch
} = require('../controllers/branchController')
const { isAuthenticated, authorizeAdmin } = require('../middlewares/auth')

const router = express.Router()

// ---------------->BRANCH<--------------------
router.get('/branch/getbranch', isAuthenticated, getBranch)
router.post(
  '/admin/branch/addbranch',
  isAuthenticated,
  authorizeAdmin,
  addBranch
)
router.delete(
  '/admin/branch/deletebranch/:id',
  isAuthenticated,
  authorizeAdmin,
  deleteBranch
)

router.get('')
