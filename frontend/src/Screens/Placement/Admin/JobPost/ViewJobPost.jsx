import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'
import Box from '@mui/material/Box'
import SideNavbar from '../SideNavbar'
import { getJobPosting } from '../../../../Redux/Actions/placementAction'

const ViewJobPost = () => {
  const dispatch = useDispatch()
  const params = useParams()

  const { loading, job } = useSelector(state => state.jobs)

  useEffect(() => {
    dispatch(getJobPosting(params.id))
  }, [dispatch, params.id])

  return (
    <section id='Student' className='w-full h-full  mt-20'>
      <Box sx={{ display: 'flex', marginTop: '5rem' }}>
        <SideNavbar />
        <div className='max-w-[1200px] w-[100%] mx-auto my-10'>
          <h2 className='text-[#000] text-[2.5rem] font-bold text-center uppercase p-2 mt-5'>
            Job Post Details
          </h2>
          <div className='w-[90%] mx-auto bg-gray-200 border-2 border-solid rounded-[10px] my-4'>
            <div className='grid grid-cols-2 md:grid-cols-4 w-[80%] mx-auto my-2'>
              <div className='col-span-1 md:col-span-2 '>
                <ul className='flex flex-col justify-center items-start p-4'>
                  <li className='text-[14px] md:text-[1rem] font-semibold capitalize p-1 md:p-2'>
                    {' '}
                    Company Name :
                    <span className='text-[14px] md:text-[0.9rem] font-normal '>
                      Contata Solutions
                    </span>
                  </li>
                  <li className='text-[14px] md:text-[1rem] font-semibold capitalize p-1 md:p-2'>
                    {' '}
                    Title :
                    <span className='text-[14px] md:text-[0.9rem] font-normal '>
                      Associate Software Developers
                    </span>
                  </li>
                  <li className='text-[14px] md:text-[1rem] font-semibold capitalize p-1 md:p-2'>
                    {' '}
                    Eligible Course :
                    <span className='text-[14px] md:text-[0.9rem] font-normal '>
                      B-Tech/MCA
                    </span>
                  </li>
                  <li className='text-[14px] md:text-[1rem] font-semibold capitalize p-1 md:p-2'>
                    {' '}
                    Qualifications :
                    <span className='text-[14px] md:text-[0.9rem] font-normal '>
                      10th : 75% ,12th : 75% ,B-Tech : 75%,No active Backlog
                    </span>
                  </li>
                  <li className='text-[14px] md:text-[1rem] font-semibold capitalize p-1 md:p-2'>
                    {' '}
                    Description :
                    <span className='text-[14px] md:text-[0.9rem] font-normal '>
                      Its an american company deals in petroleum and natural gas
                      sector
                    </span>
                  </li>
                </ul>
              </div>
              <div className='col-span-1 md:col-span-2 '>
                <ul className='flex flex-col justify-center items-start p-4'>
                  <li className='text-[14px] md:text-[1rem] font-semibold capitalize p-1 md:p-2'>
                    {' '}
                    Salary Package :
                    <span className='text-[14px] md:text-[0.9rem] font-normal '>
                      Rs 4.5LPA
                    </span>
                  </li>
                  <li className='text-[14px] md:text-[1rem] font-semibold capitalize p-1 md:p-2'>
                    {' '}
                    Location :
                    <span className='text-[14px] md:text-[0.9rem] font-normal '>
                      Noida
                    </span>
                  </li>
                  <li className='text-[14px] md:text-[1rem] font-semibold capitalize p-1 md:p-2'>
                    {' '}
                    Registration Link :
                    <span className='text-[14px] md:text-[0.9rem] font-normal '>
                      www.conatata.com
                    </span>
                  </li>
                  <li className='text-[14px] md:text-[1rem] font-semibold capitalize p-1 md:p-2'>
                    {' '}
                    Deadline :
                    <span className='text-[14px] md:text-[0.9rem] font-normal '>
                      25 April 2024
                    </span>
                  </li>
                  {/* Add more fields here */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </section>
  )
}

export default ViewJobPost
