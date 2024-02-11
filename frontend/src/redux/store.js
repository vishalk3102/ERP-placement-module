import { configureStore } from '@reduxjs/toolkit'
import { adminReducer, adminDetailsReducer } from './adminReducer'
import { facultyReducer, facultyDetailsReducer } from './facultyReducer'

const store = configureStore({
  reducer: {
    admin: adminReducer,
    adminDetail: adminDetailsReducer,
    faculty: facultyReducer,
    facultyDetail: facultyDetailsReducer
  }
})

export default store

export const server = 'https://erp-b911.onrender.com/api'
