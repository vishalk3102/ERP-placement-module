import { createReducer } from '@reduxjs/toolkit'

export const studentPlacementReducer = createReducer(
  { eligibleCompanies: [], companies: [], drives: [] },
  {
    registerStudentForPlacementRequest: state => {
      state.loading = true
    },
    registerStudentForPlacementSuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
      state.user = action.payload.user
    },
    registerStudentForPlacementFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    getProfileRequest: state => {
      state.loading = true
    },
    getProfileSuccess: (state, action) => {
      state.loading = false
      state.user = action.payload.user
    },
    getProfileFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    getAllCompanyRequest: state => {
      state.loading = true
    },
    getAllCompanySuccess: (state, action) => {
      state.loading = false
      state.companies = action.payload.companies
    },
    getAllCompanyFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    getCompanyRequest: state => {
      state.loading = true
    },
    getCompanySuccess: (state, action) => {
      state.loading = false
      state.company = action.payload
    },
    getCompanyFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    getJobPostingRequest: state => {
      state.loading = true
    },
    getJobPostingSuccess: (state, action) => {
      state.loading = false
      state.job = action.payload.job
    },
    getJobPostingFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    getEligibleJobPostingsRequest: state => {
      state.loading = true
    },
    getEligibleJobPostingsSuccess: (state, action) => {
      state.loading = false
      state.count = action.payload.count
      state.eligibleCompanies = action.payload.jobPostings
    },
    getEligibleJobPostingsFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    applyForJobRequest: state => {
      state.loading = true
    },
    applyForJobSuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
    },
    applyForJobFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    getAllAppliedApplicationRequest: state => {
      state.loading = true
    },
    getAllAppliedApplicationSuccess: (state, action) => {
      state.loading = false
      state.count = action.payload.count
      state.applications = action.payload.applications
    },
    getAllAppliedApplicationFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    getAllDriveRequest: state => {
      state.loading = true
    },
    getAllDriveSuccess: (state, action) => {
      state.loading = false
      state.count = action.payload.count
      state.drives = action.payload.drives
    },
    getAllDriveFail: (state, action) => {
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

export const AdminPlacementReducer = createReducer(
  { students: [] },
  {
    getAllStudentRequest: state => {
      state.loading = true
    },
    getAllStudentSuccess: (state, action) => {
      state.loading = false
      state.students = action.payload.students
    },
    getAllStudentFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
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
    getApplicationsRequest: state => {
      state.loading = true
    },
    getApplicationsSuccess: (state, action) => {
      state.loading = false
      state.count = action.payload.count
      state.companies = action.payload.companies
    },
    getApplicationsFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    getApplicationsByCompanyRequest: state => {
      state.loading = true
    },
    getApplicationsByCompanySuccess: (state, action) => {
      state.loading = false
      state.count = action.payload.count
      state.applications = action.payload.applications
      state.companyName = action.payload.companyName
    },
    getApplicationsByCompanyFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    CreateDriveRequest: state => {
      state.loading = true
    },
    CreateDriveSuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
    },
    CreateDriveFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    getAllDriveRequest: state => {
      state.loading = true
    },
    getAllDriveSuccess: (state, action) => {
      state.loading = false
      state.count = action.payload.count
      state.drives = action.payload.drives
    },
    getAllDriveFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    getDriveRequest: state => {
      state.loading = true
    },
    getDriveSuccess: (state, action) => {
      state.loading = false
      state.drive = action.payload.drive
    },
    getDriveFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    updateDriveRequest: state => {
      state.loading = true
    },
    updateDriveSuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
    },
    updateDriveFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    deleteDriveRequest: state => {
      state.loading = true
    },
    deleteDriveSuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
    },
    deleteDriveFail: (state, action) => {
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

export const jobPostingReducer = createReducer(
  { jobs: [] },
  {
    createJobPostingRequest: state => {
      state.loading = true
    },
    createJobPostingSuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
    },
    createJobPostingFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    updateJobPostingRequest: state => {
      state.loading = true
    },
    updateJobPostingSuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
    },
    updateJobPostingFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    deleteJobPostingRequest: state => {
      state.loading = true
    },
    deleteJobPostingSuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
    },
    deleteJobPostingFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    getJobPostingRequest: state => {
      state.loading = true
    },
    getJobPostingSuccess: (state, action) => {
      state.loading = false
      state.job = action.payload.job
    },
    getJobPostingFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    getAllJobPostingRequest: state => {
      state.loading = true
    },
    getAllJobPostingSuccess: (state, action) => {
      state.loading = false
      state.jobs = action.payload.jobs
    },
    getAllJobPostingFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    }
  }
)

export const CompanyReducer = createReducer(
  { companies: [] },
  {
    registerCompanyProfileRequest: state => {
      state.loading = true
    },
    registerCompanyProfileSuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
    },
    registerCompanyProfileFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    getCompanyRequest: state => {
      state.loading = true
    },
    getCompanySuccess: (state, action) => {
      state.loading = false
      state.company = action.payload.company
    },
    getCompanyFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    getAllCompanyRequest: state => {
      state.loading = true
    },
    getAllCompanySuccess: (state, action) => {
      state.loading = false
      state.companies = action.payload.companies
    },
    getAllCompanyFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    updateCompanyRequest: state => {
      state.loading = true
    },
    updateCompanySuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
    },
    updateCompanyFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    deleteCompanyRequest: state => {
      state.loading = true
    },
    deleteCompanySuccess: (state, action) => {
      state.loading = false
      state.message = action.payload.message
    },
    deleteCompanyFail: (state, action) => {
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
