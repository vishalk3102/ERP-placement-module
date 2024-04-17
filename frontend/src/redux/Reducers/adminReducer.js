import { createReducer } from '@reduxjs/toolkit'

export const adminReducer = createReducer(
  {},
  {
    getStudentRequest: state => {
      state.loading = true
    },
    getStudentSuccess: (state, action) => {
      state.loading = false
      state.student = action.payload.admin
    },
    getStudentFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    getAllStudentRequest: state => {
      state.loading = true
    },
    getAllStudentSuccess: (state, action) => {
      state.loading = false
      state.students = action.payload.admins
    },
    getAllStudentFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    addStudentRequest: state => {
      state.loading = true
    },
    addStudentSuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
    },
    addStudentFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    updateStudentRequest: state => {
      state.loading = true
    },
    updateStudentSuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
    },
    updateStudentFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    deleteStudentRequest: state => {
      state.loading = true
    },
    deleteStudentSuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
    },
    deleteStudentFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },

    getAdminRequest: state => {
      state.loading = true
    },
    getAdminSuccess: (state, action) => {
      state.loading = false
      state.admin = action.payload.admin
    },
    getAdminFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    getAllAdminRequest: state => {
      state.loading = true
    },
    getAllAdminSuccess: (state, action) => {
      state.loading = false
      state.admins = action.payload.admins
    },
    getAllAdminFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    addAdminRequest: state => {
      state.loading = true
    },
    addAdminSuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
    },
    addAdminFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    updateAdminRequest: state => {
      state.loading = true
    },
    updateAdminSuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
    },
    updateAdminFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    deleteAdminRequest: state => {
      state.loading = true
    },
    deleteAdminSuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
    },
    deleteAdminFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },

    getFacultyRequest: state => {
      state.loading = true
    },
    getFacultySuccess: (state, action) => {
      state.loading = false
      state.faculty = action.payload.faculty
    },
    getFacultyFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    getAllFacultyRequest: state => {
      state.loading = true
    },
    getAllFacultySuccess: (state, action) => {
      state.loading = false
      state.faculties = action.payload.faculties
    },
    getAllFacultyFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    addFacultyRequest: state => {
      state.loading = true
    },
    addFacultySuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
    },
    addFacultyFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    updateFacultyRequest: state => {
      state.loading = true
    },
    updateFacultySuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
    },
    updateFacultyFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    deleteFacultyRequest: state => {
      state.loading = true
    },
    deleteFacultySuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
    },
    deleteFacultyFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    clearError: state => {
      state.error = null
    },
    clearMessage: state => {
      state.message = null
    }
  }
)

export const adminDetailsReducer = createReducer(
  {},
  {
    getDetailsAdminRequest: state => {
      state.loading = true
    },
    getDetailsAdminSuccess: (state, action) => {
      state.loading = false
      state.user = action.payload
    },
    getDetailsAdminFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    addDetailsAdminRequest: state => {
      state.loading = true
    },
    addDetailsAdminSuccess: (state, action) => {
      state.loading = false
      state.user = action.payload
    },
    addDetailsAdminFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    updateDetailsAdminRequest: state => {
      state.loading = true
    },
    updateDetailsAdminSuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
    },
    updateDetailsAdminFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    deleteDetailsAdminRequest: state => {
      state.loading = true
    },
    deleteDetailsAdminSuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
    },
    deleteDetailsAdminFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    clearError: state => {
      state.error = null
    },
    clearMessage: state => {
      state.message = null
    }
  }
)
