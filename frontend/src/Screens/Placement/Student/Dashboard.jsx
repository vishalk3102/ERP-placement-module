import React, { useEffect } from 'react'
import Box from '@mui/material/Box'
import SideNavbar from './SideNavbar'
import { PieChart, pieArcClasses } from '@mui/x-charts/PieChart'
import { LineChart } from '@mui/x-charts/LineChart'
// import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../../components/Loader'

const Dashboard = () => {
  // const dispatch = useDispatch()

  // const { loading, usersCount, ordersCount, totalIncome } = useSelector(
  //   state => state.admin
  // )

  // useEffect(() => {
  //   dispatch(getAdminStats())
  // }, [dispatch])

  const loading = false
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
                    <span className='text-[1.4rem] font-bold p-1 m-1'>100</span>
                    <h3 className='text-[1rem] md:text-[1.2rem] font-bold text-center capitalize p-1 m-1'>
                      Average CGPA
                    </h3>
                  </div>
                  <div className='col-span-3 md:col-span-1 w-[100%] md:w-[90%] h-[200px] flex flex-col justify-center  items-center  bg-blue-200 rounded-lg shadow-md '>
                    <span className='text-[1.4rem] font-bold p-1 m-1'>100</span>
                    <h3 className='text-[1rem] md:text-[1.2rem] font-bold text-center capitalize p-1 m-1'>
                      Eligible Jobs
                    </h3>
                  </div>
                  <div className='col-span-3 md:col-span-1 w-[100%] md:w-[90%] h-[200px] flex flex-col justify-center  items-center  bg-blue-200 rounded-lg shadow-md '>
                    <span className='text-[1.4rem] font-bold p-1 m-1'>100</span>
                    <h3 className='text-[1rem] md:text-[1.2rem] font-bold text-center capitalize p-1 m-1'>
                      Applied Applications
                    </h3>
                  </div>
                  <div className='col-span-3 md:col-span-1 w-[100%] md:w-[90%] h-[200px] flex flex-col justify-center  items-center  bg-blue-200 rounded-lg shadow-md '>
                    <span className='text-[1.4rem] font-bold p-1 m-1'>100</span>
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
