import axios from 'axios'
import { server } from '../Store'

// GET NOTICE
export const getNotice = id => async dispatch => {
  try {
    dispatch({
      type: 'getNoticeRequest'
    })

    const { data } = await axios.get(`${server}/student/notice/${id}`)
    dispatch({
      type: 'getNoticeSuccess',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'getNoticeFail',
      payload: error.response.data.message
    })
  }
}

// GET ALL NOTICE
export const getAllNotice = () => async dispatch => {
  try {
    dispatch({
      type: 'getAllNoticeRequest'
    })

    const { data } = await axios.get(`${server}/student/notice`)
    dispatch({
      type: 'getAllNoticeSuccess',
      payload: data
    })
    return data
  } catch (error) {
    dispatch({
      type: 'getAllNoticeFail',
      payload: error.response.data.message
    })
  }
}

// GET MARKS BY ENROLLMENT NO
export const getMarksByEnrollmentNo = enrollmentNo => async dispatch => {
  try {
    dispatch({
      type: 'getMarksByEnrollmentNoRequest'
    })

    const { data } = await axios.get(`${server}/student/marks/${enrollmentNo}`)
    dispatch({
      type: 'getMarksByEnrollmentNoSuccess',
      payload: data
    })
    return data
  } catch (error) {
    dispatch({
      type: 'getMarksByEnrollmentNoFail',
      payload: error.response.data.message
    })
  }
}

//GET TIMETABLE
export const getTimetable = formData => async dispatch => {
  try {
    dispatch({
      type: 'getTimetabletRequest'
    })

    const { semester, branch } = formData
    const { data } = await axios.get(`${server}/student/timetable/`, {
      params: {
        semester,
        branch
      }
    })
    dispatch({
      type: 'getTimetabletSuccess',
      payload: data
    })
    return data
  } catch (error) {
    dispatch({
      type: 'getTimetabletFail',
      payload: error.response.data.message
    })
  }
}

// GET MATERIALS
export const getMaterials = () => async dispatch => {
  try {
    dispatch({
      type: 'getMaterialsRequest'
    })

    const { data } = await axios.get(`${server}/student/materials`)
    dispatch({
      type: 'getMaterialsSuccess',
      payload: data
    })
    return data
  } catch (error) {
    dispatch({
      type: 'getMaterialsFail',
      payload: error.response.data.message
    })
  }
}
