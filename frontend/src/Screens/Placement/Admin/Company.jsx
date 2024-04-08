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

const Company = () => {
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
              Company List
            </h2>
            <div className='flex justify-end mt-8 '>
              <Link to='/admin/placement/company/add'>
                <button className='text-[#fff] text-[14px] font-semibold flex justify-center items-center bg-blue-500  rounded p-3 hover:bg-blue-700 ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all'>
                  {' '}
                  Add Company{' '}
                  <span className=''>
                    <IoIosAdd size={24} />
                  </span>
                </button>
              </Link>
            </div>
            <div className='overflow-auto'>
              <table className='table-auto border-solid border-2 border-black border-collapse rounded mx-auto my-5'>
                <thead>
                  <tr className='w-[100%] border-solid border-2 border-black'>
                    <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400  border border-slate-900 p-3 uppercase text-center'>
                      Company Id
                    </th>
                    <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center'>
                      Company Name
                    </th>
                    <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center'>
                      Website
                    </th>
                    <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center'>
                      Industry
                    </th>
                    <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center'>
                      Location
                    </th>
                    <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center'>
                      Package
                    </th>
                    <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center'>
                      About
                    </th>
                    <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center'>
                      Contact Person
                    </th>
                    <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center'>
                      Contact Email
                    </th>
                    <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center'>
                      Contact Phone No
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
                  <tr className='border border-slate-900'>
                    <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                      1
                    </td>
                    <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                      Contata Solution
                    </td>
                    <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-left'>
                      www.contata.com
                    </td>
                    <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                      IT
                    </td>
                    <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                      Noida
                    </td>
                    <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                      Rs 4.5LPA
                    </td>
                    <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Nihil, animi!
                    </td>
                    <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                      Vishal Kumar
                    </td>
                    <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                      vishal.k3102@gmail.com
                    </td>
                    <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                      8459126643
                    </td>
                    <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center '>
                      <Link to='' className='flex justify-center items-center'>
                        <IoEye size={24} />
                      </Link>
                    </td>
                    <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                      <Link to='/admin/placement/company/edit'>
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

export default Company
