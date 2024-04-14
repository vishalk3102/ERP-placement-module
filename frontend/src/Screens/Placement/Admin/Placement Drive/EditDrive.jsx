import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'
import { FiUpload } from 'react-icons/fi'
import Box from '@mui/material/Box'
import SideNavbar from '../SideNavbar'
import Loader from '../../../../components/Loader'
import {
  createDrive,
  getDrive,
  updateDrive
} from '../../../../Redux/Actions/placementAction'

const EditJobPost = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    dispatch(getDrive(params.id))
  }, [dispatch, params.id])

  const { loading, drive } = useSelector(state => state.adminPlacement)

  const [companyName, setCompanyName] = useState('')
  const [location, setLocation] = useState('')
  const [date, setDate] = useState('')

  useEffect(() => {
    if (drive) {
      setCompanyName(drive.companyName)
      setLocation(drive.location)
      setDate(drive.deadline)
    }
  }, [drive])

  const handleSubmit = e => {
    e.preventDefault()
    console.log()

    const formData = {
      companyName,
      location,
      Date
    }

    dispatch(updateDrive(formData))
    navigate('/admin/placement/drive')
  }

  return (
    <>
      <section id='Profile' className='w-full h-full'>
        <Box sx={{ display: 'flex', marginTop: '5rem' }}>
          <SideNavbar />
          <div className='max-w-[1200px] w-[100%] mx-auto my-10'>
            <h2
              className='text-[#000] text-[2.5rem] font-bold
              text-center uppercase p-2 mt-5'
            >
              Edit Drive
            </h2>
            <form
              onSubmit={handleSubmit}
              className='w-[100%] flex justify-center items-center flex-wrap gap-6 mx-auto mt-10'
            >
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
                <label htmlFor='location' className='leading-7 text-sm '>
                  Location
                </label>
                <input
                  type='text'
                  id='location'
                  value={location}
                  onChange={e => setLocation(e.target.value)}
                  className='w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>

              <div className='w-[40%]'>
                <label htmlFor='deadline' className='leading-7 text-sm '>
                  Date
                </label>
                <input
                  type='date'
                  id='deadline'
                  value={date}
                  onChange={e => setDate(e.target.value)}
                  className='w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>
              <div className='w-[80%] flex justify-center items-center'>
                <button
                  type='submit'
                  className='bg-blue-500 px-6 py-3 rounded-sm mb-6 text-white'
                >
                  Update Drive
                </button>
              </div>
            </form>
          </div>
        </Box>
      </section>
    </>
  )
}

export default EditJobPost
