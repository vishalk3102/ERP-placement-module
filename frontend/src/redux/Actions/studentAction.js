import axios from 'axios'
import { server } from '../Store'

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

// NOTICE
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
  } catch (error) {
    dispatch({
      type: 'getAllNoticeFail',
      payload: error.response.data.message
    })
  }
}

// MARKS
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
  } catch (error) {
    dispatch({
      type: 'getMarksByEnrollmentNoFail',
      payload: error.response.data.message
    })
  }
}

//TIMETABLE
export const getTimetable = formData => async dispatch => {
  try {
    dispatch({
      type: 'getTimetabletRequest'
    })

    const config = {
      headers: { 'Content-Type': 'application/json' }
    }
    const { data } = await axios.post(
      `${server}/student/timetable`,
      formData,
      config
    )
    dispatch({
      type: 'getTimetabletSuccess',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'getTimetabletFail',
      payload: error.response.data.message
    })
  }
}

// MATERIALS
export const getMaterials = () => async dispatch => {
  try {
    dispatch({
      type: 'getMaterialsRequest'
    })

    const { data } = await axios.get(`${server}/material/getmaterial`)
    dispatch({
      type: 'getMaterialsSuccess',
      payload: data.material
    })
  } catch (error) {
    dispatch({
      type: 'getMaterialsFail',
      payload: error.response.data.message
    })
  }
}
