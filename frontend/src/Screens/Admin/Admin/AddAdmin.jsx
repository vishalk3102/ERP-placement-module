import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addAdmin } from '../../../Redux/Actions/adminAction'
import toast from 'react-hot-toast'
import { FiUpload } from 'react-icons/fi'
import MetaData from '../../../components/MetaData'

const AddAdmin = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [employeeId, setEmployeeId] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [gender, setGender] = useState('')
  const [profile, setProfile] = useState()

  const dispatch = useDispatch()

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

  const addAdminProfile = e => {
    e.preventDefault()
    const formData = {
      firstName,
      lastName,
      employeeId,
      email,
      phoneNumber,
      gender,
      profile
    }

    dispatch(addAdmin(formData))
      .then(data => {
        if (data.success) {
          toast.success('Admin Added successfully')
          setEmployeeId('')
          setFirstName('')
          setLastName('')
          setEmail('')
          setPhoneNumber('')
          setGender('')
          setProfile('')
        }
      })
      .catch(error => {
        toast.error('Error adding Admin')
      })
  }

  return (
    <>
      <MetaData title='Admin' />
      <form
        onSubmit={addAdminProfile}
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
            {' '}
            <option defaultValue>-- Select --</option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
          </select>
        </div>
        <div className='w-[80%]'>
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
            <img src={profile} alt='admin' className='h-36' name='profile' />
          </div>
        )}
        <button
          type='submit'
          className='bg-blue-500 px-6 py-3 rounded-sm my-6 text-white'
        >
          Add New Admin
        </button>
      </form>
    </>
  )
}

export default AddAdmin
