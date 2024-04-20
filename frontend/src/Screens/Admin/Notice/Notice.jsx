import React, { useEffect } from 'react'
import { useState } from 'react'
import Heading from '../../../components/Heading'
import axios from 'axios'
import { IoMdLink } from 'react-icons/io'
import { HiOutlineCalendar } from 'react-icons/hi'
import { useLocation, useNavigate } from 'react-router-dom'
import { IoAddOutline } from 'react-icons/io5'
import { MdDeleteOutline, MdEditNote } from 'react-icons/md'
import { BiArrowBack } from 'react-icons/bi'
import toast from 'react-hot-toast'
import { baseApiURL } from '../../../baseUrl'
import { useDispatch, useSelector } from 'react-redux'
import {
  addNotice,
  deleteNotice,
  getAllNotice,
  getNotice,
  updateNotice
} from '../../../Redux/Actions/adminAction'
import AddNotice from './AddNotice'
import EditNotice from './EditNotice'
import Loader from '../../../components/Loader'

const noticeData = [
  {
    _id: '1',
    title: 'Notice 1',
    description: 'Description for Notice 1',
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
  const [selected, setSelected] = useState('')
  const [open, setOpen] = useState(false)
  const [id, setId] = useState()
  const [edit, setEdit] = useState(true)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [type, setType] = useState('student')
  const [link, setLink] = useState('')

  // const getNoticeHandler = () => {
  //   let data = {}
  //   if (router.pathname.replace('/', '') === 'student') {
  //     data = {
  //       type: ['student', 'both']
  //     }
  //   } else {
  //     data = {
  //       type: ['student', 'both', 'faculty']
  //     }
  //   }
  //   const headers = {
  //     'Content-Type': 'application/json'
  //   }
  //   axios
  //     .post(`${baseApiURL()}/notice/getNotice`, data, {
  //       headers: headers
  //     })
  //     .then(response => {
  //       if (response.data.success) {
  //         setNotice(response.data.notice)
  //       } else {
  //         toast.error(response.data.message)
  //       }
  //     })
  //     .catch(error => {
  //       toast.dismiss()
  //       toast.error(error.response.data.message)
  //     })
  // }

  // useEffect(() => {
  //   let data = {}
  //   if (router.pathname.replace('/', '') === 'student') {
  //     data = {
  //       type: ['student', 'both']
  //     }
  //   } else {
  //     data = {
  //       type: ['student', 'both', 'faculty']
  //     }
  //   }
  //   const headers = {
  //     'Content-Type': 'application/json'
  //   }
  //   axios
  //     .post(`${baseApiURL()}/notice/getNotice`, data, {
  //       headers: headers
  //     })
  //     .then(response => {
  //       if (response.data.success) {
  //         setNotice(response.data.notice)
  //       } else {
  //         toast.error(response.data.message)
  //       }
  //     })
  //     .catch(error => {
  //       toast.dismiss()
  //       toast.error(error.response.data.message)
  //     })
  // }, [router.pathname])

  // const addNoticehandler = e => {
  //   e.preventDefault()
  //   toast.loading('Adding Notice')
  //   const headers = {
  //     'Content-Type': 'application/json'
  //   }
  //   axios
  //     .post(`${baseApiURL()}/notice/addNotice`, data, {
  //       headers: headers
  //     })
  //     .then(response => {
  //       toast.dismiss()
  //       if (response.data.success) {
  //         toast.success(response.data.message)
  //         getNoticeHandler()
  //         setOpen(!open)
  //       } else {
  //         toast.error(response.data.message)
  //       }
  //     })
  //     .catch(error => {
  //       toast.dismiss()
  //       toast.error(error.response.data.message)
  //     })
  // }

  // const deleteNoticehandler = id => {
  //   toast.loading('Deleting Notice')
  //   const headers = {
  //     'Content-Type': 'application/json'
  //   }
  //   axios
  //     .delete(`${baseApiURL()}/notice/deleteNotice/${id}`, {
  //       headers: headers
  //     })
  //     .then(response => {
  //       toast.dismiss()
  //       if (response.data.success) {
  //         toast.success(response.data.message)
  //         getNoticeHandler()
  //       } else {
  //         toast.error(response.data.message)
  //       }
  //     })
  //     .catch(error => {
  //       toast.dismiss()
  //       toast.error(error.response.data.message)
  //     })
  // }

  // const updateNoticehandler = e => {
  //   e.preventDefault()
  //   const headers = {
  //     'Content-Type': 'application/json'
  //   }
  //   axios
  //     .post(`${baseApiURL()}/notice/updateNotice/${id}`, data, {
  //       headers: headers
  //     })
  //     .then(response => {
  //       toast.dismiss()
  //       if (response.data.success) {
  //         toast.success(response.data.message)
  //         getNoticeHandler()
  //         setOpen(!open)
  //       } else {
  //         toast.error(response.data.message)
  //       }
  //     })
  //     .catch(error => {
  //       toast.dismiss()
  //       toast.error(error.response.data.message)
  //     })
  // }

  // const setOpenEditSectionHandler = index => {
  //   setEdit(true)
  //   setOpen(!open)
  //   setData({
  //     title: notice[index].title,
  //     description: notice[index].description,
  //     type: notice[index].type,
  //     link: notice[index].link
  //   })
  //   setId(notice[index]._id)
  // }

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { loading, notices, notice } = useSelector(state => state.admin)

  useEffect(() => {
    if (!open) {
      dispatch(getAllNotice())
    }
  }, [open, dispatch])

  const openHandler = () => {
    setSelected('add')
    setOpen(!open)
    setEdit(false)
    setTitle('')
    setDescription('')
    setType('student')
    setLink('')
  }

  const EditNoticeHandler = i => {
    // dispatch(getNotice(id))
    //   .then(() => {
    //     setTitle(notice.title)
    //     setDescription(notice.description)
    //     setType(notice.type)
    //     setLink(notice.link)
    //     setId(notice._id)
    //     dispatch(getAllNotice())
    //   })
    //   .catch(error => {
    //     console.error('Error adding subject:', error)
    //   })
    setSelected('edit')
    // setEdit(true)
    setOpen(!open)
    setId(i)
  }

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
