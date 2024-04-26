import React, { useState, useEffect } from 'react'
import { FiLogIn } from 'react-icons/fi'
import toast, { Toaster } from 'react-hot-toast'
import collegeImg from '../assets/college.jpg'
import { loginUser } from '../Redux/Actions/authAction'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { loading, error, message, isAuthenticated } = useSelector(
    state => state.auth
  )

  const [selected, setSelected] = useState('Student')
  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')

  const handleLoginSubmit = e => {
    e.preventDefault()
    dispatch(loginUser(userId, password, selected.toLowerCase(), navigate))
  }

  // useEffect(() => {
  //   if (error) {
  //     toast.error(error)
  //     dispatch({ type: 'clearError' })
  //   }

  //   if (isAuthenticated) {
  //     navigate('/admin')
  //   }
  // }, [dispatch, error, isAuthenticated, navigate])

  // useEffect(() => {
  //   if (message) {
  //     toast.success(message)
  //     dispatch({ type: 'clearMessage' })
  //   }
  //   if (error) {
  //     toast.error(error)
  //     dispatch({ type: 'clearError' })
  //   }
  // }, [dispatch, message, error])

  return (
    <div className='bg-white h-[100vh] w-full flex justify-between items-center'>
      <img className='w-[60%] h-[100vh] object-cover' src={collegeImg} alt='' />
      <div className='w-[40%] flex justify-center items-start flex-col pl-8'>
        <p className='text-3xl font-semibold pb-2 border-b-2 border-green-500'>
          {selected && selected} Login
        </p>
        <form
          className='flex justify-center items-start flex-col w-full mt-10'
          onSubmit={handleLoginSubmit}
        >
          <div className='flex flex-col w-[70%]'>
            <label className='mb-1' htmlFor='eno'>
              {selected && selected} Login ID
            </label>
            <input
              type='number'
              required
              className='bg-white outline-none border-2 border-gray-400 py-2 px-4 rounded-md w-full focus:border-blue-500'
              value={userId}
              onChange={e => setUserId(e.target.value)}
            />
          </div>
          <div className='flex flex-col w-[70%] mt-3'>
            <label className='mb-1' htmlFor='password'>
              Password
            </label>
            <input
              type='password'
              required
              className='bg-white outline-none border-2 border-gray-400 py-2 px-4 rounded-md w-full focus:border-blue-500'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button className='bg-blue-500 mt-5 text-white px-6 py-2 text-xl rounded-md hover:bg-blue-700 ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all flex justify-center items-center'>
            Login
            <span className='ml-2'>
              <FiLogIn />
            </span>
          </button>
        </form>
      </div>
      <div className='absolute top-4 right-4'>
        <button
          className={`text-blue-500 mr-6 text-base font-semibold hover:text-blue-700 ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
            selected === 'Student' && 'border-b-2 border-green-500'
          }`}
          onClick={() => setSelected('Student')}
        >
          Student
        </button>
        <button
          className={`text-blue-500 mr-6 text-base font-semibold hover:text-blue-700 ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
            selected === 'Faculty' && 'border-b-2 border-green-500'
          }`}
          onClick={() => setSelected('Faculty')}
        >
          Faculty
        </button>
        <button
          className={`text-blue-500 mr-6 text-base font-semibold hover:text-blue-700 ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
            selected === 'Admin' && 'border-b-2 border-green-500'
          }`}
          onClick={() => setSelected('Admin')}
        >
          Admin
        </button>
      </div>
      <Toaster position='bottom-center' />
    </div>
  )
}

export default Login
