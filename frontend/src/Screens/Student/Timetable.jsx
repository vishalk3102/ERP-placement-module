import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FiDownload } from 'react-icons/fi'
import Heading from '../../components/Heading'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'
import { baseApiURL } from '../../baseUrl'
import timetable1 from './timetable.png'
import { getTimetable } from '../../Redux/Actions/studentAction'

const Timetable = () => {
  // const [timetable, setTimetable] = useState('')

  const { timetable } = useSelector(state => state.student)
  const {
    user: { branch, semester }
  } = useSelector(state => state.auth)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTimetable({ branch, semester }))
  })
  return (
    <div className='w-[85%] mx-auto mt-10 flex justify-center items-start flex-col mb-10'>
      <div className='flex justify-between items-center w-full'>
        <Heading title={`Timetable of Semester 8th`} />
        <p
          className='flex justify-center items-center text-lg font-medium cursor-pointer hover:text-red-500 hover:scale-110 ease-linear transition-all duration-200 hover:duration-200 hover:ease-linear hover:transition-all'
          onClick={() => window.open(timetable)}
        >
          Download
          <span className='ml-2'>
            <FiDownload />
          </span>
        </p>
      </div>
      {timetable && (
        <img
          className='mt-8 rounded-lg shadow-md w-[70%] mx-auto'
          src={timetable1}
          alt='timetable'
        />
      )}
      {!timetable && (
        <p className='mt-10'>No Timetable Available At The Moment!</p>
      )}
    </div>
  )
}

export default Timetable
