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
import {
  studentPlacementReducer,
  AdminPlacementReducer,
  jobPostingReducer,
  CompanyReducer
} from './Reducers/placementReducer'
import { authReducer } from './Reducers/authReducer'

const store = configureStore({
  reducer: {
    auth: authReducer,
    admin: adminReducer,
    adminDetail: adminDetailsReducer,
    faculty: facultyReducer,
    facultyDetail: facultyDetailsReducer,
    branch: branchReducer,
    marks: marksReducer,
    materials: materialsReducer,
    notice: noticeReducer,
    subject: subjectReducer,
    timetable: timetableReducer,
    studentPlacement: studentPlacementReducer,
    adminPlacement: AdminPlacementReducer,
    jobs: jobPostingReducer,
    company: CompanyReducer
  }
})

export default store

export const server = 'https://erp-placement-module.onrender.com/api/v1'
