import React, { useEffect, useState } from 'react'
import { HiOutlineCalendar } from 'react-icons/hi'
import { IoMdLink } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { getAllNotice } from '../../Redux/Actions/studentAction'
import { MdDeleteOutline, MdEditNote } from 'react-icons/md'
import { IoEye } from 'react-icons/io5'

const notices = [
  {
    _id: '1',
    title: 'Notice 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse eaque doloremque iure reiciendis ea nisi saepe quae excepturi laboriosam rem non blanditiis recusandae sit deserunt at veritatis laudantium, sed dolorum ad exercitationem ducimus aperiam assumenda officia vel. Maiores quidem, facere ad fuga, placeat distinctio numquam mollitia velit culpa sapiente neque?',
    type: 'student',
    link: '',
    createdAt: '2024-04-20T10:00:00.000Z'
  },
  {
    _id: '2',
    title: 'Notice 2',
    description: 'Description for Notice 2',
    type: 'faculty',
    link: 'https://example.com',
    createdAt: '2024-04-19T10:00:00.000Z'
  }
]

const Notice = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllNotice())
  }, [dispatch])

  const { notices, loading } = useSelector(state => state.student)

  const filteredNotices = notices.filter(
    notice => notice.type === 'student' || notice.type === 'both'
  )

  return (
    <div className='w-[85%] mx-auto flex justify-center items-start flex-col my-10'>
      <div className='mt-8 w-full'>
        {filteredNotices &&
          filteredNotices.map((item, index) => {
            return (
              <div
                key={item._id}
                className='border-blue-500 bg-blue-100  border-2 w-full rounded-md shadow-sm py-4 px-6 mb-4 relative'
              >
                <p
                  className={`text-xl font-medium flex justify-start items-center ${
                    item.link && 'cursor-pointer'
                  } group`}
                  onClick={() => item.link && window.open(item.link)}
                >
                  {item.title}
                  {item.link && (
                    <span className='text-2xl group-hover:text-blue-500 ml-1'>
                      <IoMdLink />
                    </span>
                  )}
                </p>
                <p className='text-base font-normal mt-1'>{item.description}</p>
                <p className='text-sm absolute top-4 right-4 flex justify-center items-center'>
                  <span className='text-base mr-1'>
                    <HiOutlineCalendar />
                  </span>
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
          })}
      </div>
    </div>
  )
}

export default Notice
