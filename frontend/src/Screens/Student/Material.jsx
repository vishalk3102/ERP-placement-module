import React, { useEffect, useState } from 'react'
import Heading from '../../components/Heading'
import { IoMdLink } from 'react-icons/io'
import { HiOutlineCalendar, HiOutlineSearch } from 'react-icons/hi'
import toast from 'react-hot-toast'
import { useSelector, useDispatch } from 'react-redux'
import { getMaterials } from '../../Redux/Actions/studentAction'
import Loader from '../../components/Loader'

const Material = () => {
  const { error, loading, materials } = useSelector(state => state.student)
  const dispatch = useDispatch()

  useEffect(() => {
    if (error) {
      toast.error(error)
      dispatch({ type: 'clearError' })
    }
    dispatch(getMaterials())
  }, [dispatch, error])

  return (
    <>
      {loading === false ? (
        <div className='w-[85%] mx-auto mt-10 flex justify-center items-start flex-col mb-10'>
          <Heading title='Material' />
          <div className='mt-8 w-full flex justify-center items-center flex-col'>
            <div className='mt-8 w-full'>
              {materials && materials.length > 0 ? (
                materials.map((i, index) => {
                  return (
                    <div
                      key={index}
                      className='border-blue-500 border-2 w-full rounded-md shadow-sm py-4 px-6 relative mb-4'
                    >
                      <p
                        className={`text-xl font-medium flex justify-start items-center ${
                          i.file.url && 'cursor-pointer'
                        } group`}
                        onClick={() => i.file.url && window.open(i.file.url)}
                      >
                        {i.title}{' '}
                        {i.file && (
                          <span className='text-2xl group-hover:text-blue-500 ml-1'>
                            <IoMdLink />
                          </span>
                        )}
                      </p>
                      <p className='text-base font-normal mt-1'>
                        {/* {i.subject} */}
                        webd
                      </p>
                    </div>
                  )
                })
              ) : (
                <p className='text-center'>No Materials Available!</p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default Material
