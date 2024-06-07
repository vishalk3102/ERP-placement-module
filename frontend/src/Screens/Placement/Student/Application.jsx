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
    state => state.studentPlacement
  )

  const { user } = useSelector(state => state.auth)

  useEffect(() => {
    const enrollmentNo = user.enrollmentNo
    dispatch(getAllAppliedApplications(enrollmentNo))
  }, [dispatch, message, error, user.enrollmentNo])

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
                                {i.jobPosting.companyName}
                              </td>
                              <td className='text-[0.7rem] md:text-[1rem] font-normal bg-blue-50 border border-slate-900 p-1  text-left'>
                                {i.jobPosting.registrationLink}
                              </td>
                              <td className='text-[0.7rem] md:text-[1rem] font-normal bg-blue-50 border border-slate-900 p-1 capitalize text-center'>
                                {i.jobPosting.title}
                              </td>
                              <td className='text-[0.7rem] md:text-[1rem] font-normal bg-blue-50 border border-slate-900 p-1 capitalize text-center'>
                                {i.jobPosting.location}
                              </td>
                              <td className='text-[0.7rem] md:text-[1rem] font-normal bg-blue-50 border border-slate-900 p-1 capitalize text-center'>
                                {i.jobPosting.salaryPackage}
                              </td>
                              <td className='text-[0.7rem] md:text-[1rem] font-normal bg-blue-50 border border-slate-900 p-1 capitalize text-center'>
                                {i.jobPosting.deadline}
                              </td>
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
