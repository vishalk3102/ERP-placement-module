import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import SideNavbar from '../SideNavbar'
import { IoIosAdd } from 'react-icons/io'
import { MdEdit } from 'react-icons/md'
import { MdDelete } from 'react-icons/md'
import { IoEye } from 'react-icons/io5'
import {
  deleteJobPosting,
  getAllJobPosting
} from '../../../../Redux/Actions/placementAction'
import Loader from '../../../../components/Loader'
import Heading from '../../../../components/Heading'
import MetaData from '../../../../components/MetaData'

const JobPosting = () => {
  const dispatch = useDispatch()

  const { loading, jobs } = useSelector(state => state.adminPlacement)

  useEffect(() => {
    dispatch(getAllJobPosting())
  }, [dispatch])

  const deleteHandler = id => {
    dispatch(deleteJobPosting(id))
  }

  return (
    <>
      <MetaData title='Job Post' />
      <section id='Job-Post ' className='w-full h-full  mt-20'>
        <Box sx={{ display: 'flex', marginTop: '5rem' }}>
          <SideNavbar />
          {loading === false ? (
            <div className='max-w-[1200px] w-[100%] mx-auto my-10'>
              <Heading title={` Job post listing `} />
              <div className='flex justify-end mt-8'>
                <Link to='/admin/placement/jobposting/create'>
                  <button className='text-[#fff] text-[14px] font-semibold flex justify-center items-center bg-blue-500  rounded p-3 hover:bg-blue-700 ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all'>
                    {' '}
                    Create Job Post{' '}
                    <span className=''>
                      <IoIosAdd size={24} />
                    </span>
                  </button>
                </Link>
              </div>
              <div className='overflow-auto'>
                <table className='table-auto  border-collapse rounded mx-auto my-5'>
                  <thead>
                    <tr className='w-[100%] bg-blue-300 '>
                      <th className='text-[0.8rem] md:text-[1.2rem] font-bold  border border-slate-900 p-3 uppercase text-center'>
                        S.No
                      </th>
                      <th className='text-[0.8rem] md:text-[1.2rem] font-bold border border-slate-900 p-3  uppercase text-center'>
                        Company Name
                      </th>
                      <th className='text-[0.8rem] md:text-[1.2rem] font-bold border border-slate-900 p-3  uppercase text-center'>
                        Title
                      </th>
                      <th className='text-[0.8rem] md:text-[1.2rem] font-bold border border-slate-900 p-3  uppercase text-center'>
                        Eligible Course
                      </th>
                      <th className='text-[0.8rem] md:text-[1.2rem] font-bold border border-slate-900 p-3  uppercase text-center'>
                        Qualifications
                      </th>
                      <th className='text-[0.8rem] md:text-[1.2rem] font-bold border border-slate-900 p-3  uppercase text-center'>
                        Description
                      </th>
                      <th className='text-[0.8rem] md:text-[1.2rem] font-bold border border-slate-900 p-3  uppercase text-center'>
                        Package
                      </th>
                      <th className='text-[0.8rem] md:text-[1.2rem] font-bold border border-slate-900 p-3  uppercase text-center'>
                        Location
                      </th>
                      <th className='text-[0.8rem] md:text-[1.2rem] font-bold border border-slate-900 p-3  uppercase text-center'>
                        Registration Link
                      </th>
                      <th className='text-[0.8rem] md:text-[1.2rem] font-bold border border-slate-900 p-3  uppercase text-center'>
                        deadline
                      </th>
                      <th className='text-[0.8rem] md:text-[1.2rem] font-bold border border-slate-900 p-3  uppercase text-center'>
                        View
                      </th>
                      <th className='text-[0.8rem] md:text-[1.2rem] font-bold border border-slate-900 p-3  uppercase text-center'>
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {jobs &&
                      jobs.map((i, index) => {
                        return (
                          <tr
                            className='bg-blue-50 border  border-slate-900 '
                            key={index}
                          >
                            <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                              (index+1)
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                              {i.companyName}
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                              {i.title}
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                              {i.eligibleCourse}
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                              {i.qualifications}
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                              {i.description}
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                              {i.salaryPackage}
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                              {i.location}
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1  text-center'>
                              {i.registrationLink}
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                              {i.deadline}
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center '>
                              <Link
                                to={`/admin/placement/jobposting/view/${i._id}`}
                                className='flex justify-center items-center'
                              >
                                <IoEye size={24} />
                              </Link>
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                              <Link
                                to={`/admin/placement/jobposting/edit/${i._id}`}
                              >
                                <button className='p-1 m-1'>
                                  <MdEdit size={24} />
                                </button>
                              </Link>
                              <button
                                className='p-1 m-1'
                                onClick={() => deleteHandler(i._id)}
                              >
                                <MdDelete size={24} />
                              </button>
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

export default JobPosting
