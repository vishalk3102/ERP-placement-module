import axios from 'axios'
import { server } from '../Store'

export const registerPlacementProfile =
  (formData, navigate) => async dispatch => {
    try {
      dispatch({
        type: 'registerStudentForPlacementRequest'
      })

      const config = {
        headers: { 'Content-Type': 'application/json' }
      }
      const { data } = await axios.post(
        `${server}/student/placement/register`,
        formData,
        config
      )
      dispatch({
        type: 'registerStudentForPlacementSuccess',
        payload: data
      })

      const id = data.user._id
      navigate(`/student/placement/profile/${id}`)
    } catch (error) {
      dispatch({
        type: 'registerStudentForPlacementFail',
        payload: error.response.data.message
      })
    }
  }
export const getPlacementProfile = id => async dispatch => {
  try {
    dispatch({
      type: 'getProfileRequest'
    })

    const { data } = await axios.get(
      `${server}/student/placement/profile/${id}`
    )
    dispatch({
      type: 'getProfileSuccess',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'getProfileFail',
      payload: error.response.data.message
    })
  }
}

export const getCompanyStudent = id => async dispatch => {
  try {
    dispatch({
      type: 'getCompanyRequest'
    })

    const { data } = await axios.get(
      `${server}/student/placement/company/view/${id}`
    )
    dispatch({
      type: 'getCompanySuccess',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'getCompanyFail',
      payload: error.response.data.message
    })
  }
}

export const getAllCompanyStudent = () => async dispatch => {
  try {
    dispatch({
      type: 'getAllCompanyRequest'
    })

    const { data } = await axios.get(`${server}/student/placement/companies`)
    dispatch({
      type: 'getAllCompanySuccess',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'getAllCompanyFail',
      payload: error.response.data.message
    })
  }
}

export const getJobPostStudent = id => async dispatch => {
  try {
    dispatch({
      type: 'getJobPostingRequest'
    })

    const { data } = await axios.get(
      `${server}/student/placement/eligiblejob/view/${id}`
    )
    dispatch({
      type: 'getJobPostingSuccess',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'getJobPostingFail',
      payload: error.response.data.message
    })
  }
}

export const getEligibleJobPostings = () => async dispatch => {
  try {
    dispatch({
      type: 'getEligibleJobPostingsRequest'
    })

    const { data } = await axios.get(`${server}/student/placement/eligiblejobs`)
    dispatch({
      type: 'getEligibleJobPostingsSuccess',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'getEligibleJobPostingsFail',
      payload: error.response.data.message
    })
  }
}

export const applyForJob = (formData, id) => async dispatch => {
  try {
    dispatch({
      type: 'applyForJobRequest'
    })

    const config = {
      headers: { 'Content-Type': 'application/json' }
    }

    const { data } = await axios.post(
      `${server}/student/placement/eligiblejob/apply/${id}`,
      formData,
      config
    )
    dispatch({
      type: 'applyForJobSuccess',
      payload: data
    })
    return data
  } catch (error) {
    dispatch({
      type: 'applyForJobFail',
      payload: error.response.data.message
    })
  }
}

export const getAllAppliedApplications = () => async dispatch => {
  try {
    dispatch({
      type: 'getAllAppliedApplicationRequest'
    })

    const { data } = await axios.get(`${server}/student/placement/application`)
    dispatch({
      type: 'getAllAppliedApplicationSuccess',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'getAllAppliedApplicationFail',
      payload: error.response.data.message
    })
  }
}

export const getStudent = id => async dispatch => {
  try {
    dispatch({
      type: 'getStudentRequest'
    })

    const { data } = await axios.get(
      `${server}/admin/placement/student/view/${id}`
    )
    dispatch({
      type: 'getStudentSuccess',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'getStudentFail',
      payload: error.response.data.message
    })
  }
}

export const getAllStudent = () => async dispatch => {
  try {
    dispatch({
      type: 'getAllStudentRequest'
    })

    const { data } = await axios.get(`${server}/admin/placement/students`)
    dispatch({
      type: 'getAllStudentSuccess',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'getAllStudentFail',
      payload: error.response.data.message
    })
  }
}
export const updateStudent = (formData, id) => async dispatch => {
  try {
    dispatch({
      type: 'updateStudentRequest'
    })

    const config = {
      headers: { 'Content-Type': 'application/json' }
    }
    const { data } = await axios.put(
      `${server}/admin/placement/student/${id}`,
      formData,
      config
    )
    dispatch({
      type: 'updateStudentSuccess',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'updateStudentFail',
      payload: error.response.data.message
    })
  }
}
export const deleteStudent = id => async dispatch => {
  try {
    dispatch({
      type: 'deleteStudentRequest'
    })

    const { data } = await axios.delete(
      `${server}/admin/placement/student/${id}`
    )
    dispatch({
      type: 'deleteStudentSuccess',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'deleteStudentFail',
      payload: error.response.data.message
    })
  }
}

export const getApplications = () => async dispatch => {
  try {
    dispatch({
      type: 'getApplicationsRequest'
    })

    const { data } = await axios.get(`${server}/admin/placement/application`)
    dispatch({
      type: 'getApplicationsSuccess',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'getApplicationsFail',
      payload: error.response.data.message
    })
  }
}
export const getApplicationsByCompany = id => async dispatch => {
  try {
    dispatch({
      type: 'getApplicationsByCompanyRequest'
    })

    const { data } = await axios.get(
      `${server}/admin/placement/application/${id}`
    )
    dispatch({
      type: 'getApplicationsByCompanySuccess',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'getApplicationsByCompanyFail',
      payload: error.response.data.message
    })
  }
}

export const createJobPosting = formData => async dispatch => {
  try {
    dispatch({
      type: 'createJobPostingRequest'
    })

    const config = {
      headers: { 'Content-Type': 'application/json' }
    }
    const { data } = await axios.post(
      `${server}/admin/placement/jobposting/create`,
      formData,
      config
    )
    dispatch({
      type: 'createJobPostingSuccess',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'createJobPostingFail',
      payload: error.response.data.message
    })
  }
}

export const updateJobPosting = (formData, id) => async dispatch => {
  try {
    dispatch({
      type: 'updateJobPostingRequest'
    })

    const config = {
      headers: { 'Content-Type': 'application/json' }
    }
    const { data } = await axios.put(
      `${server}/admin/placement/jobposting/${id}`,
      formData,
      config
    )
    dispatch({
      type: 'updateJobPostingSuccess',
      payload: data
    })
    console.log(data)
    return data
  } catch (error) {
    dispatch({
      type: 'updateJobPostingFail',
      payload: error.response.data.message
    })
  }
}

export const deleteJobPosting = id => async dispatch => {
  try {
    dispatch({
      type: 'deleteJobPostingRequest'
    })

    const { data } = await axios.delete(
      `${server}/admin/placement/jobposting/${id}`
    )
    dispatch({
      type: 'deleteJobPostingSuccess',
      payload: data
    })
    return data
  } catch (error) {
    dispatch({
      type: 'deleteJobPostingFail',
      payload: error.response.data.message
    })
  }
}

export const getJobPosting = id => async dispatch => {
  try {
    dispatch({
      type: 'getJobPostingRequest'
    })

    const { data } = await axios.get(
      `${server}/admin/placement/jobposting/view/${id}`
    )
    dispatch({
      type: 'getJobPostingSuccess',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'getJobPostingFail',
      payload: error.response.data.message
    })
  }
}

export const getAllJobPosting = () => async dispatch => {
  try {
    dispatch({
      type: 'getAllJobPostingRequest'
    })

    const { data } = await axios.get(`${server}/admin/placement/jobpostings`)
    dispatch({
      type: 'getAllJobPostingSuccess',
      payload: data
    })
    return data
  } catch (error) {
    dispatch({
      type: 'getAllJobPostingFail',
      payload: error.response.data.message
    })
  }
}

export const registerCompany = formData => async dispatch => {
  try {
    dispatch({
      type: 'registerCompanyProfileRequest'
    })

    const config = {
      headers: { 'Content-Type': 'application/json' }
    }
    const { data } = await axios.post(
      `${server}/admin/placement/company/add`,
      formData,
      config
    )

    dispatch({
      type: 'registerCompanyProfileSuccess',
      payload: data
    })
    return data
  } catch (error) {
    dispatch({
      type: 'registerCompanyProfileFail',
      payload: error.response.data.message
    })
  }
}

export const getCompany = id => async dispatch => {
  try {
    dispatch({
      type: 'getCompanyRequest'
    })

    const { data } = await axios.get(
      `${server}/admin/placement/company/view/${id}`
    )
    dispatch({
      type: 'getCompanySuccess',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'getCompanyFail',
      payload: error.response.data.message
    })
  }
}

export const getAllCompany = () => async dispatch => {
  try {
    dispatch({
      type: 'getAllCompanyRequest'
    })

    const { data } = await axios.get(`${server}/admin/placement/companies`)
    dispatch({
      type: 'getAllCompanySuccess',
      payload: data
    })
    return data
  } catch (error) {
    dispatch({
      type: 'getAllCompanyFail',
      payload: error.response.data.message
    })
  }
}

export const updateCompany = (formData, id) => async dispatch => {
  try {
    dispatch({
      type: 'updateCompanyRequest'
    })

    const config = {
      headers: { 'Content-Type': 'application/json' }
    }
    const { data } = await axios.put(
      `${server}/admin/placement/company/${id}`,
      formData,
      config
    )
    dispatch({
      type: 'updateCompanySuccess',
      payload: data
    })
    return data
  } catch (error) {
    dispatch({
      type: 'updateCompanyFail',
      payload: error.response.data.message
    })
  }
}
export const deleteCompany = id => async dispatch => {
  try {
    dispatch({
      type: 'deleteCompanyRequest'
    })

    const { data } = await axios.delete(
      `${server}/admin/placement/company/${id}`
    )
    dispatch({
      type: 'deleteCompanySuccess',
      payload: data
    })
    return data
  } catch (error) {
    dispatch({
      type: 'deleteCompanyFail',
      payload: error.response.data.message
    })
  }
}

// PLACEMENT DRIVE
export const createDrive = formData => async dispatch => {
  try {
    dispatch({
      type: 'CreateDriveRequest'
    })

    const config = {
      headers: { 'Content-Type': 'application/json' }
    }
    const { data } = await axios.post(
      `${server}/admin/placement/drive/add`,
      formData,
      config
    )
    dispatch({
      type: 'CreateDriveSuccess',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'CreateDriveFail',
      payload: error.response.data.message
    })
  }
}

export const getDrive = id => async dispatch => {
  try {
    dispatch({
      type: 'getDriveRequest'
    })

    const { data } = await axios.get(`${server}/admin/placement/drive/${id}`)
    dispatch({
      type: 'getDriveSuccess',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'getDriveFail',
      payload: error.response.data.message
    })
  }
}

export const getAllDrive = () => async dispatch => {
  try {
    dispatch({
      type: 'getAllDriveRequest'
    })

    const { data } = await axios.get(`${server}/admin/placement/drive`)
    dispatch({
      type: 'getAllDriveSuccess',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'getAllDriveFail',
      payload: error.response.data.message
    })
  }
}
export const updateDrive = (formData, id) => async dispatch => {
  try {
    dispatch({
      type: 'updateDriveRequest'
    })

    const config = {
      headers: { 'Content-Type': 'application/json' }
    }
    const { data } = await axios.put(
      `${server}/admin/placement/drive/${id}`,
      formData,
      config
    )
    dispatch({
      type: 'updateDriveSuccess',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'updateDriveFail',
      payload: error.response.data.message
    })
  }
}
export const deleteDrive = id => async dispatch => {
  try {
    dispatch({
      type: 'deleteDriveRequest'
    })

    const { data } = await axios.delete(`${server}/admin/placement/drive/${id}`)
    dispatch({
      type: 'deleteDriveSuccess',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'deleteDriveFail',
      payload: error.response.data.message
    })
  }
}

//PLACED STUDENT
export const addPlacedStudent = formData => async dispatch => {
  try {
    dispatch({
      type: 'addPlacedStudentRequest'
    })
    console.log('Form Data:', formData)
    const config = {
      headers: { 'Content-Type': 'application/json' }
    }
    const { data } = await axios.post(
      `${server}/admin/placement/placedstudent/add`,
      formData,
      config
    )
    dispatch({
      type: 'addPlacedStudentSuccess',
      payload: data
    })
    return data
  } catch (error) {
    dispatch({
      type: 'addPlacedStudentFail',
      payload: error.response.data.message
    })
  }
}

export const updatePlacedStudent = (formData, id) => async dispatch => {
  try {
    dispatch({
      type: 'updatePlacedStudentRequest'
    })

    const config = {
      headers: { 'Content-Type': 'application/json' }
    }
    const { data } = await axios.put(
      `${server}/admin/placement/placedstudent/${id}`,
      formData,
      config
    )
    dispatch({
      type: 'updatePlacedStudentSuccess',
      payload: data.message
    })
    return data
  } catch (error) {
    dispatch({
      type: 'updatePlacedStudentFail',
      payload: error.response.data.message
    })
  }
}

export const deletePlacedStudent = id => async dispatch => {
  try {
    dispatch({
      type: 'deletePlacedStudentRequest'
    })

    const { data } = await axios.delete(
      `${server}/admin/placement/placedstudent/${id}`
    )
    dispatch({
      type: 'deletePlacedStudentSuccess',
      payload: data.message
    })
    return data
  } catch (error) {
    dispatch({
      type: 'deletePlacedStudentFail',
      payload: error.response.data.message
    })
  }
}

export const getAllPlacedStudent = () => async dispatch => {
  try {
    dispatch({
      type: 'getAllPlacedStudentRequest'
    })

    const { data } = await axios.get(`${server}/admin/placement/placedstudents`)
    dispatch({
      type: 'getAllPlacedStudentSuccess',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'getAllPlacedStudentFail',
      payload: error.response.data.message
    })
  }
}

export const getPlacedStudent = id => async dispatch => {
  try {
    dispatch({
      type: 'getPlacedStudentRequest'
    })

    const { data } = await axios.get(
      `${server}/admin/placement/placedstudents/${id}`
    )
    dispatch({
      type: 'getPlacedStudentSuccess',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'getPlacedStudentFail',
      payload: error.response.data.message
    })
  }
}

//ADMIN DASHBOARD STATS
export const getAdminDashboardStats = () => async dispatch => {
  try {
    dispatch({
      type: 'getAdminDashboardStatsRequest'
    })

    const { data } = await axios.get(`${server}/admin/placement/dashboard`)
    dispatch({
      type: 'getAdminDashboardStatsSuccess',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'getAdminDashboardStatsFail',
      payload: error.response.data.message
    })
  }
}

//STUDENT DASHBOARD STATS
export const getStudentDashboardStats = enrollmentNo => async dispatch => {
  try {
    dispatch({
      type: 'getStudentDashboardStatsRequest'
    })

    const { data } = await axios.get(
      `${server}/student/placement/dashboard/${enrollmentNo}`
    )
    dispatch({
      type: 'getStudentDashboardStatsSuccess',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'getStudentDashboardStatsFail',
      payload: error.response.data.message
    })
  }
}
