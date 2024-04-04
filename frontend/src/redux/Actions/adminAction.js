import axios from 'axios'
import { server } from '../Store'

// ADMIN CREDENTIALS ACTION
export const registerAdmin = () => async dispatch => {
  try {
    dispatch({
      type: 'registerAdminRequest'
    })

    const { data } = await axios.get(`${server}/admin/register`)
    dispatch({
      type: 'registerAdminSuccess',
      payload: data.message
    })
  } catch (error) {
    dispatch({
      type: 'registerAdminFail',
      payload: error.response.data.message
    })
  }
}

export const loginAdmin = () => async dispatch => {
  try {
    dispatch({
      type: 'loginAdminRequest'
    })

    const { data } = await axios.get(`${server}/admin/auth/login`)
    dispatch({
      type: 'loginAdminSuccess',
      payload: data.message
    })
  } catch (error) {
    dispatch({
      type: 'loginAdminFail',
      payload: error.response.data.message
    })
  }
}

export const updateAdmin = id => async dispatch => {
  try {
    dispatch({
      type: 'updateAdminRequest'
    })

    const { data } = await axios.get(`${server}/admin/update/${id}`)
    dispatch({
      type: 'updateAdminSuccess',
      payload: data.message
    })
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

    const { data } = await axios.get(`${server}/admin/auth/delete/${id}`)
    dispatch({
      type: 'deleteAdminSuccess',
      payload: data.message
    })
  } catch (error) {
    dispatch({
      type: 'deleteAdminFail',
      payload: error.response.data.message
    })
  }
}

// ADMIN DETAILS ACTION
export const getDetails = () => async dispatch => {
  try {
    dispatch({
      type: 'getDetailsAdminRequest'
    })

    const { data } = await axios.get(`${server}/admin/details/register`)
    dispatch({
      type: 'getDetailsAdminSuccess',
      payload: data.message
    })
  } catch (error) {
    dispatch({
      type: 'getDetailsAdminFail',
      payload: error.response.data.message
    })
  }
}

export const addDetails = () => async dispatch => {
  try {
    dispatch({
      type: 'addDetailsAdminRequest'
    })

    const { data } = await axios.post(`${server}/admin/details/login`)
    dispatch({
      type: 'addDetailsAdminSuccess',
      payload: data.message
    })
  } catch (error) {
    dispatch({
      type: 'addDetailsAdminFail',
      payload: error.response.data.message
    })
  }
}

export const updateDetails = id => async dispatch => {
  try {
    dispatch({
      type: 'updateDetailsAdminRequest'
    })

    const { data } = await axios.post(`${server}/admin/details/update/${id}`)
    dispatch({
      type: 'updateDetailsAdminSuccess',
      payload: data.message
    })
  } catch (error) {
    dispatch({
      type: 'updateDetailsAdminFail',
      payload: error.response.data.message
    })
  }
}

export const deleteDetails = id => async dispatch => {
  try {
    dispatch({
      type: 'deleteDetailsAdminRequest'
    })

    const { data } = await axios.delete(`${server}/admin/details/delete/${id}`)
    dispatch({
      type: 'deleteDetailsAdminSuccess',
      payload: data.message
    })
  } catch (error) {
    dispatch({
      type: 'deleteDetailsAdminFail',
      payload: error.response.data.message
    })
  }
}
