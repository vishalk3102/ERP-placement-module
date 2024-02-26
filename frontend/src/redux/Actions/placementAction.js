import axios from 'axios'
import { server } from '../Store'

export const registerPlacementProfile = () => async dispatch => {
  try {
    dispatch({
      type: 'registerStudentForPlacementRequest'
    })

    const { data } = await axios.post(`${server}/placement/register`)
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

export const getEligibleJobPostings = () => async dispatch => {
  try {
    dispatch({
      type: 'getEligibleJobPostingsRequest'
    })

    const { data } = await axios.post(`${server}/placement/jobs`)
    dispatch({
      type: 'getEligibleJobPostingsSuccess',
      payload: data.message
    })
  } catch (error) {
    dispatch({
      type: 'getEligibleJobPostingsFail',
      payload: error.response.data.message
    })
  }
}
