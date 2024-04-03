import axios from 'axios'
import { server } from '../Store'

// STUDENT CREDENTIALS ACTION
export const registerStudent = () => async dispatch => {
  try {
    dispatch({
      type: 'registerStudentRequest'
    })

    const { data } = await axios.get(`${server}/admin/auth/register`)
    dispatch({
      type: 'registerStudentSuccess',
      payload: data.message
    })
  } catch (error) {
    dispatch({
      type: 'registerStudentFail',
      payload: error.response.data.message
    })
  }
}

export const updateStudent = id => async dispatch => {
  try {
    dispatch({
      type: 'updateStudentRequest'
    })

    const { data } = await axios.get(`${server}/admin/auth/update/${id}`)
    dispatch({
      type: 'updateStudentSuccess',
      payload: data.message
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

    const { data } = await axios.get(`${server}/admin/auth/delete/${id}`)
    dispatch({
      type: 'deleteStudentSuccess',
      payload: data.message
    })
  } catch (error) {
    dispatch({
      type: 'deleteStudentFail',
      payload: error.response.data.message
    })
  }
}

// STUDENT DETAILS ACTION
export const getDetails = () => async dispatch => {
  try {
    dispatch({
      type: 'getDetailsStudentRequest'
    })

    const { data } = await axios.get(`${server}/admin/details/register`)
    dispatch({
      type: 'getDetailsStudentSuccess',
      payload: data.message
    })
  } catch (error) {
    dispatch({
      type: 'getDetailsStudentFail',
      payload: error.response.data.message
    })
  }
}

export const addDetails = () => async dispatch => {
  try {
    dispatch({
      type: 'addDetailsStudentRequest'
    })

    const { data } = await axios.post(`${server}/admin/details/login`)
    dispatch({
      type: 'addDetailsStudentSuccess',
      payload: data.message
    })
  } catch (error) {
    dispatch({
      type: 'addDetailsStudentFail',
      payload: error.response.data.message
    })
  }
}

export const updateDetails = id => async dispatch => {
  try {
    dispatch({
      type: 'updateDetailsStudentRequest'
    })

    const { data } = await axios.post(`${server}/admin/details/update/${id}`)
    dispatch({
      type: 'updateDetailsStudentSuccess',
      payload: data.message
    })
  } catch (error) {
    dispatch({
      type: 'updateDetailsStudentFail',
      payload: error.response.data.message
    })
  }
}

export const deleteDetails = id => async dispatch => {
  try {
    dispatch({
      type: 'deleteDetailsStudentRequest'
    })

    const { data } = await axios.delete(`${server}/admin/details/delete/${id}`)
    dispatch({
      type: 'deleteDetailsStudentSuccess',
      payload: data.message
    })
  } catch (error) {
    dispatch({
      type: 'deleteDetailsStudentFail',
      payload: error.response.data.message
    })
  }
}

export const count = () => async dispatch => {
  try {
    dispatch({
      type: 'getcountRequest'
    })

    const { data } = await axios.get(`${server}/admin/details/delete}`)
    dispatch({
      type: 'getcountSuccess',
      payload: data.counts
    })
  } catch (error) {
    dispatch({
      type: 'getcountFail',
      payload: error.response.data.message
    })
  }
}
