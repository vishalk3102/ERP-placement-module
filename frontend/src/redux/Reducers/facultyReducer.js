import { createReducer } from '@reduxjs/toolkit'

export const facultyReducer = createReducer(
  {},
  {
    // STUDENT INFO
    getStudentRequest: state => {
      state.loading = true
    },
    getStudentSuccess: (state, action) => {
      state.loading = false
      state.student = action.payload.student
    },
    getStudentFail: (state, action) => {
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
    addMarksRequest: state => {
      state.loading = true
    },
    addMarksSuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
    },
    addMarksFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    deleteMarksRequest: state => {
      state.loading = true
    },
    deleteMarksSuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
    },
    deleteMarksFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },

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
    addTimetabletRequest: state => {
      state.loading = true
    },
    addTimetableSuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
    },
    addTimetabletFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    deleteTimetabletRequest: state => {
      state.loading = true
    },
    deleteTimetabletSuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
    },
    deleteTimetabletFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },

    // MATERIALS
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
    addMaterialsRequest: state => {
      state.loading = true
    },
    addMaterialsSuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
    },
    addMaterialsFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    updateMaterialsSuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
    },
    updateMaterialsFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    updateMaterialsRequest: state => {
      state.loading = true
    },
    deleteMaterialsRequest: state => {
      state.loading = true
    },
    deleteMaterialsSuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
    },
    deleteMaterialsFail: (state, action) => {
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
