import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import SideNavbar from '../Student/SideNavbar'
import { applyForJob } from '../../../Redux/Actions/placementAction'
import Heading from '../../../components/Heading'
import MetaData from '../../../components/MetaData'
import toast from 'react-hot-toast'
import { getAllBranch } from '../../../Redux/Actions/adminAction'

const Apply = () => {
  const [enrollmentNo, setEnrollmentNo] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [university, setUniversity] = useState('')
  const [course, setCourse] = useState('')
  const [branch, setBranch] = useState('')

  const dispatch = useDispatch()
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getAllBranch())
  }, [dispatch])

  const { branches } = useSelector(state => state.admin)

  const handleSubmit = e => {
    e.preventDefault()
    const formData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      university,
      enrollmentNo,
      course,
      branch
    }
    dispatch(applyForJob(formData, params.id))
      .then(result => {
        if (result.success) {
          toast.success('Applied Successfully')
          navigate('/student/placement/eligiblejobs')
        }
      })
      .catch(err => {})
  }

  return (
    <>
      <MetaData title='Apply' />
      <section id='Profile' className='w-full h-full'>
        <Box sx={{ display: 'flex', marginTop: '5rem' }}>
          <SideNavbar />
          <div className='max-w-[1200px] w-[100%] mx-auto my-10'>
            <Heading title={`REGISTRATION FORM `} />

            <form
              onSubmit={handleSubmit}
              className='w-[100%] flex justify-center items-center flex-wrap gap-6 mx-auto mt-10'
            >
              <div className='w-[40%]'>
                <label htmlFor='firstname' className='leading-7 text-sm '>
                  Enter First Name
                </label>
                <input
                  type='text'
                  id='firstname'
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                  className='w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>
              <div className='w-[40%]'>
                <label htmlFor='lastname' className='leading-7 text-sm '>
                  Enter Last Name
                </label>
                <input
                  type='text'
                  id='lastname'
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                  className='w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>
              <div className='w-[40%]'>
                <label htmlFor='email' className='leading-7 text-sm '>
                  Enter Email Address
                </label>
                <input
                  type='email'
                  id='email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className='w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>
              <div className='w-[40%]'>
                <label htmlFor='phoneNumber' className='leading-7 text-sm '>
                  Enter Phone Number
                </label>
                <input
                  type='number'
                  id='phoneNumber'
                  value={phoneNumber}
                  onChange={e => setPhoneNumber(e.target.value)}
                  className='w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>
              <div className='w-[40%]'>
                <label htmlFor='university' className='leading-7 text-sm'>
                  Select University
                </label>
                <select
                  id='university'
                  className='px-2 bg-blue-50 py-3 rounded-sm text-base w-full accent-blue-700 mt-1'
                  value={university}
                  onChange={e => setUniversity(e.target.value)}
                >
                  <option defaultValue>-- Select --</option>
                  <option value='GEU'>GEU</option>
                  <option value='GEHU'>GEHU</option>
                </select>
              </div>
              <div className='w-[40%]'>
                <label htmlFor='course' className='leading-7 text-sm '>
                  Select Course
                </label>
                <select
                  id='course'
                  className='px-2 bg-blue-50 py-3 rounded-sm text-base w-full accent-blue-700 mt-1'
                  value={course}
                  onChange={e => setCourse(e.target.value)}
                >
                  <option defaultValue>-- Select --</option>
                  <option value='B-Tech'>Bachelor's of Technology</option>
                </select>
              </div>
              <div className='w-[40%]'>
                <label htmlFor='branch' className='leading-7 text-sm '>
                  Select Branch
                </label>
                <select
                  id='branch'
                  className='px-2 bg-blue-50 py-3 rounded-sm text-base w-full accent-blue-700 mt-1'
                  value={branch}
                  onChange={e => setBranch(e.target.value)}
                >
                  <option defaultValue>-- Select --</option>
                  {branches &&
                    branches.map(i => {
                      return (
                        <option value={i.name} key={i.name}>
                          {i.name}
                        </option>
                      )
                    })}
                </select>
              </div>
              <div className='w-[40%]'>
                <label htmlFor='enrollmentNo' className='leading-7 text-sm '>
                  Enter Enrollment No
                </label>
                <input
                  type='text'
                  id='enrollmentNo'
                  value={enrollmentNo}
                  onChange={e => setEnrollmentNo(e.target.value)}
                  className='w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>
              {/*  <div className='w-[40%]'>
                <label htmlFor='file' className='leading-7 text-sm '>
                  Upload Resume
                </label>
                <label
                  htmlFor='file'
                  className='px-2 bg-blue-50 py-3 rounded-sm text-base w-full flex justify-center items-center cursor-pointer'
                >
                  Upload
                  <span className='ml-2'>
                    <FiUpload />
                  </span>
                </label>
                <input
                  hidden
                  type='file'
                  id='file'
                  accept='image/*'
                  // onChange={e => setFile(e.target.files[0])}
                />
              </div> */}
              <div className='w-[80%] flex justify-center items-center'>
                <button
                  type='submit'
                  className='bg-blue-500 px-6 py-3 rounded-sm mb-6 text-white'
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </Box>
      </section>
    </>
  )
}

export default Apply
