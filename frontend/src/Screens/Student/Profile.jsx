import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Loader from '../../components/Loader'
import profile from '../Placement/Student/profile.jpg'

const Profile = () => {
  const [showPass, setShowPass] = useState(false)
  // const router = useLocation()
  // const [data, setData] = useState()
  /* const [password, setPassword] = useState({
    new: '',
    current: ''
  }) */

  // const { loading, user } = useSelector(state => state.auth)

  // useEffect(() => {
  //   const headers = {
  //     'Content-Type': 'application/json'
  //   }
  //   axios
  //     .post(
  //       `${baseApiURL()}/${router.state.type}/details/getDetails`,
  //       { enrollmentNo: router.state.loginid },
  //       {
  //         headers: headers
  //       }
  //     )
  //     .then(response => {
  //       if (response.data.success) {
  //         setData(response.data.user[0])
  //         dispatch(
  //           setUserData({
  //             fullname: `${response.data.user[0].firstName} ${response.data.user[0].middleName} ${response.data.user[0].lastName}`,
  //             semester: response.data.user[0].semester,
  //             enrollmentNo: response.data.user[0].enrollmentNo,
  //             branch: response.data.user[0].branch
  //           })
  //         )
  //       } else {
  //         toast.error(response.data.message)
  //       }
  //     })
  //     .catch(error => {
  //       console.error(error)
  //     })
  // }, [dispatch, router.state.loginid, router.state.type])

  // const checkPasswordHandler = e => {
  //   e.preventDefault()
  //   const headers = {
  //     'Content-Type': 'application/json'
  //   }
  //   axios
  //     .post(
  //       `${baseApiURL()}/student/auth/login`,
  //       { loginid: router.state.loginid, password: password.current },
  //       {
  //         headers: headers
  //       }
  //     )
  //     .then(response => {
  //       if (response.data.success) {
  //         changePasswordHandler(response.data.id)
  //       } else {
  //         toast.error(response.data.message)
  //       }
  //     })
  //     .catch(error => {
  //       toast.error(error.response.data.message)
  //       console.error(error)
  //     })
  // }

  // const changePasswordHandler = id => {
  //   const headers = {
  //     'Content-Type': 'application/json'
  //   }
  //   axios
  //     .post(
  //       `${baseApiURL()}/student/auth/update/${id}`,
  //       { loginid: router.state.loginid, password: password.new },
  //       {
  //         headers: headers
  //       }
  //     )
  //     .then(response => {
  //       if (response.data.success) {
  //         toast.success(response.data.message)
  //         setPassword({ new: '', current: '' })
  //       } else {
  //         toast.error(response.data.message)
  //       }
  //     })
  //     .catch(error => {
  //       toast.error(error.response.data.message)
  //       console.error(error)
  //     })
  // }

  const loading = false
  return (
    <div className='w-[85%] mx-auto my-8 flex justify-between items-start'>
      {loading === false ? (
        <>
          <div>
            <p className='text-2xl font-semibold'>Hello Vishal Kumar 👋</p>
            <div className='mt-3'>
              <p className='text-lg font-normal mb-2'>
                Enrollment No: GE2020021657
              </p>
              <p className='text-lg font-normal mb-2'>Branch: B-Tech(CSE)</p>
              <p className='text-lg font-normal mb-2'>Semester: 8th</p>
              <p className='text-lg font-normal mb-2'>
                Phone Number: +91 8459126643
              </p>
              <p className='text-lg font-normal mb-2'>
                Email Address: vishal.k3102@gmail.com
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
                // onSubmit={checkPasswordHandler}
              >
                <input
                  type='password'
                  placeholder='Current Password'
                  className='px-3 py-1 border-2 border-blue-500 outline-none rounded mt-4'
                />
                <input
                  type='password'
                  placeholder='New Password'
                  className='px-3 py-1 border-2 border-blue-500 outline-none rounded mt-4'
                />
                <button
                  className='mt-4 hover:border-b-2 hover:border-blue-500'
                  // onClick={checkPasswordHandler}
                  type='submit'
                >
                  Change Password
                </button>
              </form>
            )}
          </div>

          <img
            src={profile}
            alt='student profile'
            className='h-[200px] w-[200px] object-cover rounded-lg shadow-md'
          />
        </>
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default Profile
