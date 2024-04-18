import { createReducer } from '@reduxjs/toolkit'

// BRANCH REDUCER
export const branchReducer = createReducer(
  {},
  {
    clearError: state => {
      state.error = null
    },
    clearMessage: state => {
      state.message = null
    }
  }
)

// MARKS REDUCER
export const marksReducer = createReducer(
  {},
  {
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
    clearError: state => {
      state.error = null
    },
    clearMessage: state => {
      state.message = null
    }
  }
)

// MATERIALS REDUCER
export const materialsReducer = createReducer(
  {},
  {
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
    clearError: state => {
      state.error = null
    },
    clearMessage: state => {
      state.message = null
    }
  }
)

// NOTICE REDUCER
export const noticeReducer = createReducer(
  {},
  {
    getAllNoticeRequest: state => {
      state.loading = true
    },
    getAllNoticeSuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
      state.notices = action.payload.notice
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
    addNoticeRequest: state => {
      state.loading = true
    },
    addNoticeSuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
    },
    addNoticeFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    updateNoticeSuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
    },
    updateNoticeFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    updateNoticeRequest: state => {
      state.loading = true
    },
    deleteNoticeRequest: state => {
      state.loading = true
    },
    deleteNoticeSuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
    },
    deleteNoticeFail: (state, action) => {
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

// SUBJECT REDUCER
export const subjectReducer = createReducer(
  {},
  {
    getSubjectRequest: state => {
      state.loading = true
    },
    getSubjectSuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
      state.subjets = action.payload.subjets
    },
    getSubjectFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    addSubjectRequest: state => {
      state.loading = true
    },
    addSubjectSuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
    },
    addSubjectFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    eleteSubjectRequest: state => {
      state.loading = true
    },
    deleteSubjectSuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
    },
    deleteSubjectFail: (state, action) => {
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

// TIMETABLE REDUCER
export const timetableReducer = createReducer(
  {},
  {
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
    clearError: state => {
      state.error = null
    },
    clearMessage: state => {
      state.message = null
    }
  }
)
