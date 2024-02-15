const express = require('express')
const {
  getNotice,
  addNotice,
  deleteNotice,
  updateNotice
} = require('../controllers/noticeController')
const { isAuthenticated, authorizeAdmin } = require('../middlewares/auth')

const router = express.Router()

// ---------------->Notice<--------------------
router.get('/notice/getnotice', isAuthenticated, getNotice)
router.post(
  '/admin/notice/addnotice',
  isAuthenticated,
  authorizeAdmin,
  addNotice
)
router.put(
  '/admin/notice/updatenotice/:id',
  isAuthenticated,
  authorizeAdmin,
  updateNotice
)
router.delete(
  '/admin/notice/deletenotice/:id',
  isAuthenticated,
  authorizeAdmin,
  deleteNotice
)

router.get('')
