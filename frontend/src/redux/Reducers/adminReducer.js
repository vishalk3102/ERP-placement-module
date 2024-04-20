import { createReducer } from '@reduxjs/toolkit'

export const adminReducer = createReducer(
  {},
  {
    // STUDENT
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

    // ADMIN
    getAdminRequest: state => {
      state.loading = true
    },
    getAdminSuccess: (state, action) => {
      state.loading = false
      state.admin = action.payload
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

    // FACULTY
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

    // BRANCH
    geAllBranchRequest: state => {
      state.loading = true
    },
    getAllBranchSuccess: (state, action) => {
      state.loading = false
      state.branches = action.payload
    },
    getAllBranchFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    getBranchRequest: state => {
      state.loading = true
    },
    getBranchSuccess: (state, action) => {
      state.loading = false
      state.branch = action.payload
    },
    getBranchFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    addBranchRequest: state => {
      state.loading = true
    },
    addBranchSuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
    },
    addBranchFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    deleteBranchRequest: state => {
      state.loading = true
    },
    deleteBranchSuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
    },
    deleteBranchFail: (state, action) => {
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

    // SUBJECT
    getAllSubjectRequest: state => {
      state.loading = true
    },
    getAllSubjectSuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
      state.subjects = action.payload.subjects
    },
    getAllSubjectFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    getSubjectRequest: state => {
      state.loading = true
    },
    getSubjectSuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
      state.subject = action.payload.subject
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

    // ERROR
    clearError: state => {
      state.error = null
    },
    clearMessage: state => {
      state.message = null
    }
  }
)
