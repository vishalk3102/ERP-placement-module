import { configureStore } from '@reduxjs/toolkit'
import { adminReducer, adminDetailsReducer } from './Reducers/adminReducer'
import {
  facultyReducer,
  facultyDetailsReducer
} from './Reducers/facultyReducer'
import {
  branchReducer,
  marksReducer,
  materialsReducer,
  noticeReducer,
  subjectReducer,
  timetableReducer
} from './Reducers/otherReducer'

const store = configureStore({
  reducer: {
    admin: adminReducer,
    adminDetail: adminDetailsReducer,
    faculty: facultyReducer,
    facultyDetail: facultyDetailsReducer,
    branch: branchReducer,
    marks: marksReducer,
    materials: materialsReducer,
    notice: noticeReducer,
    subject: subjectReducer,
    timetable: timetableReducer
  }
})

export default store

export const server = 'https://erp-b911.onrender.com/api'
