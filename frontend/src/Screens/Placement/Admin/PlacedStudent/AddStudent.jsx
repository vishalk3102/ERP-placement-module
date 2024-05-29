import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-hot-toast'
import Box from '@mui/material/Box'
import SideNavbar from '../SideNavbar'
import { useNavigate } from 'react-router-dom'
import MetaData from '../../../../components/MetaData'
import Heading from '../../../../components/Heading'
import { addPlacedStudent } from '../../../../Redux/Actions/placementAction'

const AddStudent = () => {
  const [enrollmentNo, setEnrollmentNo] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [salaryPackage, setSalaryPackage] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const addStudentProfile = e => {
    e.preventDefault()
    const offers = [{ companyName, salaryPackage }]
    const formData = {
      firstName,
      lastName,
      enrollmentNo,
      email,
      phoneNumber,
      offers
    }

    dispatch(addPlacedStudent(formData))
      .then(data => {
        if (data.success) {
          toast.success('Student Added successfully')
          navigate('/admin/placement/placedstudents')
          /*  setEnrollmentNo('')
          setFirstName('')
          setLastName('')
          setEmail('')
          setPhoneNumber('')
          setCompanyName('')
          setSalaryPackage('') */
        }
      })
      .catch(error => {
        toast.error('Error adding Student')
      })
  }

  return (
    <>
      <MetaData title='Add' />
      <section className='w-full h-full'>
        <Box sx={{ display: 'flex', marginTop: '5rem' }}>
          <SideNavbar />
          <div className='max-w-[1200px] w-[100%] mx-auto my-10'>
            <Heading title={` Add Placed Student Details`} />
            <form
              onSubmit={addStudentProfile}
              className='w-[70%] flex justify-center items-center flex-wrap gap-6 mx-auto mt-10'
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
                <label htmlFor='companyName' className='leading-7 text-sm '>
                  Company Name
                </label>
                <input
                  type='text'
                  id='companyName'
                  value={companyName}
                  onChange={e => setCompanyName(e.target.value)}
                  className='w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>
              <div className='w-[40%]'>
                <label htmlFor='package' className='leading-7 text-sm '>
                  Enter Package
                </label>
                <input
                  type='text'
                  id='package'
                  value={salaryPackage}
                  onChange={e => setSalaryPackage(e.target.value)}
                  className='w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>
              <button
                type='submit'
                className='bg-blue-500 px-6 py-3 rounded-sm mb-6 text-white'
              >
                Add New Student
              </button>
            </form>
          </div>
        </Box>
      </section>
    </>
  )
}

export default AddStudent
