import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { FiSearch, FiUpload, FiX } from 'react-icons/fi'
import {
  getAllBranch,
  getFaculty,
  updateFaculty
} from '../../../Redux/Actions/adminAction'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../../components/Loader'
import { useNavigate } from 'react-router-dom'

const EditFaculty = () => {
  const [searchActive, setSearchActive] = useState(false)
  const [search, setSearch] = useState()
  const [id, setId] = useState()

  const [employeeId, setEmployeeId] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [gender, setGender] = useState('')
  const [department, setDepartment] = useState('')
  const [post, setPost] = useState('')
  const [experience, setExperience] = useState('')
  const [profile, setProfile] = useState()

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading, faculty, branches, error } = useSelector(
    state => state.admin
  )

  useEffect(() => {
    if (error) {
      toast.error(error)
      dispatch({ type: 'clearError' })
    }
    dispatch(getAllBranch())
  }, [dispatch, error])

  useEffect(() => {
    if (faculty) {
      setFirstName(faculty.firstName)
      setLastName(faculty.lastName)
      setEmployeeId(faculty.employeeId)
      setEmail(faculty.email)
      setPhoneNumber(faculty.phoneNumber)
      setGender(faculty.gender)
      setExperience(faculty.experience)
      setPost(faculty.post)
      setDepartment(faculty.department)
      setDepartment(faculty.profile)
    }
  }, [faculty])

  const searchFacultyHandler = e => {
    e.preventDefault()
    dispatch(getFaculty(search))
    setSearchActive(!searchActive)
  }
  const clearSearchHandler = () => {
    setSearchActive(false)
    setSearch('')
    setEmployeeId('')
    setFirstName('')
    setLastName('')
    setEmail('')
    setPhoneNumber('')
    setGender('')
    setDepartment('')
    setPost('')
    setExperience('')
    setProfile('')
  }

  const handleImage = e => {
    const file = e.target.files[0]
    setFileToBase(file)
    console.log(file)
  }

  const setFileToBase = file => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setProfile(reader.result)
    }
  }

  const updateFacultyProfile = e => {
    e.preventDefault()
    const formData = {
      employeeId,
      firstName,
      lastName,
      email,
      phoneNumber,
      gender,
      experience,
      post,
      department,
      profile
    }
    dispatch(updateFaculty(formData, employeeId))
      .then(data => {
        if (data.success) {
          toast.success('Faculty Detail updated successfully')
          navigate('/admin/home')
        }
      })
      .catch(err => {
        toast.error('Failed to Update Faculty details')
      })
    /* .then(() => {
        setEmployeeId('')
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhoneNumber('')
        setGender('')
        setDepartment('')
        setPost('')
        setExperience('')
        setProfile('')
      })
      .catch(error => {
        toast.error('Error adding Faculty')
      }) */
  }
  return (
    <div className='my-6 mx-auto w-full'>
      <form
        className='flex justify-center items-center border-2 border-blue-500 rounded w-[40%] mx-auto'
        onSubmit={searchFacultyHandler}
      >
        <input
          type='text'
          className='px-6 py-3 w-full outline-none'
          placeholder='Employee Id.'
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
        faculty && (
          <form
            onSubmit={updateFacultyProfile}
            className='w-[70%] flex justify-center items-center flex-wrap gap-6 mx-auto mt-10'
          >
            <div className='w-[40%] hidden '>
              <label htmlFor='id' className='leading-7 text-sm '>
                Id
              </label>
              <input
                type='text'
                id='id'
                value={id}
                onChange={e => setId(e.target.value)}
                className='w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              />
            </div>
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
              <label htmlFor='employeeId' className='leading-7 text-sm '>
                Enter Employee Id
              </label>
              <input
                type='number'
                id='employeeId'
                value={employeeId}
                onChange={e => setEmployeeId(e.target.value)}
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
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
              </select>
            </div>
            <div className='w-[40%]'>
              <label htmlFor='branch' className='leading-7 text-sm '>
                Select Department
              </label>
              <select
                id='branch'
                className='px-2 bg-blue-50 py-3 rounded-sm text-base w-full accent-blue-700 mt-1'
                value={department}
                onChange={e => setDepartment(e.target.value)}
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
              <label htmlFor='post' className='leading-7 text-sm '>
                POST
              </label>
              <input
                type='text'
                id='post'
                value={post}
                onChange={e => setPost(e.target.value)}
                className='w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              />
            </div>
            <div className='w-[40%]'>
              <label htmlFor='experience' className='leading-7 text-sm '>
                Experience
              </label>
              <input
                type='number'
                id='experience'
                value={experience}
                onChange={e => setExperience(e.target.value)}
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
                  alt='faculty'
                  className='h-36'
                  name='profile'
                />
              </div>
            )}
            <button
              type='submit'
              className='bg-blue-500 px-6 py-3 rounded-sm mb-6 text-white'
            >
              Update Faculty
            </button>
          </form>
        )
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default EditFaculty
