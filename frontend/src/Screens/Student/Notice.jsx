import React, { useEffect } from 'react'
import { HiOutlineCalendar } from 'react-icons/hi'
import { IoMdLink } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { getAllNotice } from '../../Redux/Actions/studentAction'
import Loader from '../../components/Loader'
import MetaData from '../../components/MetaData'
import toast from 'react-hot-toast'

const Notice = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllNotice())
      .then(data => {
        if (data.notices) {
          toast.success('Notices Loaded')
        }
        return
      })
      .catch(err => {
        toast.error('Error Loading Notices ')
      })
  }, [dispatch])

  const { notices, loading } = useSelector(state => state.student)

  const filteredNotices = notices.filter(
    notice => notice.type === 'student' || notice.type === 'both'
  )

  return (
    <>
      <MetaData title='Notices' />
      {loading === false ? (
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
                    <p className='text-base font-normal mt-1'>
                      {item.description}
                    </p>
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
      ) : (
        <Loader />
      )}
    </>
  )
}

export default Notice
