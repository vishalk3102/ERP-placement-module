import React from 'react'
import Box from '@mui/material/Box'
import SideNavbar from './SideNavbar'
import profile from './profile.jpg'
import { MdDownload } from 'react-icons/md'

const Profile = () => {
  return (
    <>
      <section id='Profile' className='w-full h-full  mt-20'>
        <Box sx={{ display: 'flex', marginTop: '5rem' }}>
          <SideNavbar />
          <div className='max-w-[1200px] w-[100%] mx-auto my-10'>
            <h2
              className='text-[#000] text-[2.5rem] font-bold
              text-center uppercase p-2 mt-5'
            >
              Profile
            </h2>
            <div className='w-[90%] mx-auto bg-gray-200 border-2 border-solid rounded-[10px] my-4'>
              <div className='flex justify-center items-center'>
                <div className='p-5 my-2'>
                  <img
                    src={profile}
                    alt=''
                    srcset=''
                    className='h-[175px] w-[175px] rounded-[50%]'
                  />
                </div>
              </div>
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
              <div className='w-[80%] mx-auto flex justify-center items-center  my-4'>
                <button className='text-[#fff] text-[14px] font-semibold flex justify-center items-center bg-blue-500  rounded p-3 hover:bg-blue-700 ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all'>
                  {' '}
                  Resume
                  <span className=''>
                    <MdDownload size={24} />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </Box>
      </section>
    </>
  )
}

export default Profile
