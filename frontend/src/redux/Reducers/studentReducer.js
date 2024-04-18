import { createReducer } from '@reduxjs/toolkit'

export const studentReducer = createReducer(
  {},
  {
    // TIMETABLE
    getTimetabletRequest: state => {
      state.loading = true
    },
    getTimetabletSuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
      state.subjets = action.payload.subjets
    },
    getTimetabletFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },

    // MARKS
    getMarksRequest: state => {
      state.loading = true
    },
    getMarksSuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
      state.mark = action.payload.mark
    },
    getMarksFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },

    // MATERIAL
    getMaterialsRequest: state => {
      state.loading = true
    },
    getMaterialsSuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
      state.material = action.payload.materials
    },
    getMaterialsFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },

    // NOTICE
    getNoticeRequest: state => {
      state.loading = true
    },
    getNoticeSuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
      state.notice = action.payload.notice
    },
    getNoticeFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },

    // ERROR
    clearError: state => {
      state.error = null
    },
    clearMessage: state => {
      state.message = null
    }
  }
)
