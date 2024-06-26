import axios from 'axios'
import { server } from '../Store'

export const loginUser =
  (userId, password, selected, navigate) => async dispatch => {
    try {
      dispatch({
        type: 'loginRequest'
      })

      const config = { headers: { 'Content-Type': 'application/json' } }

      const { data } = await axios.post(
        `${server}/login`,
        { userId, password, userType: selected },
        config
      )

      dispatch({
        type: 'loginSuccess',
        payload: data
      })

      if (selected === 'admin') {
        navigate('/admin/home')
      } else if (selected === 'faculty') {
        navigate('/faculty/home')
      } else {
        navigate('/student/home')
      }
      return data
    } catch (error) {
      dispatch({
        type: 'loginFail',
        payload: error.response.data.message
      })
    }
  }

export const logout = () => async dispatch => {
  try {
    dispatch({
      type: 'logoutRequest'
    })

    const { data } = await axios.get(`${server}/logout`, {
      withCredentials: true
    })

    dispatch({ type: 'logoutSuccess', payload: data.message })
    return data
  } catch (error) {
    dispatch({ type: 'logoutFail', payload: error.reponse.data.message })
  }
}

export const updatePassword = formData => async dispatch => {
  console.log(formData)
  try {
    dispatch({
      type: 'updatePasswordRequest'
    })

    const config = {
      headers: { 'Content-Type': 'application/json' }
    }
    const { data } = await axios.put(
      `${server}/password/update`,
      formData,
      config
    )

    dispatch({ type: 'updatePasswordSuccess', payload: data })
  } catch (error) {
    dispatch({
      type: 'updatePasswordFail',
      payload: error.reponse.data.message
    })
  }
}
