import React, { useEffect } from 'react'
import { FiDownload } from 'react-icons/fi'
import Heading from '../../components/Heading'
import { useDispatch, useSelector } from 'react-redux'
import { getTimetable } from '../../Redux/Actions/studentAction'
import Loader from '../../components/Loader'
import MetaData from '../../components/MetaData'

const Timetable = () => {
  const {
    loading,
    timetable: { timetable }
  } = useSelector(state => state.student)
  const {
    user: { branch, semester }
  } = useSelector(state => state.auth)

  const dispatch = useDispatch()

  useEffect(() => {
    const formData = {
      branch,
      semester
    }
    dispatch(getTimetable(formData))
  }, [branch, dispatch, semester])

  return (
    <>
      <MetaData title='Timetable' />
      {loading === false ? (
        <div className='w-[85%] mx-auto mt-10 flex justify-center items-start flex-col mb-10'>
          <div className='flex justify-between items-center w-full'>
            <Heading title={`Timetable of Semester ${semester}th`} />
            <p
              className='flex justify-center items-center text-lg font-medium cursor-pointer hover:text-red-500 hover:scale-110 ease-linear transition-all duration-200 hover:duration-200 hover:ease-linear hover:transition-all'
              onClick={() => window.open(timetable.url)}
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
              src={timetable.url}
              alt='timetable'
            />
          )}
          {!timetable && (
            <p className='mt-10'>No Timetable Available At The Moment!</p>
          )}
        </div>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default Timetable
