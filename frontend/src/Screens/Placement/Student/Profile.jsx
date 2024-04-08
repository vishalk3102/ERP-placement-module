import React from 'react'
import Box from '@mui/material/Box'
import SideNavbar from './SideNavbar'
import profile from './profile.jpg'
import { MdDownload } from 'react-icons/md'

const Profile = () => {
  return (
    <>
      <section id='Profile' className='w-full h-full'>
        <Box sx={{ display: 'flex', marginTop: '5rem' }}>
          <SideNavbar />
          <div className='max-w-[1200px] w-[100%] h-[100%] mx-auto flex justify-center items-center my-20 py-10 '>
            <div className=' w-[80%] md:w-[50%]  border-solid border-2 border-black rounded-[10px] bg-gray-100'>
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
              <div className='flex flex-col justify-center'>
                <div className='md:ml-10'>
                  <h4 className='text-[1rem] font-bold text-left capitalize '>
                    Personal Details :
                  </h4>
                  <ul className='p-2 ml-4  text-center md:text-left'>
                    <li className='text-[0.8rem] md:text-[1rem] font-semibold p-2 my-1'>
                      full Name :
                      <span className='font-medium p-1'>Vishal Kumar</span>
                    </li>
                    <li className='text-[0.8rem] md:text-[1rem] font-semibold p-2 my-1'>
                      Date of birth :
                      <span className='font-medium p-1'>31/01/2002</span>
                    </li>
                    <li className='text-[0.8rem] md:text-[1rem] font-semibold p-2 my-1'>
                      Gender :<span className='font-medium p-1'>Male</span>
                    </li>
                    <li className='text-[0.8rem] md:text-[1rem] font-semibold p-2 my-1'>
                      Email :
                      <span className='font-medium p-1'>
                        vishal.k3102@gmail.com
                      </span>
                    </li>
                    <li className='text-[0.8rem] md:text-[1rem] font-semibold p-2 my-1'>
                      Phone Number :
                      <span className='font-medium p-1'>8459126643</span>
                    </li>
                  </ul>
                </div>
                <div className='md:ml-10'>
                  <h4 className='text-[1rem] font-bold text-left capitalize '>
                    Academic Details :
                  </h4>
                  <ul className='p-2 ml-4  text-center md:text-left'>
                    <li className='text-[0.8rem] md:text-[1rem] font-semibold p-2 my-1'>
                      Enrollment No :
                      <span className='font-medium p-1'>GE2020021657</span>
                    </li>
                    <li className='text-[0.8rem] md:text-[1rem] font-semibold p-2 my-1'>
                      University Roll No :
                      <span className='font-medium p-1'>2017132</span>
                    </li>
                    <li className='text-[0.8rem] md:text-[1rem] font-semibold p-2 my-1'>
                      University :<span className='font-medium p-1'>GEU</span>
                    </li>
                    <li className='text-[0.8rem] md:text-[1rem] font-semibold p-2 my-1'>
                      Course :<span className='font-medium p-1'>B-Tech</span>
                    </li>
                    <li className='text-[0.8rem] md:text-[1rem] font-semibold p-2 my-1'>
                      Branch :<span className='font-medium p-1'>CSE</span>
                    </li>
                    <li className='text-[0.8rem] md:text-[1rem] font-semibold p-2 my-1'>
                      10th Percentage :
                      <span className='font-medium p-1'>95%</span>
                    </li>
                    <li className='text-[0.8rem] md:text-[1rem] font-semibold p-2 my-1'>
                      10th Completion year :
                      <span className='font-medium p-1'>2017</span>
                    </li>
                    <li className='text-[0.8rem] md:text-[1rem] font-semibold p-2 my-1'>
                      12th Completion year :
                      <span className='font-medium p-1'>2019</span>
                    </li>
                    <li className='text-[0.8rem] md:text-[1rem] font-semibold p-2 my-1'>
                      B-Tech Average CGPA :
                      <span className='font-medium p-1'>8.67</span>
                    </li>
                    <li className='text-[0.8rem] md:text-[1rem] font-semibold p-2 my-1'>
                      Graduation Year :
                      <span className='font-medium p-1'>2024</span>
                    </li>
                  </ul>
                </div>
                <div className='flex  my-4  ml-10'>
                  <button className='text-[#fff] text-[14px] font-semibold flex justify-center items-center bg-blue-500  rounded p-3 hover:bg-blue-700 ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all'>
                    {' '}
                    Uploaded Resume
                    <span className=''>
                      <MdDownload size={24} />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </section>
    </>
  )
}

export default Profile
