import axios from 'axios'
import { server } from '../Store'

export const registerPlacementProfile = () => async dispatch => {
  try {
    dispatch({
      type: 'registerStudentForPlacementRequest'
    })

    const { data } = await axios.post(`${server}/student/placement/register`)
    dispatch({
      type: 'registerStudentForPlacementSuccess',
      payload: data.message
    })
  } catch (error) {
    dispatch({
      type: 'registerStudentForPlacementFail',
      payload: error.response.data.message
    })
  }
}
export const getPlacementProfile = () => async dispatch => {
  try {
    dispatch({
      type: 'getProfileRequest'
    })

    const { data } = await axios.post(`${server}/student/placement/me`)
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

// export const getCompanyStudent = () => async dispatch => {
//   try {
//     dispatch({
//       type: 'getCompanyRequest'
//     })

//     const { data } = await axios.get(`${server}/student/placement/company/:id`)
//     dispatch({
//       type: 'getCompanySuccess',
//       payload: data
//     })
//   } catch (error) {
//     dispatch({
//       type: 'getCompanyFail',
//       payload: error.response.data.message
//     })
//   }
// }

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

export const applyForJob = () => async dispatch => {
  try {
    dispatch({
      type: 'applyForJobRequest'
    })

    const { data } = await axios.post(`${server}/placement/jobs/apply`)
    dispatch({
      type: 'applyForJobSuccess',
      payload: data
    })
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

export const getStudent = () => async dispatch => {
  try {
    dispatch({
      type: 'getStudentRequest'
    })

    const { data } = await axios.get(`${server}/admin/placement/student/:id`)
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

export const getApplicationsByCompany = () => async dispatch => {
  try {
    dispatch({
      type: 'getApplicationsByCompanyRequest'
    })

    const { data } = await axios.get(`${server}/admin/placement/applications`)
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

export const updateStudent = () => async dispatch => {
  try {
    dispatch({
      type: 'updateStudentRequest'
    })

    const { data } = await axios.put(`${server}/admin/placement/student/:id`)
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
export const deleteStudent = () => async dispatch => {
  try {
    dispatch({
      type: 'deleteStudentRequest'
    })

    const { data } = await axios.delete(`${server}/admin/placement/student/:id`)
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

export const createJobPosting = () => async dispatch => {
  try {
    dispatch({
      type: 'createJobPostingRequest'
    })

    const { data } = await axios.post(
      `${server}/admin/placement/jobposting/create`
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

export const updateJobPosting = () => async dispatch => {
  try {
    dispatch({
      type: 'updateJobPostingRequest'
    })

    const { data } = await axios.put(`${server}/admin/placement/jobposting/:id`)
    dispatch({
      type: 'updateJobPostingSuccess',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'updateJobPostingFail',
      payload: error.response.data.message
    })
  }
}

export const deleteJobPosting = () => async dispatch => {
  try {
    dispatch({
      type: 'deleteJobPostingRequest'
    })

    const { data } = await axios.delete(
      `${server}/admin/placement/jobposting/:id`
    )
    dispatch({
      type: 'deleteJobPostingSuccess',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'deleteJobPostingFail',
      payload: error.response.data.message
    })
  }
}

export const getJobPosting = () => async dispatch => {
  try {
    dispatch({
      type: 'getJobPostingRequest'
    })

    const { data } = await axios.get(`${server}/admin/placement/jobposting/:id`)
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
  } catch (error) {
    dispatch({
      type: 'getAllCompanyFail',
      payload: error.response.data.message
    })
  }
}

export const updateCompany = () => async dispatch => {
  try {
    dispatch({
      type: 'updateCompanyRequest'
    })

    const { data } = await axios.put(`${server}/admin/placement/company/:id`)
    dispatch({
      type: 'updateCompanySuccess',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'updateCompanyFail',
      payload: error.response.data.message
    })
  }
}
export const deleteCompany = () => async dispatch => {
  try {
    dispatch({
      type: 'deleteCompanyRequest'
    })

    const { data } = await axios.delete(`${server}/admin/placement/company/:id`)
    dispatch({
      type: 'deleteCompanySuccess',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'deleteCompanyFail',
      payload: error.response.data.message
    })
  }
}
