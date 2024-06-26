import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'
import Box from '@mui/material/Box'
import SideNavbar from './SideNavbar'
import { IoEye } from 'react-icons/io5'
import { getEligibleJobPostings } from '../../../Redux/Actions/placementAction'
import Loader from '../../../components/Loader'
import Heading from '../../../components/Heading'
import MetaData from '../../../components/MetaData'

const EligibleJobs = () => {
  const dispatch = useDispatch()

  const { loading, eligibleCompanies, error, message } = useSelector(
    state => state.studentPlacement
  )

  useEffect(() => {
    dispatch(getEligibleJobPostings())
  }, [dispatch, message, error])

  return (
    <>
      <MetaData title='Eligible Jobs' />
      <section id='eligibleJobs' className='w-full h-full  mt-20'>
        <Box sx={{ display: 'flex', marginTop: '5rem' }}>
          <SideNavbar />
          {loading === false ? (
            <div className='max-w-[1200px] w-[100%] mx-auto my-10'>
              <Heading title={`ELIGIBLE JOBS`} />

              <div className='overflow-auto mt-4'>
                <table className='table-auto border-collapse rounded mx-auto my-5'>
                  <thead>
                    <tr className='w-[100%] '>
                      <th className='text-[0.8rem] md:text-[1rem] font-bold bg-blue-300  border border-slate-900 p-3 uppercase text-center'>
                        S.No
                      </th>
                      <th className='text-[0.8rem] md:text-[1rem] font-bold bg-blue-300 border border-slate-900 p-3  uppercase text-center'>
                        Company Name
                      </th>
                      <th className='text-[0.8rem] md:text-[1rem] font-bold bg-blue-300 border border-slate-900 p-3  uppercase text-center'>
                        Title
                      </th>
                      <th className='text-[0.8rem] md:text-[1rem] font-bold bg-blue-300 border border-slate-900 p-3  uppercase text-center'>
                        Eligible Course
                      </th>
                      <th className='text-[0.8rem] md:text-[1rem] font-bold bg-blue-300 border border-slate-900 p-3  uppercase text-center'>
                        Qualifications
                      </th>
                      <th className='text-[0.8rem] md:text-[1rem] font-bold bg-blue-300 border border-slate-900 p-3  uppercase text-center'>
                        Description
                      </th>
                      <th className='text-[0.8rem] md:text-[1rem] font-bold bg-blue-300 border border-slate-900 p-3  uppercase text-center'>
                        Package
                      </th>
                      <th className='text-[0.8rem] md:text-[1rem] font-bold bg-blue-300 border border-slate-900 p-3  uppercase text-center'>
                        Location
                      </th>
                      <th className='text-[0.8rem] md:text-[1rem] font-bold bg-blue-300 border border-slate-900 p-3  uppercase text-center'>
                        Registration
                      </th>
                      <th className='text-[0.8rem] md:text-[1rem] font-bold bg-blue-300 border border-slate-900 p-3  uppercase text-center'>
                        deadline
                      </th>
                      <th className='text-[0.8rem] md:text-[1rem] font-bold bg-blue-300 border border-slate-900 p-3  uppercase text-center'>
                        View
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {eligibleCompanies &&
                      eligibleCompanies.map((i, index) => {
                        return (
                          <tr className='border border-slate-900 '>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal bg-blue-50 border border-slate-900 p-1 capitalize text-center'>
                              1
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal bg-blue-50 border border-slate-900 p-1 capitalize text-center'>
                              {i.companyName}
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal bg-blue-50 border border-slate-900 p-1 capitalize text-center'>
                              {i.title}
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal bg-blue-50 border border-slate-900 p-1 capitalize text-center'>
                              {i.eligibleCourse}
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal bg-blue-50 border border-slate-900 p-1 capitalize text-center'>
                              {i.qualifications}
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal bg-blue-50 border border-slate-900 p-1 capitalize text-center'>
                              {i.description}
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal bg-blue-50 border border-slate-900 p-1 capitalize text-center'>
                              {i.salaryPackage}
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal bg-blue-50 border border-slate-900 p-1 capitalize text-center'>
                              {i.location}
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal bg-blue-50 border border-slate-900 p-1 capitalize text-center'>
                              <Link
                                to={`/student/placement/eligiblejob/apply/${i._id}`}
                              >
                                <button className='text-[#fff] text-[14px] font-semibold flex justify-center items-center bg-blue-500  rounded p-3 px-6 hover:bg-blue-700 ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all mx-auto'>
                                  {' '}
                                  Apply
                                </button>
                              </Link>
                            </td>

                            <td className='text-[0.7rem] md:text-[1rem] font-normal bg-blue-50 border border-slate-900 p-1 capitalize text-center'>
                              {i.deadline}
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal bg-blue-50 border border-slate-900 p-1 capitalize text-center '>
                              <Link
                                to={`/student/placement/eligiblejob/view/${i._id}`}
                                className='flex justify-center items-center'
                              >
                                <IoEye size={24} />
                              </Link>
                            </td>
                          </tr>
                        )
                      })}
                  </tbody>
                </table>
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

export default EligibleJobs
