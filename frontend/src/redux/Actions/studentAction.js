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
export const getMarks = () => async dispatch => {
  try {
    dispatch({
      type: 'getMarksRequest'
    })

    const { data } = await axios.get(`${server}/admin/auth/register`)
    dispatch({
      type: 'getMarksSuccess',
      payload: data.mark
    })
  } catch (error) {
    dispatch({
      type: 'getMarksFail',
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
