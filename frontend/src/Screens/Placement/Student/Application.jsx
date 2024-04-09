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

const Application = () => {
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
              Applied Applications
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
                      Website
                    </th>
                    <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center'>
                      Title
                    </th>
                    <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center'>
                      Location
                    </th>
                    <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center'>
                      Package
                    </th>
                    <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center'>
                      Applied Date
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
                      Software Developer
                    </td>
                    <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                      Noida
                    </td>
                    <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                      Rs 4.5LPA
                    </td>
                    <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                      28 march 2024, 3:46 PM
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

export default Application
