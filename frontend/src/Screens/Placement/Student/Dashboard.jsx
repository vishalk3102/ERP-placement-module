import React, { useEffect } from 'react'
import Box from '@mui/material/Box'
import SideNavbar from './SideNavbar'
import { PieChart, pieArcClasses } from '@mui/x-charts/PieChart'
import { LineChart } from '@mui/x-charts/LineChart'
// import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../../components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { getStudentDashboardStats } from '../../../Redux/Actions/placementAction'

const Dashboard = () => {
  const dispatch = useDispatch()

  const {
    loading,
    averageCGPA,
    totalAppliedApplication,
    totalCompanyVisited,
    totalEligibleJobs
  } = useSelector(state => state.studentPlacement)

  const { user } = useSelector(state => state.auth)

  useEffect(() => {
    const enrollmentNo = user.enrollmentNo
    dispatch(getStudentDashboardStats(enrollmentNo))
  }, [dispatch, user.enrollmentNo])

  return (
    <>
      <Box sx={{ display: 'flex' }} className='my-0'>
        <SideNavbar />
        {loading === false ? (
          <>
            <div className='w-full h-[100%]'>
              <div className='w-[90%] h-[100%]   p-4 mt-14 mx-auto'>
                <div className='w-[90%] grid grid-cols-3 gap-6 mx-auto my-10'>
                  <div className='col-span-3 md:col-span-1 w-[100%] md:w-[90%] h-[200px] flex flex-col justify-center  items-center  bg-blue-200 rounded-lg shadow-md '>
                    <span className='text-[1.4rem] font-bold p-1 m-1'>
                      {averageCGPA}
                    </span>
                    <h3 className='text-[1rem] md:text-[1.2rem] font-bold text-center capitalize p-1 m-1'>
                      Average CGPA
                    </h3>
                  </div>
                  <div className='col-span-3 md:col-span-1 w-[100%] md:w-[90%] h-[200px] flex flex-col justify-center  items-center  bg-blue-200 rounded-lg shadow-md '>
                    <span className='text-[1.4rem] font-bold p-1 m-1'>
                      {' '}
                      {totalEligibleJobs}
                    </span>
                    <h3 className='text-[1rem] md:text-[1.2rem] font-bold text-center capitalize p-1 m-1'>
                      Eligible Jobs
                    </h3>
                  </div>
                  <div className='col-span-3 md:col-span-1 w-[100%] md:w-[90%] h-[200px] flex flex-col justify-center  items-center  bg-blue-200 rounded-lg shadow-md '>
                    <span className='text-[1.4rem] font-bold p-1 m-1'>
                      {' '}
                      {totalAppliedApplication}
                    </span>
                    <h3 className='text-[1rem] md:text-[1.2rem] font-bold text-center capitalize p-1 m-1'>
                      Applied Applications
                    </h3>
                  </div>
                  <div className='col-span-3 md:col-span-1 w-[100%] md:w-[90%] h-[200px] flex flex-col justify-center  items-center  bg-blue-200 rounded-lg shadow-md '>
                    <span className='text-[1.4rem] font-bold p-1 m-1'>
                      {' '}
                      {totalCompanyVisited}
                    </span>
                    <h3 className='text-[1rem] md:text-[1.2rem] font-bold text-center capitalize p-1 m-1'>
                      Companies Visited
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <Loader />
        )}
      </Box>
    </>
  )
}

export default Dashboard
