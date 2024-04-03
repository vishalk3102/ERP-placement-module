import React from 'react'
import { useSelector } from 'react-redux'
import Loader from '../../components/Loader'

const Profile = () => {
  const { loading, user } = useSelector(state => state.auth)

  return (
    <div className='w-[85%] mx-auto my-8 flex justify-between items-start'>
      {loading === false ? (
        <>
          <div>
            <p className='text-2xl font-semibold'>
              Hello {user.firstName} {user.lastName} 👋
            </p>
            <div className='mt-3'>
              <p className='text-lg font-normal mb-2'>
                Employee Id:{user.employeeId}
              </p>
              <p className='text-lg font-normal mb-2'>Post: {user.post}</p>
              <p className='text-lg font-normal mb-2'>Email Id: {user.email}</p>
              <p className='text-lg font-normal mb-2'>
                Phone Number: {user.phoneNumber}
              </p>
              <p className='text-lg font-normal mb-2'>
                Department: {user.department}
              </p>
            </div>
          </div>
          {/* <img
            src={user.profile}
            alt='faculty profile'
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
