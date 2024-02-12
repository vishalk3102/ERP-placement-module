import { createReducer } from '@reduxjs/toolkit'

export const studentReducer = createReducer(
  {},
  {
    registerStudentRequest: state => {
      state.loading = true
    },
    registerStudentSuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
    },
    registerStudentFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    loginStudentRequest: state => {
      state.loading = true
    },
    loginStudentSuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
    },
    loginStudentFail: (state, action) => {
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
    clearError: state => {
      state.error = null
    },
    clearMessage: state => {
      state.message = null
    }
  }
)

export const StudentDetailsReducer = createReducer(
  {},
  {
    getDetailsStudentRequest: state => {
      state.loading = true
    },
    getDetailsStudentSuccess: (state, action) => {
      state.loading = false
      state.user = action.payload
    },
    getDetailsStudentFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    addDetailsStudentRequest: state => {
      state.loading = true
    },
    addDetailsStudentSuccess: (state, action) => {
      state.loading = false
      state.user = action.payload
    },
    addDetailsStudentFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    updateDetailsStudentRequest: state => {
      state.loading = true
    },
    updateDetailsStudentSuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
    },
    updateDetailsStudentFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    deleteDetailsStudentRequest: state => {
      state.loading = true
    },
    deleteDetailsStudentSuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
    },
    deleteDetailsStudentFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    getcountRequest: state => {
      state.loading = true
    },
    getcountSuccess: (state, action) => {
      state.loading = false
      state.user = action.payload
    },
    getcountFail: (state, action) => {
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
