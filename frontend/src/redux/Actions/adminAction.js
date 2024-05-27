import axios from 'axios'
import { server } from '../Store'

// ADMIN
export const addAdmin = formData => async dispatch => {
  try {
    dispatch({
      type: 'addAdminRequest'
    })

    const config = {
      headers: { 'Content-Type': 'application/json' }
    }
    const { data } = await axios.post(
      `${server}/admin/register`,
      formData,
      config
    )
    dispatch({
      type: 'addAdminSuccess',
      payload: data
    })
    return data
  } catch (error) {
    dispatch({
      type: 'addAdminFail',
      payload: error.response.data.message
    })
  }
}

export const updateAdmin = (formData, id) => async dispatch => {
  try {
    dispatch({
      type: 'updateAdminRequest'
    })

    const config = {
      headers: { 'Content-Type': 'application/json' }
    }
    const { data } = await axios.put(`${server}/admin/${id}`, formData, config)
    dispatch({
      type: 'updateAdminSuccess',
      payload: data.message
    })
    return data
  } catch (error) {
    dispatch({
      type: 'updateAdminFail',
      payload: error.response.data.message
    })
  }
}

export const deleteAdmin = id => async dispatch => {
  try {
    dispatch({
      type: 'deleteAdminRequest'
    })

    const { data } = await axios.delete(`${server}/admin/${id}`)
    dispatch({
      type: 'deleteAdminSuccess',
      payload: data.message
    })
    return data
  } catch (error) {
    dispatch({
      type: 'deleteAdminFail',
      payload: error.response.data.message
    })
  }
}

export const getAdmin = id => async dispatch => {
  try {
    dispatch({
      type: 'getAdminRequest'
    })

    const { data } = await axios.get(`${server}/admin/${id}`)
    dispatch({
      type: 'getAdminSuccess',
      payload: data
    })
    return data
  } catch (error) {
    dispatch({
      type: 'getAdminFail',
      payload: error.response.data.message
    })
  }
}

export const getAllAdmin = () => async dispatch => {
  try {
    dispatch({
      type: 'getAllAdminRequest'
    })

    const { data } = await axios.get(`${server}/admin`)
    dispatch({
      type: 'getAllAdminSuccess',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'getAllAdminFail',
      payload: error.response.data.message
    })
  }
}

// STUDENT
export const addStudent = formData => async dispatch => {
  try {
    dispatch({
      type: 'addStudentRequest'
    })
    console.log('Form Data:', formData)
    const config = {
      headers: { 'Content-Type': 'application/json' }
    }
    const { data } = await axios.post(
      `${server}/admin/student/register`,
      formData,
      config
    )
    dispatch({
      type: 'addStudentSuccess',
      payload: data
    })
    return data
  } catch (error) {
    dispatch({
      type: 'addStudentFail',
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
      `${server}/admin/student/${id}`,
      formData,
      config
    )
    dispatch({
      type: 'updateStudentSuccess',
      payload: data.message
    })
    return data
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

    const { data } = await axios.delete(`${server}/admin/student/${id}`)
    dispatch({
      type: 'deleteStudentSuccess',
      payload: data.message
    })
    return data
  } catch (error) {
    dispatch({
      type: 'deleteStudentFail',
      payload: error.response.data.message
    })
  }
}

export const getStudent = enrollmentNo => async dispatch => {
  try {
    dispatch({
      type: 'getStudentRequest'
    })

    const { data } = await axios.get(`${server}/admin/student/${enrollmentNo}`)
    dispatch({
      type: 'getStudentSuccess',
      payload: data
    })
    return data
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

    const { data } = await axios.get(`${server}/admin/student`)
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

// FACULTY
export const addFaculty = formData => async dispatch => {
  try {
    dispatch({
      type: 'addFacultyRequest'
    })

    const config = {
      headers: { 'Content-Type': 'application/json' }
    }
    const { data } = await axios.post(
      `${server}/admin/faculty/register`,
      formData,
      config
    )
    dispatch({
      type: 'addFacultySuccess',
      payload: data
    })
    return data
  } catch (error) {
    dispatch({
      type: 'addFacultyFail',
      payload: error.response.data.message
    })
  }
}

export const updateFaculty = (formData, id) => async dispatch => {
  try {
    dispatch({
      type: 'updateFacultyRequest'
    })

    const config = {
      headers: { 'Content-Type': 'application/json' }
    }
    const { data } = await axios.put(
      `${server}/admin/faculty/${id}`,
      formData,
      config
    )
    dispatch({
      type: 'updateFacultySuccess',
      payload: data
    })
    return data
  } catch (error) {
    dispatch({
      type: 'updateFacultyFail',
      payload: error.response.data.message
    })
  }
}

export const deleteFaculty = id => async dispatch => {
  try {
    dispatch({
      type: 'deleteFacultyRequest'
    })

    const { data } = await axios.delete(`${server}/admin/faculty/${id}`)
    dispatch({
      type: 'deleteFacultySuccess',
      payload: data
    })
    return data
  } catch (error) {
    dispatch({
      type: 'deleteFacultyFail',
      payload: error.response.data.message
    })
  }
}

export const getFaculty = id => async dispatch => {
  try {
    dispatch({
      type: 'getFacultyRequest'
    })

    const { data } = await axios.get(`${server}/admin/faculty/${id}`)
    dispatch({
      type: 'getFacultySuccess',
      payload: data
    })
    return data
  } catch (error) {
    dispatch({
      type: 'getFacultyFail',
      payload: error.response.data.message
    })
  }
}

export const getAllFaculty = () => async dispatch => {
  try {
    dispatch({
      type: 'getAllFacultyRequest'
    })

    const { data } = await axios.get(`${server}/admin/faculty`)
    dispatch({
      type: 'getAllFacultySuccess',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'getAllFacultyFail',
      payload: error.response.data.message
    })
  }
}

// BRANCH
export const getAllBranch = () => async dispatch => {
  try {
    dispatch({
      type: 'geAllBranchRequest'
    })

    const { data } = await axios.get(`${server}/admin/branch`)
    dispatch({
      type: 'getAllBranchSuccess',
      payload: data.branches
    })
  } catch (error) {
    dispatch({
      type: 'getAllBranchFail',
      payload: error.response.data.message
    })
  }
}
export const addBranch = name => async dispatch => {
  try {
    dispatch({
      type: 'addBranchRequest'
    })

    const { data } = await axios.post(`${server}/admin/branch/add`, { name })

    dispatch({
      type: 'addBranchSuccess',
      payload: data.message
    })
    return data
  } catch (error) {
    dispatch({
      type: 'addBranchFail',
      payload: error.response.data.message
    })
  }
}
export const deleteBranch = id => async dispatch => {
  try {
    dispatch({
      type: 'deleteBranchRequest'
    })

    const { data } = await axios.delete(`${server}/admin/branch/${id}`)

    dispatch({
      type: 'deleteBranchSuccess',
      payload: data.message
    })
    return data
  } catch (error) {
    dispatch({
      type: 'deleteBranchFail',
      payload: error.response.data.message
    })
  }
}

// NOTICE
export const getNotice = id => async dispatch => {
  try {
    dispatch({
      type: 'getNoticeRequest'
    })

    const { data } = await axios.get(`${server}/admin/notice/${id}`)
    dispatch({
      type: 'getNoticeSuccess',
      payload: data
    })
    return data
  } catch (error) {
    dispatch({
      type: 'getNoticeFail',
      payload: error.response.data.message
    })
  }
}
export const getAllNotice = () => async dispatch => {
  try {
    dispatch({
      type: 'getAllNoticeRequest'
    })

    const { data } = await axios.get(`${server}/admin/notice`)
    dispatch({
      type: 'getAllNoticeSuccess',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'getAllNoticeFail',
      payload: error.response.data.message
    })
  }
}

export const addNotice = formData => async dispatch => {
  try {
    dispatch({
      type: 'addNoticeRequest'
    })

    const config = {
      headers: { 'Content-Type': 'application/json' }
    }
    const { data } = await axios.post(
      `${server}/admin/notice/add`,
      formData,
      config
    )
    dispatch({
      type: 'addNoticeSuccess',
      payload: data
    })
    return data
  } catch (error) {
    dispatch({
      type: 'addNoticeFail',
      payload: error.response.data.message
    })
  }
}

export const updateNotice = (formData, id) => async dispatch => {
  try {
    dispatch({
      type: 'updateNoticeRequest'
    })

    const config = {
      headers: { 'Content-Type': 'application/json' }
    }
    const { data } = await axios.put(
      `${server}/admin/notice/${id}`,
      formData,
      config
    )
    dispatch({
      type: 'updateNoticeSuccess',
      payload: data
    })
    return data
  } catch (error) {
    dispatch({
      type: 'updateNoticeFail',
      payload: error.response.data.message
    })
  }
}

export const deleteNotice = id => async dispatch => {
  try {
    dispatch({
      type: 'deleteNoticeRequest'
    })

    const { data } = await axios.delete(`${server}/admin/notice/${id}`)
    dispatch({
      type: 'deleteNoticeSuccess',
      payload: data
    })
    return data
  } catch (error) {
    dispatch({
      type: 'deleteNoticeFail',
      payload: error.response.data.message
    })
  }
}

// SUBJECT
export const getAllSubject = () => async dispatch => {
  try {
    dispatch({
      type: 'getAllSubjectRequest'
    })

    const { data } = await axios.get(`${server}/admin/subject`)
    dispatch({
      type: 'getAllSubjectSuccess',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'getAllSubjectFail',
      payload: error.response.data.message
    })
  }
}

export const addSubject = subjectData => async dispatch => {
  try {
    dispatch({
      type: 'addSubjectRequest'
    })

    const config = {
      headers: { 'Content-Type': 'application/json' }
    }
    const { data } = await axios.post(
      `${server}/admin/subject/add`,
      subjectData,
      config
    )
    dispatch({
      type: 'addSubjectSuccess',
      payload: data.message
    })
    console.log(data)
    return data
  } catch (error) {
    dispatch({
      type: 'addSubjectFail',
      payload: error.response.data.message
    })
  }
}

export const deleteSubject = id => async dispatch => {
  try {
    dispatch({
      type: 'deleteSubjectRequest'
    })

    const { data } = await axios.delete(`${server}/admin/subject/${id}`)
    dispatch({
      type: 'deleteSubjectSuccess',
      payload: data.message
    })
  } catch (error) {
    dispatch({
      type: 'deleteSubjectFail',
      payload: error.response.data.message
    })
  }
}
