import React from 'react'
import { useDispatch } from 'react-redux'
import { FiLogOut } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { RxDashboard } from 'react-icons/rx'
import { logout } from '../Redux/Actions/authAction'

const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logout(navigate))
  }
  return (
    <div className='shadow-md px-6 py-4 flex justify-between items-center'>
      <p
        className='font-semibold text-2xl flex justify-center items-center cursor-pointer'
        onClick={() => navigate('/')}
      >
        <span className='mr-2'>
          <RxDashboard />
        </span>{' '}
        College-ERP
      </p>
      <button
        className='flex justify-center items-center text-red-500 px-3 py-2 font-semibold rounded-sm'
        onClick={logoutHandler}
      >
        Logout
        <span className='ml-2'>
          <FiLogOut />
        </span>
      </button>
    </div>
  )
}

export default Navbar
