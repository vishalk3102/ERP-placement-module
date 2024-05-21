import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'
import Box from '@mui/material/Box'
import SideNavbar from '../SideNavbar'
import { MdEdit } from 'react-icons/md'
import { MdDelete } from 'react-icons/md'
import { IoEye } from 'react-icons/io5'
import {
  deleteStudent,
  getAllStudent
} from '../../../../Redux/Actions/placementAction'
import Loader from '../../../../components/Loader'
import Heading from '../../../../components/Heading'
import MetaData from '../../../../components/MetaData'

const Student = () => {
  const dispatch = useDispatch()

  const { loading, students, error, message } = useSelector(
    state => state.adminPlacement
  )

  useEffect(() => {
    dispatch(getAllStudent())
  }, [dispatch, message, error])

  const deleteHandler = id => {
    dispatch(deleteStudent(id))
  }

  return (
    <>
      <MetaData title='Student' />
      <section id='student' className='w-full h-full  mt-20'>
        <Box sx={{ display: 'flex', marginTop: '5rem' }}>
          <SideNavbar />
          {loading === false ? (
            <div className='max-w-[1200px] w-[100%] mx-auto my-10'>
              <Heading title={` Students Registered for Placement List`} />

              <div className='overflow-auto mt-12'>
                <table className='table-auto  border-collapse rounded mx-auto my-10'>
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
                        Date of birth
                      </th>
                      <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-blue-200 border border-slate-900 p-3  uppercase text-center'>
                        Gender
                      </th>
                      <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-blue-200 border border-slate-900 p-3  uppercase text-center'>
                        Email
                      </th>
                      <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-blue-200 border border-slate-900 p-3  uppercase text-center'>
                        Phone Number
                      </th>
                      <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-blue-200 border border-slate-900 p-3  uppercase text-center'>
                        University
                      </th>
                      <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-blue-200 border border-slate-900 p-3  uppercase text-center'>
                        University Roll No
                      </th>
                      <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-blue-200 border border-slate-900 p-3  uppercase text-center'>
                        Course
                      </th>
                      <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-blue-200 border border-slate-900 p-3  uppercase text-center'>
                        Branch
                      </th>
                      <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-blue-200 border border-slate-900 p-3  uppercase text-center'>
                        Semester
                      </th>
                      <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-blue-200 border border-slate-900 p-3  uppercase text-center'>
                        10th Percentage
                      </th>
                      <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-blue-200 border border-slate-900 p-3  uppercase text-center'>
                        10th Completion year
                      </th>
                      <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-blue-200 border border-slate-900 p-3  uppercase text-center'>
                        12th Percentage
                      </th>
                      <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-blue-200 border border-slate-900 p-3  uppercase text-center'>
                        12th Completion year
                      </th>
                      <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-blue-200 border border-slate-900 p-3  uppercase text-center'>
                        B-tech Aggregate
                      </th>
                      <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-blue-200 border border-slate-900 p-3  uppercase text-center'>
                        Graduation Year
                      </th>
                      <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-blue-200 border border-slate-900 p-3  uppercase text-center'>
                        View
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
                            <td className='text-[0.7rem] md:text-[1rem] font-normal   border border-slate-900 p-1 capitalize text-left'>
                              {i.dateOfBirth}
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal   border border-slate-900 p-1 capitalize text-center'>
                              {i.gender}
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal   border border-slate-900 p-1  text-center'>
                              {i.email}
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal   border border-slate-900 p-1 capitalize text-center'>
                              {i.phoneNumber}
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal   border border-slate-900 p-1 capitalize text-center'>
                              {i.academics.university}
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal   border border-slate-900 p-1 capitalize text-center'>
                              {i.academics.universityRollNo}
                            </td>{' '}
                            <td className='text-[0.7rem] md:text-[1rem] font-normal   border border-slate-900 p-1 capitalize text-center'>
                              {i.academics.course}
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal   border border-slate-900 p-1 capitalize text-center'>
                              {i.academics.branch}
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal   border border-slate-900 p-1 capitalize text-center'>
                              {i.academics.semester}
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal  border border-slate-900 p-1 capitalize text-center'>
                              {i.academics.percentageHighSchool}
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal  border border-slate-900 p-1 capitalize text-center'>
                              {i.academics.yearOfCompletionHighSchool}
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal  border border-slate-900 p-1 capitalize text-center'>
                              {i.academics.percentageIntermediate}
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal  border border-slate-900 p-1 capitalize text-center'>
                              {i.academics.yearOfCompletionIntermediate}
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal  border border-slate-900 p-1 capitalize text-center'>
                              8. {i.academics.CGPA}
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal  border border-slate-900 p-1 capitalize text-center'>
                              {i.academics.graduationYear}
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal  border border-slate-900 p-1 capitalize text-center '>
                              <Link
                                to={`/admin/placement/student/view/${i._id}`}
                                className='flex justify-center items-center'
                              >
                                <IoEye size={24} />
                              </Link>
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal  border border-slate-900 p-1 capitalize text-center'>
                              <Link
                                to={`/admin/placement/student/edit/${i._id}`}
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
