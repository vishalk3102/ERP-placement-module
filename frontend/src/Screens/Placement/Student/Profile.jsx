import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'
import Box from '@mui/material/Box'
import SideNavbar from './SideNavbar'
import profile from './profile.jpg'
import { MdDownload } from 'react-icons/md'
import { getPlacementProfile } from '../../../Redux/Actions/placementAction'
import Loader from '../../../components/Loader'

const Profile = () => {
  const dispatch = useDispatch()
  const params = useParams()

  const { loading, user, error, message } = useSelector(
    state => state.studentPlacement
  )

  useEffect(() => {
    if (message) {
      toast.success(message)
      dispatch({ type: 'clearMessage' })
    }
    if (error) {
      toast.error(error)
      dispatch({ type: 'clearError' })
    }
    dispatch(getPlacementProfile(params.id))
  }, [dispatch, message, error, params.id])

  return (
    <>
      <section id='Profile' className='w-full h-full  mt-20'>
        <Box sx={{ display: 'flex', marginTop: '5rem' }}>
          <SideNavbar />
          {loading === false ? (
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
                          {user.firstName}
                          {user.lastName}
                        </span>
                      </li>
                      <li className='text-[14px] md:text-[1rem] font-semibold capitalize p-1 md:p-2'>
                        {' '}
                        Date of Birth :
                        <span className='text-[14px] md:text-[0.9rem] font-normal '>
                          {user.dateOfBirth}
                        </span>
                      </li>
                      <li className='text-[14px] md:text-[1rem] font-semibold capitalize p-1 md:p-2'>
                        {' '}
                        Gender :
                        <span className='text-[14px] md:text-[0.9rem] font-normal '>
                          {user.gender}
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
                          {user.email}
                        </span>
                      </li>
                      <li className='text-[14px] md:text-[1rem] font-semibold capitalize p-1 md:p-2'>
                        {' '}
                        Phone Number :
                        <span className='text-[14px] md:text-[0.9rem] font-normal '>
                          {user.phoneNumber}
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
                          {user.academics.enrollmentNo}
                        </span>
                      </li>

                      <li className='text-[14px] md:text-[1rem] font-semibold capitalize p-1 md:p-2'>
                        {' '}
                        University :
                        <span className='text-[14px] md:text-[0.9rem] font-normal '>
                          {user.academics.university}
                        </span>
                      </li>

                      <li className='text-[14px] md:text-[1rem] font-semibold capitalize p-1 md:p-2'>
                        {' '}
                        Branch :
                        <span className='text-[14px] md:text-[0.9rem] font-normal '>
                          {user.academics.branch}
                        </span>
                      </li>

                      <li className='text-[14px] md:text-[1rem] font-semibold capitalize p-1 md:p-2'>
                        {' '}
                        HighSchool Percentage :
                        <span className='text-[14px] md:text-[0.9rem] font-normal '>
                          {user.academics.percentageHighSchool}
                        </span>
                      </li>

                      <li className='text-[14px] md:text-[1rem] font-semibold capitalize p-1 md:p-2'>
                        {' '}
                        Intermediate Percentage :
                        <span className='text-[14px] md:text-[0.9rem] font-normal '>
                          {user.academics.percentageIntermediate}
                        </span>
                      </li>

                      <li className='text-[14px] md:text-[1rem] font-semibold capitalize p-1 md:p-2'>
                        {' '}
                        B-Tech Aggregate :
                        <span className='text-[14px] md:text-[0.9rem] font-normal '>
                          {user.academics.CGPA}
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
                          {user.academics.universityRollNo}
                        </span>
                      </li>
                      <li className='text-[14px] md:text-[1rem] font-semibold capitalize p-1 md:p-2'>
                        {' '}
                        Course :
                        <span className='text-[14px] md:text-[0.9rem] font-normal '>
                          {user.academics.course}
                        </span>
                      </li>
                      <li className='text-[14px] md:text-[1rem] font-semibold capitalize p-1 md:p-2'>
                        {' '}
                        Semester :
                        <span className='text-[14px] md:text-[0.9rem] font-normal '>
                          {user.academics.semester}
                        </span>
                      </li>
                      <li className='text-[14px] md:text-[1rem] font-semibold capitalize p-1 md:p-2'>
                        {' '}
                        HighSchool Completion Year :
                        <span className='text-[14px] md:text-[0.9rem] font-normal '>
                          {user.academics.yearOfCompletionHighSchool}
                        </span>
                      </li>
                      <li className='text-[14px] md:text-[1rem] font-semibold capitalize p-1 md:p-2'>
                        {' '}
                        Intermediate Completion Year :
                        <span className='text-[14px] md:text-[0.9rem] font-normal '>
                          {user.academics.yearOfCompletionIntermediate}
                        </span>
                      </li>
                      <li className='text-[14px] md:text-[1rem] font-semibold capitalize p-1 md:p-2'>
                        {' '}
                        Graduation Year :
                        <span className='text-[14px] md:text-[0.9rem] font-normal '>
                          {user.academics.graduationYear}
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
          ) : (
            <Loader />
          )}
        </Box>
      </section>
    </>
  )
}

export default Profile
