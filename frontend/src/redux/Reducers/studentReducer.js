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
      state.timetable = action.payload.timetable
    },
    getTimetabletFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },

    // MARKS
    getMarksByEnrollmentNoRequest: state => {
      state.loading = true
    },
    getMarksByEnrollmentNoSuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
      state.marks = action.payload.marks
    },
    getMarksByEnrollmentNoFail: (state, action) => {
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
      state.materials = action.payload.materials
    },
    getMaterialsFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },

    // NOTICE
    getAllNoticeRequest: state => {
      state.loading = true
    },
    getAllNoticeSuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
      state.notices = action.payload.notices
    },
    getAllNoticeFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },

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
