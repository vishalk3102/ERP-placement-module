import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Loader from '../../components/Loader'

const Profile = () => {
  const { loading, user } = useSelector(state => state.auth)
  // const [showPass, setShowPass] = useState(false)
  // const [data, setData] = useState()
  /* const [password, setPassword] = useState({
    new: '',
    current: ''
  }) */

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
            {/* <button
              className={`${
                showPass ? "bg-red-100 text-red-600" : "bg-blue-600 text-white"
              }  px-3 py-1 rounded mt-4`}
              onClick={() => setShowPass(!showPass)}
            >
              {!showPass ? "Change Password" : "Close Change Password"}
            </button>
            {showPass && (
              <form
                className="mt-4 border-t-2 border-blue-500 flex flex-col justify-center items-start"
                onSubmit={checkPasswordHandler}
              >
                <input
                  type="password"
                  value={password.current}
                  onChange={(e) =>
                    setPassword({ ...password, current: e.target.value })
                  }
                  placeholder="Current Password"
                  className="px-3 py-1 border-2 border-blue-500 outline-none rounded mt-4"
                />
                <input
                  type="password"
                  value={password.new}
                  onChange={(e) =>
                    setPassword({ ...password, new: e.target.value })
                  }
                  placeholder="New Password"
                  className="px-3 py-1 border-2 border-blue-500 outline-none rounded mt-4"
                />
                <button
                  className="mt-4 hover:border-b-2 hover:border-blue-500"
                  onClick={checkPasswordHandler}
                  type="submit"
                >
                  Change Password
                </button>
              </form>
            )} */}
          </div>

          <img
            src={user.profile}
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
