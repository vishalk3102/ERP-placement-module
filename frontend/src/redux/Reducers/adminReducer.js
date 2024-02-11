import { createReducer } from '@reduxjs/toolkit'

export const adminReducer = createReducer(
  {},
  {
    registerAdminRequest: state => {
      state.loading = true
    },
    registerAdminSuccess: (state, action) => {
      state.loading = false
      state.message = 'Registered Successfull'
    },
    registerAdminFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    loginAdminRequest: state => {
      state.loading = true
    },
    loginAdminSuccess: (state, action) => {
      state.loading = false
      state.message = 'login  Successfull'
    },
    loginAdminFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    updateAdminRequest: state => {
      state.loading = true
    },
    updateAdminSuccess: (state, action) => {
      state.loading = false
      state.message = 'update  Successfull'
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
      state.message = 'delete Successfull'
    },
    deleteAdminFail: (state, action) => {
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
      state.message = 'update  Successfull'
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
      state.message = 'delete Successfull'
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
