import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'
import { FiUpload } from 'react-icons/fi'
import Box from '@mui/material/Box'
import SideNavbar from '../SideNavbar'
import {
  getAllJobPosting,
  getJobPosting,
  updateJobPosting
} from '../../../../Redux/Actions/placementAction'
import Loader from '../../../../components/Loader'

const EditJobPost = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    dispatch(getJobPosting(params.id))
  }, [dispatch, params.id])

  const { loading, job } = useSelector(state => state.adminPlacement)

  const [companyName, setCompanyName] = useState('')
  const [title, setTitle] = useState('')
  const [eligibleCourse, setEligibleCourse] = useState('')
  const [qualifications, setQualifications] = useState('')
  const [description, setDescription] = useState('')
  const [salaryPackage, setSalaryPackage] = useState('')
  const [location, setLocation] = useState('')
  const [registrationLink, setRegistrationLink] = useState('')
  const [deadline, setDeadline] = useState('')

  useEffect(() => {
    if (job) {
      setCompanyName(job.companyName)
      setTitle(job.title)
      setEligibleCourse(job.eligibleCourse)
      setQualifications(job.qualifications)
      setDescription(job.description)
      setSalaryPackage(job.salaryPackage)
      setLocation(job.location)
      setRegistrationLink(job.registrationLink)
      setDeadline(job.deadline)
    }
  }, [job])

  const handleSubmit = e => {
    e.preventDefault()

    const formData = {
      companyName,
      title,
      eligibleCourse,
      qualifications,
      description,
      salaryPackage,
      location,
      registrationLink,
      deadline
    }
    dispatch(updateJobPosting(formData, params.id))
      .then(data => {
        if (data.success) {
          dispatch(getAllJobPosting())
          navigate('/admin/placement/jobpostings')
        }
      })
      .catch(err => {
        toast.error('Failed to update Company ')
      })
  }
  return (
    <>
      <section id='Profile' className='w-full h-full'>
        <Box sx={{ display: 'flex', marginTop: '5rem' }}>
          <SideNavbar />
          {loading === false ? (
            <div className='max-w-[1200px] w-[100%] mx-auto my-10'>
              <h2
                className='text-[#000] text-[2.5rem] font-bold
                text-center uppercase p-2 mt-5'
              >
                Edit Job Post
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
                  <label htmlFor='title' className='leading-7 text-sm '>
                    Title
                  </label>
                  <input
                    type='text'
                    id='title'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    className='w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  />
                </div>
                <div className='w-[40%]'>
                  <label
                    htmlFor='eligibleCourse'
                    className='leading-7 text-sm '
                  >
                    Eligible Course
                  </label>
                  <input
                    type='text'
                    id='eligibleCourse'
                    value={eligibleCourse}
                    onChange={e => setEligibleCourse(e.target.value)}
                    className='w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  />
                </div>
                <div className='w-[40%]'>
                  <label
                    htmlFor='qualifications'
                    className='leading-7 text-sm '
                  >
                    Qualifications
                  </label>
                  <input
                    type='text'
                    id='qualifications'
                    value={qualifications}
                    onChange={e => setQualifications(e.target.value)}
                    className='w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  />
                </div>
                <div className='w-[40%]'>
                  <label htmlFor='description' className='leading-7 text-sm '>
                    Description
                  </label>
                  <input
                    type='text'
                    id='description'
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    className='w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  />
                </div>
                <div className='w-[40%]'>
                  <label htmlFor='package' className='leading-7 text-sm '>
                    Package
                  </label>
                  <input
                    type='text'
                    id='package'
                    value={salaryPackage}
                    onChange={e => setSalaryPackage(e.target.value)}
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
                  <label
                    htmlFor='registrationLink'
                    className='leading-7 text-sm '
                  >
                    Registration Link
                  </label>
                  <input
                    type='text'
                    id='registrationLink'
                    value={registrationLink}
                    onChange={e => setRegistrationLink(e.target.value)}
                    className='w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  />
                </div>
                <div className='w-[40%]'>
                  <label htmlFor='deadline' className='leading-7 text-sm '>
                    Deadline
                  </label>
                  <input
                    type='date'
                    id='deadline'
                    value={deadline}
                    onChange={e => setDeadline(e.target.value)}
                    className='w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  />
                </div>
                <div className='w-[80%] flex justify-center items-center'>
                  <button
                    type='submit'
                    className='bg-blue-500 px-6 py-3 rounded-sm mb-6 text-white'
                  >
                    Update Post Job
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <Loader />
          )}
        </Box>
      </section>
    </>
  )
}

export default EditJobPost
