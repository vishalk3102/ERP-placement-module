import React, { useEffect } from 'react'
import Box from '@mui/material/Box'
import SideNavbar from './SideNavbar'
import { PieChart, pieArcClasses } from '@mui/x-charts/PieChart'
import { LineChart } from '@mui/x-charts/LineChart'
// import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../../components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { getAdminDashboardStats } from '../../../Redux/Actions/placementAction'

const Dashboard = () => {
  const dispatch = useDispatch()

  const {
    loading,
    totalStudents,
    totalPlacedStudents,
    totalUnplacedStudents,
    totalOffers,
    placementPercentage,
    averagePackage,
    totalCompanyVisited
  } = useSelector(state => state.adminPlacement)

  useEffect(() => {
    dispatch(getAdminDashboardStats())
  }, [dispatch])

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
                      {totalStudents}
                    </span>
                    <h3 className='text-[1rem] md:text-[1.2rem] font-bold text-center capitalize p-1 m-1'>
                      Number of Student Registered For placement
                    </h3>
                  </div>
                  <div className='col-span-3 md:col-span-1 w-[100%] md:w-[90%] h-[200px] flex flex-col justify-center  items-center  bg-blue-200 rounded-lg shadow-md '>
                    <span className='text-[1.4rem] font-bold p-1 m-1'>
                      {totalPlacedStudents}
                    </span>
                    <h3 className='text-[1rem] md:text-[1.2rem] font-bold text-center capitalize p-1 m-1'>
                      Number of Placed Students
                    </h3>
                  </div>
                  <div className='col-span-3 md:col-span-1 w-[100%] md:w-[90%] h-[200px] flex flex-col justify-center  items-center  bg-blue-200 rounded-lg shadow-md '>
                    <span className='text-[1.4rem] font-bold p-1 m-1'>
                      {totalUnplacedStudents}
                    </span>
                    <h3 className='text-[1rem] md:text-[1.2rem] font-bold text-center capitalize p-1 m-1'>
                      Number of Unplaced Students
                    </h3>
                  </div>
                  <div className='col-span-3 md:col-span-1 w-[100%] md:w-[90%] h-[200px] flex flex-col justify-center  items-center  bg-blue-200 rounded-lg shadow-md '>
                    <span className='text-[1.2rem] font-bold p-1 m-1'>
                      {totalCompanyVisited}
                    </span>
                    <h3 className='text-[1rem] md:text-[1.2rem] font-bold text-center capitalize p-1 m-1'>
                      Number of Company Visited
                    </h3>
                  </div>
                  <div className='col-span-3 md:col-span-1 w-[100%] md:w-[90%] h-[200px] flex flex-col justify-center  items-center  bg-blue-200 rounded-lg shadow-md '>
                    <span className='text-[1.2rem] font-bold p-1 m-1'>
                      {totalOffers}
                    </span>
                    <h3 className='text-[1rem] md:text-[1.2rem] font-bold text-center capitalize p-1 m-1'>
                      Number of offers
                    </h3>
                  </div>

                  <div className='col-span-3 md:col-span-1 w-[100%] md:w-[90%] h-[200px] flex flex-col justify-center  items-center  bg-blue-200 rounded-lg shadow-md '>
                    <span className='text-[1.2rem] font-bold p-1 m-1'>
                      {placementPercentage}
                    </span>
                    <h3 className='text-[1rem] md:text-[1.2rem] font-bold text-center capitalize p-1 m-1'>
                      Placement Percentage
                    </h3>
                  </div>
                  <div className='col-span-3 md:col-span-1 w-[100%] md:w-[90%] h-[200px] flex flex-col justify-center  items-center  bg-blue-200 rounded-lg shadow-md '>
                    <span className='text-[1.2rem] font-bold p-1 m-1'>
                      {averagePackage}
                    </span>
                    <h3 className='text-[1rem] md:text-[1.2rem] font-bold text-center capitalize p-1 m-1'>
                      Average Package
                    </h3>
                  </div>
                </div>
                <div className='grid grid-cols-2  p-2'>
                  <div className='col-span-2 md:col-span-1   flex justify-center items-center'>
                    <PieChart
                      series={[
                        {
                          data: [
                            {
                              id: 0,
                              value: 100,
                              label: '>10LPA'
                            },
                            {
                              id: 1,
                              value: 100,
                              label: '>5LPA'
                            },
                            {
                              id: 2,
                              value: 100,
                              label: '<5LPA'
                            }
                          ],
                          innerRadius: 50,
                          outerRadius: 100,
                          paddingAngle: 2,
                          cornerRadius: 4,
                          highlightScope: {
                            faded: 'global',
                            highlighted: 'item'
                          },
                          faded: { innerRadius: 30, additionalRadius: -30 }
                        }
                      ]}
                      sx={{
                        [`& .${pieArcClasses.faded}`]: {
                          fill: 'gray'
                        }
                      }}
                      width={400}
                      height={200}
                    />
                  </div>
                  <div className='col-span-2 md:col-span-1   flex justify-center items-center'>
                    <LineChart
                      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                      series={[
                        {
                          data: [2, 5.5, 2, 8.5, 1.5, 5],
                          label: '',
                          color: '#c70e0e'
                        }
                      ]}
                      width={500}
                      height={300}
                    />
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
