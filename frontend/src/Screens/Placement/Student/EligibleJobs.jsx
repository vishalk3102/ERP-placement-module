import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'
import Box from '@mui/material/Box'
import SideNavbar from './SideNavbar'
import { IoIosAdd } from 'react-icons/io'
import { MdEdit } from 'react-icons/md'
import { MdDelete } from 'react-icons/md'
import { IoEye } from 'react-icons/io5'
import { getEligibleJobPostings } from '../../../Redux/Actions/placementAction'

const EligibleJobs = () => {
  const dispatch = useDispatch()

  const { loading, eligibleCompanies, error, message } = useSelector(
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
    dispatch(getEligibleJobPostings())
  }, [dispatch, message, error])

  return (
    <>
      {/* <MetaData title='Orders' /> */}
      <section id='Orders' className='w-full h-full  mt-20'>
        <Box sx={{ display: 'flex', marginTop: '5rem' }}>
          <SideNavbar />
          <div className='max-w-[1200px] w-[100%] mx-auto my-10'>
            <h2
              className='text-[#000] text-[2.5rem] font-bold
              text-center uppercase p-2 mt-5'
            >
              Eligible Jobs
            </h2>
            <div className='overflow-auto'>
              <table className='table-auto border-solid border-2 border-black border-collapse rounded mx-auto my-5'>
                <thead>
                  <tr className='w-[100%] border-solid border-2 border-black'>
                    <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400  border border-slate-900 p-3 uppercase text-center'>
                      S.No
                    </th>
                    <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center'>
                      Company Name
                    </th>
                    <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center'>
                      Title
                    </th>
                    <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center'>
                      Eligible Course
                    </th>
                    <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center'>
                      Qualifications
                    </th>
                    <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center'>
                      Description
                    </th>
                    <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center'>
                      Package
                    </th>
                    <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center'>
                      Location
                    </th>
                    <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center'>
                      Registration
                    </th>
                    <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center'>
                      deadline
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border border-slate-900 '>
                    <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                      1
                    </td>
                    <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                      Contata Solution
                    </td>
                    <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                      Software Developer
                    </td>
                    <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                      B-tech(CS) & MCA(2024 passing out batch only)
                    </td>
                    <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                      10th-85% ,12th-85% ,B-tech-85%
                    </td>
                    <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Nihil, animi!
                    </td>
                    <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                      Rs 4.5LPA
                    </td>
                    <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                      Noida
                    </td>
                    <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                      <Link to='/student/placement/eligiblejobs/apply'>
                        <button className='text-[#fff] text-[14px] font-semibold flex justify-center items-center bg-blue-500  rounded p-3 px-6 hover:bg-blue-700 ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all mx-auto'>
                          {' '}
                          Apply
                        </button>
                      </Link>
                    </td>
                    <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                      2:00PM , 25 April 2024
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Box>
      </section>
    </>
  )
}

export default EligibleJobs
