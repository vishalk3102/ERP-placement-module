import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { storage } from '../../../firebase/config'
import { FiUpload } from 'react-icons/fi'
import { addStudent, getAllBranch } from '../../../Redux/Actions/adminAction'
import Loader from '../../../components/Loader'

const AddStudent = () => {
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
  const [file, setFile] = useState()
  const [previewImage, setPreviewImage] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading, branches, error } = useSelector(state => state.admin)

  useEffect(() => {
    if (error) {
      toast.error(error)
      dispatch({ type: 'clearError' })
    }
    dispatch(getAllBranch())
  }, [dispatch, error])

  const handleFileChange = e => {
    const selectedFile = e.target.files[0]
    setFile(selectedFile)
    const imageUrl = URL.createObjectURL(selectedFile)
    setPreviewImage(imageUrl)
  }

  /* const addStudentProfile = e => {
    e.preventDefault()
    const formData = new FormData()

    formData.append('enrollmentNo', enrollmentNo)
    formData.append('firstName', firstName)
    formData.append('lastName', lastName)
    formData.append('email', email)
    formData.append('phoneNumber', phoneNumber)
    formData.append('gender', gender)
    formData.append('semester', semester)
    formData.append('course', course)
    formData.append('branch', branch)
    formData.append('universityRollNo', universityRollNo)
    formData.append('section', section)
    formData.append('profile', file)

    console.log(formData)
    dispatch(addStudent(formData))
    navigate('/admin/home')
  } */

  const addStudentProfile = e => {
    e.preventDefault()
    const formData = {
      firstName,
      lastName,
      enrollmentNo,
      email,
      phoneNumber,
      gender,
      course,
      branch,
      semester,
      universityRollNo,
      section,
      file
    }

    console.log(formData)
    dispatch(addStudent(formData))
    navigate('/admin/home')
  }

  return (
    <>
      {loading === false ? (
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
            <label htmlFor='semester' className='leading-7 text-sm '>
              Select Semester
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
              type='file'
              id='file'
              accept='image/*'
              onChange={handleFileChange}
            />
          </div>
          {previewImage && (
            <div className='w-full flex justify-center items-center'>
              <img src={previewImage} alt='student' className='h-36' />
            </div>
          )}
          <button
            type='submit'
            className='bg-blue-500 px-6 py-3 rounded-sm mb-6 text-white'
          >
            Add New Student
          </button>
        </form>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default AddStudent
