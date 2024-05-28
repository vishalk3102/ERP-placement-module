import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { FiSearch, FiUpload, FiX } from 'react-icons/fi'
import {
  getAllBranch,
  getStudent,
  updateStudent
} from '../../../Redux/Actions/adminAction'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Loader from '../../../components/Loader'

const EditStudent = () => {
  const [searchActive, setSearchActive] = useState(false)
  const [search, setSearch] = useState()

  const [enrollmentNo, setEnrollmentNo] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [gender, setGender] = useState('')
  const [course, setCourse] = useState('')
  const [branch, setBranch] = useState('')
  const [semester, setSemester] = useState('')
  const [universityRollNo, setUniversityRollNo] = useState('')
  const [section, setSection] = useState('')
  const [profile, setProfile] = useState()

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading, student, branches, error } = useSelector(
    state => state.admin
  )

  useEffect(() => {
    dispatch(getAllBranch())
  }, [dispatch, error])

  useEffect(() => {
    if (student) {
      setFirstName(student.firstName)
      setLastName(student.lastName)
      setEnrollmentNo(student.enrollmentNo)
      setEmail(student.email)
      setPhoneNumber(student.phoneNumber)
      setGender(student.gender)
      setCourse(student.course)
      setBranch(student.branch)
      setSemester(student.semester)
      setUniversityRollNo(student.universityRollNo)
      setSection(student.section)
      setProfile(student.profile)
    }
  }, [student])

  const searchStudentHandler = e => {
    e.preventDefault()
    dispatch(getStudent(search))
    setSearchActive(!searchActive)
  }
  const clearSearchHandler = () => {
    setSearchActive(false)
    setSearch('')
    setEnrollmentNo('')
    setFirstName('')
    setLastName('')
    setEmail('')
    setPhoneNumber('')
    setGender('')
    setBranch('')
    setCourse('')
    setSemester('')
    setUniversityRollNo('')
    setSection('')
  }

  const updateStudentProfile = e => {
    e.preventDefault()
    const formData = {
      enrollmentNo,
      firstName,
      lastName,
      email,
      phoneNumber,
      gender,
      course,
      branch,
      semester,
      universityRollNo,
      section
    }
    dispatch(updateStudent(formData, enrollmentNo))
      .then(data => {
        if (data.success) {
          toast.success('Student Detail updated successfully')
          navigate('/admin/home')
          setFirstName('')
          setLastName('')
          setEnrollmentNo('')
          setEmail('')
          setPhoneNumber('')
          setGender('')
          setCourse('')
          setBranch('')
          setSemester('')
          setUniversityRollNo('')
          setSection('')
          setProfile('')
        }
      })
      .catch(err => {
        toast.error('Failed to Update student details')
      })
  }

  const handleImage = e => {
    const file = e.target.files[0]
    setFileToBase(file)
  }

  const setFileToBase = file => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setProfile(reader.result)
    }
  }
  return (
    <div className='my-6 mx-auto w-full'>
      <form
        className='flex justify-center items-center border-2 border-blue-500 rounded w-[40%] mx-auto'
        onSubmit={searchStudentHandler}
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
        searchActive && student ? (
          <form
            onSubmit={updateStudentProfile}
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
                Enrollment No
              </label>
              <input
                disabled
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
              <label htmlFor='gender' className='leading-7 text-sm '>
                Select Gender
              </label>
              <select
                id='gender'
                className='px-2 bg-blue-50 py-3 rounded-sm text-base w-full accent-blue-700 mt-1'
                value={gender}
                onChange={e => setGender(e.target.value)}
              >
                <option defaultValue>-- Select --</option>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
              </select>
            </div>
            <div className='w-[40%]'>
              <label htmlFor='semester' className='leading-7 text-sm '>
                Semester
              </label>
              <select
                id='semester'
                className='px-2 bg-blue-50 py-3 rounded-sm text-base w-full accent-blue-700 mt-1'
                value={semester}
                onChange={e => setSemester(e.target.value)}
              >
                <option defaultValue>-- Select --</option>
                <option value='1'>1st Semester</option>
                <option value='2'>2nd Semester</option>
                <option value='3'>3rd Semester</option>
                <option value='4'>4th Semester</option>
                <option value='5'>5th Semester</option>
                <option value='6'>6th Semester</option>
                <option value='7'>7th Semester</option>
                <option value='8'>8th Semester</option>
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
                Branch
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
              <label htmlFor='university-rollno' className='leading-7 text-sm '>
                Enter University Rollno
              </label>
              <input
                type='text'
                id='university-rollno'
                value={universityRollNo}
                onChange={e => setUniversityRollNo(e.target.value)}
                className='w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              />
            </div>
            <div className='w-[40%]'>
              <label htmlFor='section' className='leading-7 text-sm '>
                Enter Section
              </label>
              <input
                type='text'
                id='section'
                value={section}
                onChange={e => setSection(e.target.value)}
                className='w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              />
            </div>
            <div className='w-[40%]'>
              <label htmlFor='file' className='leading-7 text-sm '>
                Select Profile
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
                onChange={handleImage}
                type='file'
                id='file'
                name='profile'
                accept='image/*'
              />
            </div>
            {profile && (
              <div className='w-full flex justify-center items-center'>
                <img
                  src={profile}
                  alt='student'
                  className='h-36'
                  name='profile'
                />
              </div>
            )}
            <button
              type='submit'
              className='bg-blue-500 px-6 py-3 rounded-sm mb-6 text-white'
            >
              Update Student
            </button>
          </form>
        ) : searchActive && error?.error?.message ? (
          <div className='text-center text-red-500 mt-4'>
            User doesn't exist with the provided Enrollment Number.
          </div>
        ) : (
          <Loader />
        )
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default EditStudent
