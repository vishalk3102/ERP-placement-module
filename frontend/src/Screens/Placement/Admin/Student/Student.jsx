import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'
import Box from '@mui/material/Box'
import SideNavbar from '../SideNavbar'
import { MdEdit } from 'react-icons/md'
import { MdDelete } from 'react-icons/md'
import { IoEye } from 'react-icons/io5'

const Student = () => {
  //   const dispatch = useDispatch()

  //   const { loading, orders, error, message } = useSelector(state => state.admin)

  //   useEffect(() => {
  //     if (message) {
  //       toast.success(message)
  //       dispatch({ type: 'clearMessage' })
  //     }
  //     if (error) {
  //       toast.error(error)
  //       dispatch({ type: 'clearError' })
  //     }
  //     dispatch(getAdminOrders())
  //   }, [dispatch, message, error])

  //   const processOrderHandler = id => {
  //     dispatch(processOrder(id))
  //   }

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
              Students Registered for Placement List
            </h2>
            <div className='overflow-auto'>
              <table className='table-auto border-solid border-2 border-black border-collapse rounded mx-auto my-10'>
                <thead>
                  <tr className='w-[100%] border-solid border-2 border-black'>
                    <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400  border border-slate-900 p-3 uppercase text-center'>
                      S.No
                    </th>
                    <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400  border border-slate-900 p-3 uppercase text-center'>
                      Enrollment No
                    </th>
                    <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center'>
                      Student Name
                    </th>
                    <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center'>
                      Date of birth
                    </th>
                    <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center'>
                      Gender
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
                      University Roll No
                    </th>
                    <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center'>
                      Course
                    </th>
                    <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center'>
                      Branch
                    </th>
                    <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center'>
                      Semester
                    </th>
                    <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center'>
                      10th Percentage
                    </th>
                    <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center'>
                      10th Completion year
                    </th>
                    <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center'>
                      12th Percentage
                    </th>
                    <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center'>
                      12th Completion year
                    </th>
                    <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center'>
                      B-tech Aggregate
                    </th>
                    <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center'>
                      Graduation Year
                    </th>
                    <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center'>
                      View
                    </th>
                    <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center'>
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border border-slate-900 '>
                    <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                      1
                    </td>
                    <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                      20021657
                    </td>
                    <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                      Vishal Kumar
                    </td>
                    <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-left'>
                      31/01/2002
                    </td>
                    <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                      Male
                    </td>
                    <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                      vishal.k3102@gmail.com
                    </td>
                    <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                      8459126643
                    </td>
                    <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                      GEU
                    </td>
                    <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                      2017132
                    </td>
                    <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                      B-tech
                    </td>
                    <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                      CSE
                    </td>
                    <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                      8th
                    </td>
                    <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                      95%
                    </td>
                    <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                      2017
                    </td>
                    <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                      91%
                    </td>
                    <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                      2019
                    </td>
                    <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                      8.67
                    </td>
                    <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                      2024
                    </td>
                    <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center '>
                      <Link
                        to='/admin/placement/student/view'
                        className='flex justify-center items-center'
                      >
                        <IoEye size={24} />
                      </Link>
                    </td>
                    <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                      <Link to='/admin/placement/student/edit'>
                        <button
                          className='p-1 m-1'
                          // onClick={() => processOrderHandler(i._id)}
                        >
                          <MdEdit size={24} />
                        </button>
                      </Link>
                      <button
                        className='p-1 m-1'
                        // onClick={() => processOrderHandler(i._id)}
                      >
                        <MdDelete size={24} />
                      </button>
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

export default Student
