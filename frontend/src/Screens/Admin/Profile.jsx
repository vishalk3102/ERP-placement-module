import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { setUserData } from '../../redux/actions'
import { baseApiURL } from '../../baseUrl'
import toast from 'react-hot-toast'
import Loader from '../../components/Loader'
const Profile = () => {
  const { loading, user } = useSelector(state => state.auth)

  return (
    <div className='w-[85%] mx-auto my-8 flex justify-between items-start'>
      {loading === false ? (
        <>
          <div>
            <p className='text-2xl font-semibold'>
              Hello {user.firstName} {user.middleName}
            </p>
            <div className='mt-3'>
              <p className='text-lg font-normal mb-2'>
                Employee Id: {user.employeeId}
              </p>
              <p className='text-lg font-normal mb-2'>
                Phone Number: +91 {user.phoneNumber}
              </p>
              <p className='text-lg font-normal mb-2'>
                Email Address: {user.email}
              </p>
            </div>
          </div>
          {/* <img
            src={user.profile}
            alt='student profile'
            className='h-[200px] w-[200px] object-cover rounded-lg shadow-md'
          /> */}
        </>
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default Profile
