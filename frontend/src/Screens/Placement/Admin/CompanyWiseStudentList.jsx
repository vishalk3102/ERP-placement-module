import React, { useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'
import Box from '@mui/material/Box'
import SideNavbar from './SideNavbar'
import { MdDownload } from 'react-icons/md'
import { getApplicationsByCompany } from '../../../Redux/Actions/placementAction'
import Loader from '../../../components/Loader'
import Heading from '../../../components/Heading'
import MetaData from '../../../components/MetaData'

const CompanyWiseStudentList = () => {
  const dispatch = useDispatch()
  const params = useParams()

  const { loading, count, companyName, applications, error, message } =
    useSelector(state => state.adminPlacement)

  useEffect(() => {
    if (message) {
      toast.success(message)
      dispatch({ type: 'clearMessage' })
    }
    if (error) {
      toast.error(error)
      dispatch({ type: 'clearError' })
    }
    dispatch(getApplicationsByCompany(params.id))
  }, [dispatch, message, error, params.id])

  return (
    <>
      <MetaData title='Company Wise' />
      <section id='company-wise-data' className='w-full h-full  mt-20'>
        <Box sx={{ display: 'flex', marginTop: '5rem' }}>
          <SideNavbar />
          {loading === false ? (
            <div className='max-w-[1200px] w-[100%] mx-auto my-10'>
              <Heading title={`${companyName} COMPANY WISE LIST`} />
              {count > 0 ? (
                <div className='flex justify-end w-[100%] mx-auto mt-12'>
                  <button className='text-[#fff] text-[14px] font-semibold flex justify-center items-center bg-blue-500  rounded p-3 hover:bg-blue-700 ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all'>
                    {' '}
                    Download CSV
                    <span className=''>
                      <MdDownload size={24} />
                    </span>
                  </button>
                </div>
              ) : (
                ''
              )}
              {count > 0 ? (
                <div className='overflow-auto'>
                  <table className='w-[100%] border-solid border-2 border-black border-collapse rounded mx-auto my-5'>
                    <thead>
                      <tr className='w-[100%] border-solid border-2 border-black'>
                        <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400  border border-slate-900 p-3 uppercase text-center'>
                          S.NO
                        </th>

                        <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center'>
                          Student Name
                        </th>

                        <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center'>
                          Email
                        </th>
                        <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center'>
                          Phone Number
                        </th>
                        <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center'>
                          University
                        </th>
                        <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center'>
                          Course
                        </th>
                        <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center'>
                          Branch
                        </th>
                        <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center'>
                          University Roll No
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {applications &&
                        applications.map(i => {
                          return (
                            <tr className='border border-slate-900 '>
                              <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                                1
                              </td>

                              <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                                {`${i.firstName} ${i.lastName}`}
                              </td>

                              <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1  text-center'>
                                {i.email}
                              </td>
                              <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                                {i.phoneNumber}
                              </td>
                              <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                                {i.university}
                              </td>
                              <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                                {i.course}
                              </td>
                              <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                                {i.branch}
                              </td>
                              <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                                {i.universityRollNo}
                              </td>
                            </tr>
                          )
                        })}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className='text-center text-gray-500 mt-4'>
                  No students have registered yet.
                </p>
              )}
            </div>
          ) : (
            <Loader />
          )}
        </Box>
      </section>
    </>
  )
}

export default CompanyWiseStudentList
