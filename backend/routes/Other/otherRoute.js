const express = require('express')
const {
  getBranch,
  addBranch,
  deleteBranch
} = require('../../controllers/branchController')
const {
  getMarks,
  addMarks,
  deleteMarks
} = require('../../controllers/marksController')
const {
  getMaterial,
  addMaterial,
  updateMaterial,
  deleteMaterial
} = require('../../controllers/materialsController')
const {
  getNotice,
  addNotice,
  updateNotice,
  deleteNotice
} = require('../../controllers/noticeController')
const {
  getSubject,
  addSubject,
  deleteSubject
} = require('../../controllers/subjectController')
const {
  getTimetable,
  addTimetable,
  deleteTimetable
} = require('../../controllers/timetableController')

const router = express.Router()

// ---------------->BRANCH<--------------------
router.get('/branch/getbranch', getBranch)
router.post('/branch/addbranch', addBranch)
router.delete('/branch/deletebranch/:id', deleteBranch)

// ---------------->MARKS<--------------------
router.get('/marks/getmarks', getMarks)
router.post('/marks/addmarks', addMarks)
router.delete('/marks/deletemarks/:id', deleteMarks)

// ---------------->MATERIALS<--------------------
router.get('/material/getmaterial', getMaterial)
router.post('/material/addmaterial', addMaterial)
router.post('/material/addmaterial', updateMaterial)
router.delete('/material/deletematerial/:id', deleteMaterial)

// ---------------->NOTICE<--------------------
router.get('/notice/getnotice', getNotice)
router.post('/notice/addnotice', addNotice)
router.post('/notice/updatenotice', updateNotice)
router.delete('/notice/deletenotice/:id', deleteNotice)

// ---------------->SUBJECT<--------------------
router.get('/subject/getsubject', getSubject)
router.post('/subject/addsubject', addSubject)
router.delete('/subject/deletesubject/:id', deleteSubject)

// ---------------->TIMETABLE<--------------------
router.get('/timetable/gettimetable', getTimetable)
router.post('/timetable/addtimetable', addTimetable)
router.delete('/timetable/deletetimetable/:id', deleteTimetable)

module.exports = router
