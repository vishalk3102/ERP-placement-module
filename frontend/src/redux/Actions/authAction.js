import axios from 'axios'
import { server } from '../Store'
import { useNavigate } from 'react-router-dom'

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
      } else if (selected === 'facultu') {
        navigate('/faculty/home')
      } else {
        navigate('/student/home')
      }
    } catch (error) {
      dispatch({
        type: 'loginFail',
        payload: error.response.data.message
      })
    }
  }

export const loadUser = () => async dispatch => {
  try {
    dispatch({
      type: 'loadUserRequest'
    })

    const { data } = await axios.get(`${server}/me`, { withCredentials: true })

    dispatch({
      type: 'loadUserSuccess',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'loadUserFail',
      payload: error.response.data.message
    })
  }
}

export const logout = navigate => async dispatch => {
  try {
    dispatch({
      type: 'logoutRequest'
    })

    const { data } = await axios.get(`${server}/logout`, {
      withCredentials: true
    })

    dispatch({ type: 'logoutSuccess', payload: data.message })
    if (data.success) {
      navigate('/')
    }
  } catch (error) {
    dispatch({ type: 'logoutFail', payload: error.reponse.data.message })
  }
}
