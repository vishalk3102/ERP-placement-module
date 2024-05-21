import React, { useEffect } from 'react'
import { useState } from 'react'
import Heading from '../../../components/Heading'
import { IoMdLink } from 'react-icons/io'
import { HiOutlineCalendar } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import { IoAddOutline } from 'react-icons/io5'
import { MdDeleteOutline, MdEditNote } from 'react-icons/md'
import { BiArrowBack } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { deleteNotice, getAllNotice } from '../../../Redux/Actions/adminAction'
import AddNotice from './AddNotice'
import EditNotice from './EditNotice'
import Loader from '../../../components/Loader'

const Notice = () => {
  const [selected, setSelected] = useState('')
  const [open, setOpen] = useState(false)
  const [id, setId] = useState()

  const dispatch = useDispatch()

  const { loading, notices } = useSelector(state => state.admin)

  useEffect(() => {
    if (!open) {
      dispatch(getAllNotice())
    }
  }, [open, dispatch])

  const openHandler = () => {
    if (open) {
      setSelected('')
      setId(null)
    } else {
      setSelected('add')
    }
    setOpen(!open)
  }

  // FUNCTION TO HANDLE EDIT BUTTON CLICK
  const EditNoticeHandler = id => {
    setSelected('edit')
    setOpen(!open)
    setId(id)
  }

  // FUNCTION TO HANDLE DELETE  BUTTON CLICK
  const deleteNoticeHandler = id => {
    dispatch(deleteNotice(id))
      .then(() => {
        dispatch(getAllNotice())
      })
      .catch(error => {
        console.error('Error adding subject:', error)
      })
  }

  return (
    <>
      {loading === false ? (
        <div className='w-[85%] mx-auto flex justify-center items-start flex-col my-10'>
          <div className='relative flex justify-between items-center w-full'>
            <Heading title='Notices' />
            {open ? (
              <button
                className='absolute right-2 flex justify-center items-center border-2 border-red-500 px-3 py-2 rounded text-red-500'
                onClick={openHandler}
              >
                <span className='mr-2'>
                  <BiArrowBack className='text-red-500' />
                </span>
                Close
              </button>
            ) : (
              <button
                className='absolute right-2 flex justify-center items-center border-2 border-red-500 px-3 py-2 rounded text-red-500'
                onClick={openHandler}
              >
                Add Notice
                <span className='ml-2'>
                  <IoAddOutline className='text-red-500 text-xl' />
                </span>
              </button>
            )}
          </div>
          {!open && (
            <div className='mt-8 w-full'>
              {notices &&
                notices.map((item, index) => {
                  return (
                    <div
                      key={item._id}
                      className='border-blue-500 border-2 w-full rounded-md shadow-sm py-4 px-6 mb-4 relative'
                    >
                      <div className='absolute flex justify-center items-center right-4 bottom-3'>
                        <span className='text-sm bg-blue-500 px-4 py-1 text-white rounded-full'>
                          {item.type}
                        </span>
                        <span
                          className='text-2xl group-hover:text-blue-500 ml-2 cursor-pointer hover:text-red-500'
                          onClick={() => deleteNoticeHandler(item._id)}
                        >
                          <MdDeleteOutline />
                        </span>
                        <span
                          className='text-2xl group-hover:text-blue-500 ml-2 cursor-pointer hover:text-blue-500'
                          onClick={() => EditNoticeHandler(item._id)}
                        >
                          <MdEditNote />
                        </span>
                      </div>
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
          )}
          {selected === 'add' ? <AddNotice setOpen={setOpen} /> : ''}
          {selected === 'edit' ? <EditNotice setOpen={setOpen} id={id} /> : ''}
        </div>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default Notice
