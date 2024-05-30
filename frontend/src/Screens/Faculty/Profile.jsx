import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../components/Loader'
import toast from 'react-hot-toast'
import { updatePassword } from '../../Redux/Actions/authAction'

const Profile = () => {
  const [showPass, setShowPass] = useState(false)

  const { loading, user } = useSelector(state => state.auth)
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const dispatch = useDispatch()

  if (loading || !user) {
    return <Loader />
  }

  const checkPasswordHandler = e => {
    e.preventDefault()
    const formData = {
      oldPassword,
      newPassword,
      userType: user.userType,
      userId: user.enrollmentNo
    }
    dispatch(updatePassword(formData))
      .then(() => {
        setOldPassword('')
        setNewPassword('')
      })
      .catch(error => {
        toast.error('Error adding material')
      })
  }

  return (
    <>
      {loading === false ? (
        <div className='w-[85%] mx-auto my-8 flex justify-between items-start'>
          <div>
            <p className='text-2xl font-semibold'>
              Hello {user.firstName} {user.lastName} 👋
            </p>
            <div className='mt-3'>
              <p className='text-lg font-normal mb-2'>
                Employee Id: {user.employeeId}
              </p>
              <p className='text-lg font-normal mb-2'>
                Department: {user.department}
              </p>
              <p className='text-lg font-normal mb-2'>Post: {user.post}</p>
              <p className='text-lg font-normal mb-2'>
                Phone Number: {user.phoneNumber}
              </p>
              <p className='text-lg font-normal mb-2'>
                Email Address: {user.email}
              </p>
            </div>
            <button
              className={`${
                showPass ? 'bg-red-100 text-red-600' : 'bg-blue-600 text-white'
              }  px-3 py-1 rounded mt-4`}
              onClick={() => setShowPass(!showPass)}
            >
              {!showPass ? 'Change Password' : 'Close Change Password'}
            </button>
            {showPass && (
              <form
                className='mt-4 border-t-2 border-blue-500 flex flex-col justify-center items-start'
                onSubmit={checkPasswordHandler}
              >
                <input
                  type='password'
                  placeholder='Current Password'
                  className='px-3 py-1 border-2 border-blue-500 outline-none rounded mt-4'
                  value={oldPassword}
                  onChange={e => setOldPassword(e.target.value)}
                />
                <input
                  type='password'
                  placeholder='New Password'
                  className='px-3 py-1 border-2 border-blue-500 outline-none rounded mt-4'
                  value={newPassword}
                  onChange={e => setNewPassword(e.target.value)}
                />
                <button
                  className='mt-4 hover:border-b-2 hover:border-blue-500'
                  type='submit'
                >
                  Change Password
                </button>
              </form>
            )}
          </div>

          <img
            src={user.profile.url}
            alt='faculty profile'
            className='h-[200px] w-[200px] object-cover rounded-lg shadow-md'
          />
        </div>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default Profile
