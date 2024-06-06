import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'
import Box from '@mui/material/Box'
import SideNavbar from './SideNavbar'
import { getAllAppliedApplications } from '../../../Redux/Actions/placementAction'
import Heading from '../../../components/Heading'
import MetaData from '../../../components/MetaData'
import Loader from '../../../components/Loader'

const Application = () => {
  const dispatch = useDispatch()

  const { loading, applications, error, message } = useSelector(
    state => state.admin
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
    dispatch(getAllAppliedApplications())
  }, [dispatch, message, error])

  return (
    <>
      <MetaData title='Applied applications' />
      <section id='applied-applications' className='w-full h-full  mt-20'>
        <Box sx={{ display: 'flex', marginTop: '5rem' }}>
          <SideNavbar />
          {loading === false ? (
            <div className='max-w-[1200px] w-[100%] mx-auto my-10'>
              <Heading title={` APPLIED  APPLICATIONS`} />

              <div className='overflow-auto mt-4'>
                <table className='w-[100%]  border-collapse rounded mx-auto my-5'>
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
                        Title
                      </th>
                      <th className='text-[0.8rem] md:text-[1rem] font-bold bg-blue-300 border border-slate-900 p-3  uppercase text-center'>
                        Location
                      </th>
                      <th className='text-[0.8rem] md:text-[1rem] font-bold bg-blue-300 border border-slate-900 p-3  uppercase text-center'>
                        Package
                      </th>
                      <th className='text-[0.8rem] md:text-[1rem] font-bold bg-blue-300 border border-slate-900 p-3  uppercase text-center'>
                        Applied Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {applications &&
                      applications.map((i, index) => {
                        return (
                          <>
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
                                {i.title}
                              </td>
                              <td className='text-[0.7rem] md:text-[1rem] font-normal bg-blue-50 border border-slate-900 p-1 capitalize text-center'>
                                {i.location}
                              </td>
                              <td className='text-[0.7rem] md:text-[1rem] font-normal bg-blue-50 border border-slate-900 p-1 capitalize text-center'>
                                {i.salaryPackage}
                              </td>
                              {/*  <td className='text-[0.7rem] md:text-[1rem] font-normal bg-blue-50 border border-slate-900 p-1 capitalize text-center'>
                                {i.deadline}
                              </td> */}
                            </tr>
                          </>
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

export default Application
