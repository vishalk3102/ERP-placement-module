import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'
import Box from '@mui/material/Box'
import SideNavbar from './SideNavbar'
import PastDrive from './PastDrive'
import UpcomingDrive from './UpcomingDrive'
import { getAllDrive } from '../../../Redux/Actions/placementAction'
import Heading from '../../../components/Heading'
import MetaData from '../../../components/MetaData'

const PlacementDrive = () => {
  const [selectedMenu, setSelectedMenu] = useState('past')

  const dispatch = useDispatch()

  const { loading, drives, error, message } = useSelector(
    state => state.studentPlacement
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

  return (
    <>
      <MetaData title='Placement Drive' />
      <section id='placement-drive' className='w-full h-full  mt-20'>
        <Box sx={{ display: 'flex', marginTop: '5rem' }}>
          <SideNavbar />
          <div className='max-w-[1200px] w-[100%] mx-auto my-10'>
            <Heading title={` PLACEMENT DRIVE `} />
            <div className='w-[100%] mx-auto mt-12 flex justify-center items-start flex-col container'>
              <ul className='flex justify-center items-center gap-10 w-[90%] mx-auto'>
                <li
                  className={`text-center rounded-sm px-4 py-2 w-1/5 cursor-pointer ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
                    selectedMenu === 'past'
                      ? 'border-b-2 pb-2 border-blue-500 bg-blue-100 rounded-sm'
                      : 'bg-blue-500 text-white hover:bg-blue-600 border-b-2 border-blue-500'
                  }`}
                  onClick={() => setSelectedMenu('past')}
                >
                  Past Drive
                </li>
                <li
                  className={`text-center rounded-sm px-4 py-2 w-1/5 cursor-pointer ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
                    selectedMenu === 'upcoming'
                      ? 'border-b-2 pb-2 border-blue-500 bg-blue-100 rounded-sm'
                      : 'bg-blue-500 text-white hover:bg-blue-600 border-b-2 border-blue-500'
                  }`}
                  onClick={() => setSelectedMenu('upcoming')}
                >
                  Upcoming Drive
                </li>
              </ul>
            </div>
            <div className='w-[100%] mx-auto mt-8 flex justify-center items-center flex-col container'>
              {selectedMenu === 'past' && <PastDrive />}
              {selectedMenu === 'upcoming' && <UpcomingDrive />}
            </div>
          </div>
        </Box>
      </section>
    </>
  )
}

export default PlacementDrive
