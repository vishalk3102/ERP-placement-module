import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'
import Box from '@mui/material/Box'
import SideNavbar from '../SideNavbar'
import { getStudent } from '../../../../Redux/Actions/placementAction'
import Loader from '../../../../components/Loader'

const ViewStudent = () => {
  const dispatch = useDispatch()
  const params = useParams()

  const { loading, student } = useSelector(state => state.adminPlacement)

  useEffect(() => {
    dispatch(getStudent(params.id))
  }, [dispatch, params.id])
  return (
    <>
      <section id='Student' className='w-full h-full  mt-20'>
        <Box sx={{ display: 'flex', marginTop: '5rem' }}>
          <SideNavbar />
          {loading === false ? (
            <div className='max-w-[1200px] w-[100%] mx-auto my-10'>
              <h2
                className='text-[#000] text-[2.5rem] font-bold
              text-center uppercase p-2 mt-5'
              >
                Student Details
              </h2>
              <div className='w-[90%] mx-auto bg-gray-200 border-2 border-solid rounded-[10px] my-4'>
                <div className='w-[80%]  mx-auto p-4'>
                  <h4 className='text-[16px] md:text-[1.4rem] font-bold text-left capitalize'>
                    Personal Details
                  </h4>
                </div>
                <hr className='w-[80%] mx-auto border-solid border-2 border-black' />
                <div className='grid grid-cols-2 md:grid-cols-4 w-[80%] mx-auto my-2'>
                  <div className='col-span-1 md:col-span-2 '>
                    <ul className='flex flex-col justify-center items-start p-4'>
                      <li className='text-[14px] md:text-[1rem] font-semibold capitalize p-1 md:p-2'>
                        {' '}
                        Student Name :
                        <span className='text-[14px] md:text-[0.9rem] font-normal '>
                          Vishal Kumar
                        </span>
                      </li>
                      <li className='text-[14px] md:text-[1rem] font-semibold capitalize p-1 md:p-2'>
                        {' '}
                        Date of Birth :
                        <span className='text-[14px] md:text-[0.9rem] font-normal '>
                          31 Jan 2002
                        </span>
                      </li>
                      <li className='text-[14px] md:text-[1rem] font-semibold capitalize p-1 md:p-2'>
                        {' '}
                        Gender :
                        <span className='text-[14px] md:text-[0.9rem] font-normal '>
                          Male
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className='col-span-1 md:col-span-2 '>
                    <ul className='flex flex-col justify-center items-start p-4'>
                      <li className='text-[14px] md:text-[1rem] font-semibold capitalize p-1 md:p-2'>
                        {' '}
                        Email :
                        <span className='text-[14px] md:text-[0.9rem] font-normal '>
                          vishal.k3102@gmail.com
                        </span>
                      </li>
                      <li className='text-[14px] md:text-[1rem] font-semibold capitalize p-1 md:p-2'>
                        {' '}
                        Phone Number :
                        <span className='text-[14px] md:text-[0.9rem] font-normal '>
                          8459126643
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='w-[80%]  mx-auto p-4'>
                  <h4 className='text-[16px] md:text-[1.4rem] font-bold text-left capitalize'>
                    Academic Details
                  </h4>
                </div>
                <hr className='w-[80%] mx-auto border-solid border-2 border-black' />
                <div className='grid grid-cols-2 md:grid-cols-4 w-[80%] mx-auto my-2'>
                  <div className='col-span-1 md:col-span-2 '>
                    <ul className='flex flex-col justify-center items-start p-4'>
                      <li className='text-[14px] md:text-[1rem] font-semibold capitalize p-1 md:p-2'>
                        {' '}
                        Enrollment No :
                        <span className='text-[14px] md:text-[0.9rem] font-normal '>
                          GE-202017132
                        </span>
                      </li>

                      <li className='text-[14px] md:text-[1rem] font-semibold capitalize p-1 md:p-2'>
                        {' '}
                        University :
                        <span className='text-[14px] md:text-[0.9rem] font-normal '>
                          Graphic Era University
                        </span>
                      </li>

                      <li className='text-[14px] md:text-[1rem] font-semibold capitalize p-1 md:p-2'>
                        {' '}
                        Branch :
                        <span className='text-[14px] md:text-[0.9rem] font-normal '>
                          Computer Science and Engineering
                        </span>
                      </li>

                      <li className='text-[14px] md:text-[1rem] font-semibold capitalize p-1 md:p-2'>
                        {' '}
                        HighSchool Percentage :
                        <span className='text-[14px] md:text-[0.9rem] font-normal '>
                          95%
                        </span>
                      </li>

                      <li className='text-[14px] md:text-[1rem] font-semibold capitalize p-1 md:p-2'>
                        {' '}
                        Intermediate Percentage :
                        <span className='text-[14px] md:text-[0.9rem] font-normal '>
                          91%
                        </span>
                      </li>

                      <li className='text-[14px] md:text-[1rem] font-semibold capitalize p-1 md:p-2'>
                        {' '}
                        B-Tech Aggregate :
                        <span className='text-[14px] md:text-[0.9rem] font-normal '>
                          8.67 GPA
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className='col-span-1 md:col-span-2 '>
                    <ul className='flex flex-col justify-center items-start p-4'>
                      <li className='text-[14px] md:text-[1rem] font-semibold capitalize p-1 md:p-2'>
                        {' '}
                        University Roll No :
                        <span className='text-[14px] md:text-[0.9rem] font-normal '>
                          20021657
                        </span>
                      </li>
                      <li className='text-[14px] md:text-[1rem] font-semibold capitalize p-1 md:p-2'>
                        {' '}
                        Course :
                        <span className='text-[14px] md:text-[0.9rem] font-normal '>
                          Bachelor's of Technology
                        </span>
                      </li>
                      <li className='text-[14px] md:text-[1rem] font-semibold capitalize p-1 md:p-2'>
                        {' '}
                        Semester :
                        <span className='text-[14px] md:text-[0.9rem] font-normal '>
                          8th
                        </span>
                      </li>
                      <li className='text-[14px] md:text-[1rem] font-semibold capitalize p-1 md:p-2'>
                        {' '}
                        HighSchool Completion Year :
                        <span className='text-[14px] md:text-[0.9rem] font-normal '>
                          2017
                        </span>
                      </li>
                      <li className='text-[14px] md:text-[1rem] font-semibold capitalize p-1 md:p-2'>
                        {' '}
                        Intermediate Completion Year :
                        <span className='text-[14px] md:text-[0.9rem] font-normal '>
                          2019
                        </span>
                      </li>
                      <li className='text-[14px] md:text-[1rem] font-semibold capitalize p-1 md:p-2'>
                        {' '}
                        Graduation Year :
                        <span className='text-[14px] md:text-[0.9rem] font-normal '>
                          2024
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Loader />
          )}
        </Box>
      </section>
    </>
  )
}

export default ViewStudent
