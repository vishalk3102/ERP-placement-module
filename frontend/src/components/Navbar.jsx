import React from 'react'
import { useDispatch } from 'react-redux'
import { FiLogOut } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { RxDashboard } from 'react-icons/rx'
import { logout } from '../Redux/Actions/authAction'
import toast from 'react-hot-toast'
import logo from '../assets/geulogo.png'

const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logout(navigate))
      .then(result => {
        if (result.message) {
          toast.success('Logout Successful')
        } else {
          toast.error('Failed to Login In')
        }
        navigate('/')
      })
      .catch(error => {
        toast.error('Error Logging Out')
      })
  }
  return (
    <div className='shadow-md px-6 py-2 flex justify-between items-center '>
      <div
        className='font-semibold text-xl flex justify-center items-center cursor-pointer'
        onClick={() => navigate('/')}
      >
        <img src={logo} alt='logo' className='w-[100%] h-[70px] py-2 ' />
        <span className='font bold text-[1.4rem] text-[#000] w-[100%]'>
          {' '}
          | ERP Portal
        </span>
      </div>
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
