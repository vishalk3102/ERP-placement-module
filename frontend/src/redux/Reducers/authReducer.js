import { createReducer } from '@reduxjs/toolkit'

export const authReducer = createReducer(
  { user: {} },
  {
    loginRequest: state => {
      state.loading = true
    },
    loginSuccess: (state, action) => {
      state.loading = false
      state.isAuthenticated = true
      state.user = action.payload.user
    },
    loginFail: (state, action) => {
      state.loading = false
      state.isAuthenticated = false
      state.error = action.payload
    },
    logoutRequest: state => {
      state.loading = true
    },
    logoutSuccess: (state, action) => {
      state.loading = false
      state.message = action.payload
      state.isAuthenticated = false
      state.user = null
    },
    logoutFail: (state, action) => {
      state.loading = false
      state.isAuthenticated = true
      state.error = action.payload
    },
    updatePasswordRequest: state => {
      state.loading = true
    },
    updatePasswordSuccess: (state, action) => {
      state.loading = false
      state.isAuthenticated = true
      state.user = action.payload.user
    },
    updatePasswordFail: (state, action) => {
      state.loading = false
    },
    clearError: state => {
      state.error = null
    },
    clearMessage: state => {
      state.message = null
    }
  }
)
