import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import SideNavbar from '../Student/SideNavbar'
import Loader from '../../../components/Loader'
import { getCompanyStudent } from '../../../Redux/Actions/placementAction'
import Heading from '../../../components/Heading'
import MetaData from '../../../components/MetaData'

const ViewCompany = () => {
  const dispatch = useDispatch()
  const params = useParams()

  const { loading, company } = useSelector(state => state.studentPlacement)

  useEffect(() => {
    dispatch(getCompanyStudent(params.id))
  }, [dispatch, params.id])

  return (
    <>
      <MetaData title='Company Details' />
      <section id='company-details' className='w-full h-full mt-20'>
        <Box sx={{ display: 'flex', marginTop: '5rem' }}>
          <SideNavbar />
          {loading === false ? (
            company && (
              <div className='max-w-[1200px] w-[100%] mx-auto my-10'>
                <Heading title={` COMPANY DETAILS`} />
                <div className='w-[80%] mx-auto bg-blue-200 border-2 border-solid rounded-[10px] mt-12'>
                  <div className='grid grid-cols-2 md:grid-cols-4 w-[80%] mx-auto my-2'>
                    <div className='col-span-1 md:col-span-2 '>
                      <ul className='flex flex-col justify-center items-start p-4'>
                        <li className='text-[14px] md:text-[1rem] font-semibold capitalize p-1 md:p-2'>
                          {' '}
                          Company Name :
                          <span className='text-[14px] md:text-[0.9rem] font-normal '>
                            {company.companyName}
                          </span>
                        </li>
                        <li className='text-[14px] md:text-[1rem] font-semibold  p-1 md:p-2'>
                          {' '}
                          Website :
                          <span className='text-[14px] md:text-[0.9rem] font-normal '>
                            {company.website}
                          </span>
                        </li>
                        <li className='text-[14px] md:text-[1rem] font-semibold capitalize p-1 md:p-2'>
                          {' '}
                          Industry :
                          <span className='text-[14px] md:text-[0.9rem] font-normal '>
                            {company.industry}
                          </span>
                        </li>
                        <li className='text-[14px] md:text-[1rem] font-semibold  p-1 md:p-2'>
                          {' '}
                          About :
                          <span className='text-[14px] md:text-[0.9rem] font-normal '>
                            {company.about}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className='col-span-1 md:col-span-2 '>
                      <ul className='flex flex-col justify-center items-start p-4'>
                        <li className='text-[14px] md:text-[1rem] font-semibold capitalize p-1 md:p-2'>
                          {' '}
                          Location :
                          <span className='text-[14px] md:text-[0.9rem] font-normal '>
                            {company.location}
                          </span>
                        </li>
                        <li className='text-[14px] md:text-[1rem] font-semibold capitalize p-1 md:p-2'>
                          {' '}
                          Contact Person :
                          <span className='text-[14px] md:text-[0.9rem] font-normal '>
                            {company.contactPerson}
                          </span>
                        </li>
                        <li className='text-[14px] md:text-[1rem] font-semibold capitalize p-1 md:p-2'>
                          {' '}
                          Contact Phone :
                          <span className='text-[14px] md:text-[0.9rem] font-normal '>
                            {company.contactPhone}
                          </span>
                        </li>
                        <li className='text-[14px] md:text-[1rem] font-semibold  p-1 md:p-2'>
                          {' '}
                          Contact Email :
                          <span className='text-[14px] md:text-[0.9rem] font-normal '>
                            {company.contactEmail}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )
          ) : (
            <Loader />
          )}
        </Box>
      </section>
    </>
  )
}

export default ViewCompany
