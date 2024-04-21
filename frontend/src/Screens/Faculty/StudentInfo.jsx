import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import Heading from '../../components/Heading'
import axios from 'axios'
import { baseApiURL } from '../../baseUrl'
import { FiSearch, FiUpload, FiX } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getStudent } from '../../Redux/Actions/adminAction'
import Loader from '../../components/Loader'

const data = [
  {
    _id: '1',
    enrollmentNo: '2021001',
    firstName: 'John',
    middleName: '',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phoneNumber: '1234567890',
    semester: '3',
    branch: 'Computer Science',
    gender: 'Male',
    profile: 'john_doe_profile.jpg'
  },
  {
    _id: '2',
    enrollmentNo: '2021002',
    firstName: 'Jane',
    middleName: '',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    phoneNumber: '9876543210',
    semester: '2',
    branch: 'Electrical Engineering',
    gender: 'Female',
    profile: 'jane_smith_profile.jpg'
  }
  // Add more sample student data as needed
]
const Student = () => {
  const [searchActive, setSearchActive] = useState(false)
  const [search, setSearch] = useState()

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading, student, error } = useSelector(state => state.faculty)

  const searchStudentHandler = e => {
    e.preventDefault()
    dispatch(getStudent(search))
    setSearchActive(!searchActive)
  }
  const clearSearchHandler = () => {
    setSearchActive(false)
    setSearch('')
  }

  return (
    <div className='w-[85%] mx-auto mt-10 flex justify-center items-start flex-col mb-10'>
      <div className='flex justify-between items-center w-full'>
        <Heading title='Student Details' />
      </div>
      <div className='my-6 mx-auto w-full'>
        <form
          onSubmit={searchStudentHandler}
          className='flex justify-center items-center border-2 border-blue-500 rounded w-[40%] mx-auto'
        >
          <input
            type='text'
            className='px-6 py-3 w-full outline-none'
            placeholder='Enrollment No.'
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          {!searchActive && (
            <button className='px-4 text-2xl hover:text-blue-500' type='submit'>
              <FiSearch />
            </button>
          )}
          {searchActive && (
            <button
              className='px-4 text-2xl hover:text-blue-500'
              onClick={clearSearchHandler}
            >
              <FiX />
            </button>
          )}
        </form>
        {loading === false ? (
          searchActive &&
          student && (
            <div className='mx-auto w-full bg-blue-50 mt-10 flex justify-between items-center p-10 rounded-md shadow-md'>
              <div>
                <p className='text-2xl font-semibold'>
                  {student.firstName} {student.lastName}
                </p>
                <div className='mt-3'>
                  <p className='text-lg font-normal mb-2'>
                    Enrollment No: {student.enrollmentNo}
                  </p>
                  <p className='text-lg font-normal mb-2'>
                    University Roll No: {student.universityRollNo}
                  </p>
                  <p className='text-lg font-normal mb-2'>
                    Phone Number: +91 {student.phoneNumber}
                  </p>
                  <p className='text-lg font-normal mb-2'>
                    Email Address: {student.email}
                  </p>
                  <p className='text-lg font-normal mb-2'>
                    Branch: {student.branch}
                  </p>
                  <p className='text-lg font-normal mb-2'>
                    Semester: {student.semester}
                  </p>
                  <p className='text-lg font-normal mb-2'>
                    Section: {student.section}
                  </p>
                </div>
              </div>
              {/* <img
              src={profile}
              alt='student profile'
              className='h-[200px] w-[200px] object-cover rounded-lg shadow-md'
            /> */}
            </div>
          )
        ) : (
          <Loader />
        )}
      </div>
    </div>
  )
}

export default Student
