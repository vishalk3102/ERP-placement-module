import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { storage } from '../../../firebase/config'
import { baseApiURL } from '../../../baseUrl'
import { FiSearch, FiUpload, FiX } from 'react-icons/fi'
import { getFaculty, updateFaculty } from '../../../Redux/Actions/adminAction'
import { useDispatch, useSelector } from 'react-redux'
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
  const [branch, setBranch] = useState('')
  const [post, setPost] = useState('')
  const [experience, setExperience] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading, faculty, error } = useSelector(state => state.admin)

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
      setBranch(faculty.branch)
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
    setBranch('')
    setPost('')
    setExperience('')
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
      branch
    }
    setId(faculty._id)
    dispatch(updateFaculty(formData, id))
    navigate('/admin/home')
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
      {search && id && (
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
          {/* <div className="w-[40%]">
            <label htmlFor="file" className="leading-7 text-sm ">
              Select New Profile
            </label>
            <label
              htmlFor="file"
              className="px-2 bg-blue-50 py-3 rounded-sm text-base w-full flex justify-center items-center cursor-pointer"
            >
              Upload
              <span className="ml-2">
                <FiUpload />
              </span>
            </label>
            <input
              hidden
              type="file"
              id="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          {data.profile && (
            <div className="w-full flex justify-center items-center">
              <img src={data.profile} alt="student" className="h-36" />
            </div>
          )} */}
          <button
            type='submit'
            className='bg-blue-500 px-6 py-3 rounded-sm mb-6 text-white'
          >
            Update Faculty
          </button>
        </form>
      )}
    </div>
  )
}

export default EditFaculty
