import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'
import Box from '@mui/material/Box'
import SideNavbar from './SideNavbar'
import { getApplications } from '../../../Redux/Actions/placementAction'
import Loader from '../../../components/Loader'
import Heading from '../../../components/Heading'
import MetaData from '../../../components/MetaData'

const Application = () => {
  const dispatch = useDispatch()

  const { loading, companies, error, message } = useSelector(
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
    dispatch(getApplications())
  }, [dispatch, message, error])

  return (
    <>
      <MetaData title='Applications' />
      <section id='applications' className='w-full h-full  mt-20'>
        <Box sx={{ display: 'flex', marginTop: '5rem' }}>
          <SideNavbar />
          {loading === false ? (
            <div className='max-w-[1200px] w-[100%] mx-auto my-10'>
              <Heading title={` Company Wise Registered Student Application`} />
              <div className='my-6 flex justify-evenly  items-center flex-wrap mt-10'>
                {companies &&
                  companies.map((i, index) => (
                    <Link to={`/admin/placement/application/${i._id}`}>
                      <span className='text-[#fff] text-[18px] font-semibold flex justify-center items-center bg-blue-500  rounded m-1 py-4 px-8 hover:bg-blue-700 ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all capitalize'>
                        {' '}
                        {i.companyName}
                      </span>
                    </Link>
                  ))}
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
