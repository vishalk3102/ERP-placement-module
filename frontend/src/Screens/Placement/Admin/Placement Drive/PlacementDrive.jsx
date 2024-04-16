import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'
import Box from '@mui/material/Box'
import SideNavbar from '../SideNavbar'
import { IoIosAdd } from 'react-icons/io'
import { MdEdit } from 'react-icons/md'
import { MdDelete } from 'react-icons/md'
import Loader from '../../../../components/Loader'
import {
  deleteDrive,
  getAllDrive
} from '../../../../Redux/Actions/placementAction'

const PlacementDrive = () => {
  const dispatch = useDispatch()

  const { loading, drives, error, message } = useSelector(
    state => state.adminPlacement
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
    dispatch(getAllDrive())
  }, [dispatch, message, error])

  const deleteHandler = id => {
    dispatch(deleteDrive(id))
  }
  return (
    <>
      <section id='Orders' className='w-full h-full  mt-20'>
        <Box sx={{ display: 'flex', marginTop: '5rem' }}>
          <SideNavbar />
          {loading === false ? (
            <div className='max-w-[1200px] w-[100%] mx-auto my-10'>
              <h2
                className='text-[#000] text-[2.5rem] font-bold
              text-center uppercase p-2 mt-5'
              >
                Placement Drive
              </h2>
              <div className='flex justify-end mt-8'>
                <Link to='/admin/placement/drive/add'>
                  <button className='text-[#fff] text-[14px] font-semibold flex justify-center items-center bg-blue-500  rounded p-3 hover:bg-blue-700 ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all'>
                    {' '}
                    Add Drive{' '}
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
                        S.No
                      </th>
                      <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center'>
                        Company Name
                      </th>

                      <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center'>
                        Location
                      </th>
                      <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center'>
                        Date
                      </th>
                      <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center'>
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {drives &&
                      drives.map(i => {
                        return (
                          <tr className='border border-slate-900 '>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                              1
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                              {i.companyName}
                            </td>

                            <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                              {i.location}
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                              {i.date}
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                              <Link to={`/admin/placement/drive/${i._id}`}>
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

export default PlacementDrive
