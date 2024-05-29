import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import SideNavbar from '../SideNavbar'
import { MdEdit } from 'react-icons/md'
import { MdDelete } from 'react-icons/md'
import {
  deleteStudent,
  getAllPlacedStudent
} from '../../../../Redux/Actions/placementAction'
import Loader from '../../../../components/Loader'
import Heading from '../../../../components/Heading'
import MetaData from '../../../../components/MetaData'
import { IoIosAdd } from 'react-icons/io'

const Student = () => {
  const dispatch = useDispatch()

  const { loading, students, error, message } = useSelector(
    state => state.adminPlacement
  )

  useEffect(() => {
    dispatch(getAllPlacedStudent())
  }, [dispatch, message, error])

  const deleteHandler = id => {
    dispatch(deleteStudent(id))
  }

  return (
    <>
      <MetaData title='Placed Student' />
      <section className='w-full h-full  mt-20'>
        <Box sx={{ display: 'flex', marginTop: '5rem' }}>
          <SideNavbar />
          {loading === false ? (
            <div className='max-w-[1200px] w-[100%] mx-auto my-10'>
              <Heading title={` Placed Student List`} />
              <div className='flex justify-end mt-12'>
                <Link to='/admin/placement/placedstudents/add'>
                  <button className='text-[#fff] text-[14px] font-semibold flex justify-center items-center bg-blue-500  rounded p-3 hover:bg-blue-700 ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all'>
                    {' '}
                    Add Details{' '}
                    <span className=''>
                      <IoIosAdd size={24} />
                    </span>
                  </button>
                </Link>
              </div>
              <div className='overflow-auto mt-4'>
                <table className='table-auto  border-collapse rounded mx-auto'>
                  <thead>
                    <tr className='w-[100%]  bg-blue-200'>
                      <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-blue-200  border border-slate-900 p-3 uppercase text-center'>
                        S.No
                      </th>
                      <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-blue-200  border border-slate-900 p-3 uppercase text-center'>
                        Enrollment No
                      </th>
                      <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-blue-200 border border-slate-900 p-3  uppercase text-center'>
                        Student Name
                      </th>
                      <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-blue-200 border border-slate-900 p-3  uppercase text-center'>
                        Email
                      </th>
                      <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-blue-200 border border-slate-900 p-3  uppercase text-center'>
                        Phone Number
                      </th>
                      <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-blue-200 border border-slate-900 p-3  uppercase text-center'>
                        Company Placed
                      </th>
                      <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-blue-200 border border-slate-900 p-3  uppercase text-center'>
                        Package
                      </th>
                      <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-blue-200 border border-slate-900 p-3  uppercase text-center'>
                        University
                      </th>
                      <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-blue-200 border border-slate-900 p-3  uppercase text-center'>
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {students &&
                      students.map(i => {
                        return (
                          <tr className='border border-slate-900 bg-blue-50 '>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal   border border-slate-900 p-1 capitalize text-center'>
                              1
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal   border border-slate-900 p-1 capitalize text-center'>
                              {i.academics.enrollmentNo}
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal   border border-slate-900 p-1 capitalize text-center'>
                              {i.firstName} {i.lastName}
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal   border border-slate-900 p-1  text-center'>
                              {i.email}
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal   border border-slate-900 p-1 capitalize text-center'>
                              {i.phoneNumber}
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal   border border-slate-900 p-1 capitalize text-center'>
                              {i.phoneNumber}
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal   border border-slate-900 p-1 capitalize text-center'>
                              {i.phoneNumber}
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal   border border-slate-900 p-1 capitalize text-center'>
                              {i.academics.university}
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal  border border-slate-900 p-1 capitalize text-center'>
                              <Link
                                to={`/admin/placement/placedstudents/edit/${i._id}`}
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

export default Student
