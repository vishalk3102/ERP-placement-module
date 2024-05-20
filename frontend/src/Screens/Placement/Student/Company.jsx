import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'
import Box from '@mui/material/Box'
import SideNavbar from './SideNavbar'
import { IoEye } from 'react-icons/io5'
import { getAllCompanyStudent } from '../../../Redux/Actions/placementAction'
import Loader from '../../../components/Loader'
import Heading from '../../../components/Heading'
import MetaData from '../../../components/MetaData'

const Company = () => {
  const dispatch = useDispatch()

  const { loading, companies, error, message } = useSelector(
    state => state.studentPlacement
  )

  useEffect(() => {
    dispatch(getAllCompanyStudent())
  }, [dispatch, message, error])

  return (
    <>
      <MetaData title='Companies' />
      <section id='Companies' className='w-full h-full  mt-20'>
        <Box sx={{ display: 'flex', marginTop: '5rem' }}>
          <SideNavbar />
          {loading === false ? (
            <div className='max-w-[1200px] w-[100%] mx-auto my-10'>
              <Heading title={`COMPANY LIST`} />

              <div className='overflow-auto mt-4'>
                <table className='table-auto  border-collapse rounded mx-auto my-5'>
                  <thead>
                    <tr className='w-[100%] '>
                      <th className='text-[0.8rem] md:text-[1rem] font-bold bg-blue-300  border border-slate-900 p-3 uppercase text-center'>
                        S.No
                      </th>
                      <th className='text-[0.8rem] md:text-[1rem] font-bold bg-blue-300 border border-slate-900 p-3  uppercase text-center'>
                        Company Name
                      </th>
                      <th className='text-[0.8rem] md:text-[1rem] font-bold bg-blue-300 border border-slate-900 p-3  uppercase text-center'>
                        Website
                      </th>
                      <th className='text-[0.8rem] md:text-[1rem] font-bold bg-blue-300 border border-slate-900 p-3  uppercase text-center'>
                        Industry
                      </th>
                      <th className='text-[0.8rem] md:text-[1rem] font-bold bg-blue-300 border border-slate-900 p-3  uppercase text-center'>
                        Location
                      </th>
                      <th className='text-[0.8rem] md:text-[1rem] font-bold bg-blue-300 border border-slate-900 p-3  uppercase text-center'>
                        About
                      </th>
                      <th className='text-[0.8rem] md:text-[1rem] font-bold bg-blue-300 border border-slate-900 p-3  uppercase text-center'>
                        Contact Person
                      </th>
                      <th className='text-[0.8rem] md:text-[1rem] font-bold bg-blue-300 border border-slate-900 p-3  uppercase text-center'>
                        Contact Email
                      </th>
                      <th className='text-[0.8rem] md:text-[1rem] font-bold bg-blue-300 border border-slate-900 p-3  uppercase text-center'>
                        Contact Phone No
                      </th>
                      <th className='text-[0.8rem] md:text-[1rem] font-bold bg-blue-300 border border-slate-900 p-3  uppercase text-center'>
                        View
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {companies &&
                      companies.map((i, index) => {
                        return (
                          <tr className='border border-slate-900' key={index}>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal bg-blue-50 border border-slate-900 p-1 capitalize text-center'>
                              {index + 1}
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal bg-blue-50 border border-slate-900 p-1 capitalize text-center'>
                              {i.companyName}
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal bg-blue-50 border border-slate-900 p-1  text-left'>
                              {i.website}
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal bg-blue-50 border border-slate-900 p-1 capitalize text-center'>
                              {i.industry}
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal bg-blue-50 border border-slate-900 p-1 capitalize text-center'>
                              {i.location}
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal bg-blue-50 border border-slate-900 p-1  text-center'>
                              {i.about}
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal bg-blue-50 border border-slate-900 p-1 capitalize text-center'>
                              {i.contactPerson}
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal bg-blue-50 border border-slate-900 p-1  text-center'>
                              {i.contactEmail}
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal bg-blue-50 border border-slate-900 p-1 capitalize text-center'>
                              {i.contactPhone}
                            </td>
                            <td className='text-[0.7rem] md:text-[1rem] font-normal bg-blue-50 border border-slate-900 p-1 capitalize text-center '>
                              <Link
                                to={`/student/placement/company/view/${i._id}`}
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

export default Company
