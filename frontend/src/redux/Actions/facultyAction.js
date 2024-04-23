import axios from 'axios'
import { server } from '../Store'

// NOTICE
export const getNotice = id => async dispatch => {
  try {
    dispatch({
      type: 'getNoticeRequest'
    })

    const { data } = await axios.get(`${server}/faculty/notice/${id}`)
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

    const { data } = await axios.get(`${server}/faculty/notice`)
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
export const addStudentMarks =
  (enrollmentNo, marksList, semester, branch, examType) => async dispatch => {
    try {
      dispatch({
        type: 'addMarksRequest'
      })

      const config = {
        headers: { 'Content-Type': 'application/json' }
      }
      const { data } = await axios.post(
        `${server}/faculty/marks/add`,
        enrollmentNo,
        marksList,
        semester,
        branch,
        examType,
        config
      )
      dispatch({
        type: 'addMarksSuccess',
        payload: data
      })
    } catch (error) {
      dispatch({
        type: 'addMarksFail',
        payload: error.response.data.message
      })
    }
  }
