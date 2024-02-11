import axios from 'axios'
import { server } from '../Store'

// FACULTY CREDENTIALS ACTION
export const registerFaculty = () => async dispatch => {
  try {
    dispatch({
      type: 'registerFacultyRequest'
    })

    const { data } = await axios.get(`${server}/admin/auth/register`)
    dispatch({
      type: 'registerFacultySuccess',
      payload: data.message
    })
  } catch (error) {
    dispatch({
      type: 'registerFacultyFail',
      payload: error.response.data.message
    })
  }
}

export const loginFaculty = () => async dispatch => {
  try {
    dispatch({
      type: 'loginFacultyRequest'
    })

    const { data } = await axios.get(`${server}/admin/auth/login`)
    dispatch({
      type: 'loginFacultySuccess',
      payload: data.message
    })
  } catch (error) {
    dispatch({
      type: 'loginFacultyFail',
      payload: error.response.data.message
    })
  }
}

export const updateFaculty = id => async dispatch => {
  try {
    dispatch({
      type: 'updateFacultyRequest'
    })

    const { data } = await axios.get(`${server}/admin/auth/update/${id}`)
    dispatch({
      type: 'updateFacultySuccess',
      payload: data.message
    })
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

    const { data } = await axios.get(`${server}/admin/auth/delete/${id}`)
    dispatch({
      type: 'deleteFacultySuccess',
      payload: data.message
    })
  } catch (error) {
    dispatch({
      type: 'deleteFacultyFail',
      payload: error.response.data.message
    })
  }
}

// FACULTY DETAILS ACTION
export const getDetails = () => async dispatch => {
  try {
    dispatch({
      type: 'getDetailsFacultyRequest'
    })

    const { data } = await axios.get(`${server}/admin/details/register`)
    dispatch({
      type: 'getDetailsFacultySuccess',
      payload: data.message
    })
  } catch (error) {
    dispatch({
      type: 'getDetailsFacultyFail',
      payload: error.response.data.message
    })
  }
}

export const addDetails = () => async dispatch => {
  try {
    dispatch({
      type: 'addDetailsFacultyRequest'
    })

    const { data } = await axios.post(`${server}/admin/details/login`)
    dispatch({
      type: 'addDetailsFacultySuccess',
      payload: data.message
    })
  } catch (error) {
    dispatch({
      type: 'addDetailsFacultyFail',
      payload: error.response.data.message
    })
  }
}

export const updateDetails = id => async dispatch => {
  try {
    dispatch({
      type: 'updateDetailsFacultyRequest'
    })

    const { data } = await axios.post(`${server}/admin/details/update/${id}`)
    dispatch({
      type: 'updateDetailsFacultySuccess',
      payload: data.message
    })
  } catch (error) {
    dispatch({
      type: 'updateDetailsFacultyFail',
      payload: error.response.data.message
    })
  }
}

export const deleteDetails = id => async dispatch => {
  try {
    dispatch({
      type: 'deleteDetailsFacultyRequest'
    })

    const { data } = await axios.delete(`${server}/admin/details/delete/${id}`)
    dispatch({
      type: 'deleteDetailsFacultySuccess',
      payload: data.message
    })
  } catch (error) {
    dispatch({
      type: 'deleteDetailsFacultyFail',
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
