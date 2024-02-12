import { createReducer } from '@reduxjs/toolkit'

export const facultyReducer = createReducer(
  {},
  {
    registerFacultyRequest: state => {
      state.loading = true
    },
    registerFacultySuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
    },
    registerFacultyFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    loginFacultyRequest: state => {
      state.loading = true
    },
    loginFacultySuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
    },
    loginFacultyFail: (state, action) => {
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

export const facultyDetailsReducer = createReducer(
  {},
  {
    getDetailsFacultyRequest: state => {
      state.loading = true
    },
    getDetailsFacultySuccess: (state, action) => {
      state.loading = false
      state.user = action.payload
    },
    getDetailsFacultyFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    addDetailsFacultyRequest: state => {
      state.loading = true
    },
    addDetailsFacultySuccess: (state, action) => {
      state.loading = false
      state.user = action.payload
    },
    addDetailsFacultyFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    updateDetailsFacultyRequest: state => {
      state.loading = true
    },
    updateDetailsFacultySuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
    },
    updateDetailsFacultyFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    deleteDetailsFacultyRequest: state => {
      state.loading = true
    },
    deleteDetailsFacultySuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
    },
    deleteDetailsFacultyFail: (state, action) => {
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
