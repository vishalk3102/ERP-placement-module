import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Heading from '../../components/Heading'
import { IoMdLink } from 'react-icons/io'
import { HiOutlineCalendar, HiOutlineSearch } from 'react-icons/hi'
import toast from 'react-hot-toast'
import { baseApiURL } from '../../baseUrl'
import { useSelector, useDispatch } from 'react-redux'

const Material = () => {
  const { loading, material } = useSelector((state = state.materials))
  const dispatch = useDispatch()

  useEffect(() => {
    if (error) {
      toast.error(error)
      dispatch({ type: 'clearError' })
    }
    dispatch(getMaterials())
  }, [dispatch, error])

  return (
    <div className='w-[85%] mx-auto mt-10 flex justify-center items-start flex-col mb-10'>
      <Heading title='Material' />
      <div className='mt-8 w-full flex justify-center items-center flex-col'>
        <div className='mt-8 w-full'>
          {material && material.length > 0 ? (
            material.reverse().map((item, index) => {
              return (
                <div
                  key={index}
                  className='border-blue-500 border-2 w-full rounded-md shadow-sm py-4 px-6 relative mb-4'
                >
                  <p
                    className={`text-xl font-medium flex justify-start items-center ${
                      item.link && 'cursor-pointer'
                    } group`}
                    onClick={() => item.link && window.open(item.link)}
                  >
                    {item.title}{' '}
                    {item.link && (
                      <span className='text-2xl group-hover:text-blue-500 ml-1'>
                        <IoMdLink />
                      </span>
                    )}
                  </p>
                  <p className='text-base font-normal mt-1'>
                    {item.subject} - {item.faculty}
                  </p>
                  <p className='text-sm absolute top-4 right-4 flex justify-center items-center'>
                    <span className='text-base mr-1'>
                      <HiOutlineCalendar />
                    </span>{' '}
                    {item.createdAt.split('T')[0].split('-')[2] +
                      '/' +
                      item.createdAt.split('T')[0].split('-')[1] +
                      '/' +
                      item.createdAt.split('T')[0].split('-')[0] +
                      ' ' +
                      item.createdAt.split('T')[1].split('.')[0]}
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
  )
}

export default Material
