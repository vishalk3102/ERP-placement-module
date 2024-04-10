import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'
import Box from '@mui/material/Box'
import SideNavbar from './SideNavbar'
import { MdDownload } from 'react-icons/md'

const CompanyWiseStudentList = () => {
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
              Contata Solutions Placed Students List
            </h2>{' '}
            <div className='flex justify-end mt-8 w-[80%] mx-auto'>
              <button className='text-[#fff] text-[14px] font-semibold flex justify-center items-center bg-blue-500  rounded p-3 hover:bg-blue-700 ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all'>
                {' '}
                Download CSV
                <span className=''>
                  <MdDownload size={24} />
                </span>
              </button>
            </div>
            <div className='overflow-auto'>
              <table className='table-auto border-solid border-2 border-black border-collapse rounded mx-auto my-5'>
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
                  </tr>
                </thead>
                <tbody>
                  <tr className='border border-slate-900 '>
                    <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                      1
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
                    <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                      GEU
                    </td>
                    <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                      BTech
                    </td>
                    <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                      CSE
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

export default CompanyWiseStudentList
