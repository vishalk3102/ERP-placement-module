import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getAllNotice,
  getNotice,
  updateNotice
} from '../../../Redux/Actions/adminAction'
import Loader from '../../../components/Loader'

const EditNotice = ({ setOpen, id }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [type, setType] = useState('student')
  const [link, setLink] = useState('')
  const dispatch = useDispatch()

  const { loading, notice } = useSelector(state => state.admin)

  useEffect(() => {
    if (!notice || notice._id !== id) {
      dispatch(getNotice(id))
    }
  }, [dispatch, id, notice])

  useEffect(() => {
    if (notice) {
      setTitle(notice.title)
      setType(notice.type)
      setDescription(notice.description)
      setLink(notice.link)
    }
  }, [notice])

  const updateNoticeHandler = e => {
    e.preventDefault()

    const formData = {
      title,
      description,
      type,
      link
    }
    dispatch(updateNotice(formData, id))
      .then(data => {
        if (data) {
          dispatch(getAllNotice())
        }
        return
      })
      .catch(error => {
        console.error('Error Updating Notice:', error)
      })
    setOpen(false)
  }

  return (
    <>
      {loading === false ? (
        <form className='mt-8 w-full'>
          <div className='w-[40%] mt-2'>
            <label htmlFor='title'>Notice Title</label>
            <input
              type='text'
              id='title'
              className='bg-blue-50 py-2 px-4 w-full mt-1'
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          <div className='w-[40%] mt-4'>
            <label htmlFor='title'>Notice Description</label>
            <textarea
              id='title'
              cols='30'
              rows='4'
              className='bg-blue-50 py-2 px-4 w-full mt-1 resize-none'
              value={description}
              onChange={e => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className='w-[40%] mt-4'>
            <label htmlFor='link'>Notice Link (If any else leave blank)</label>
            <input
              type='text'
              id='link'
              className='bg-blue-50 py-2 px-4 w-full mt-1'
              value={link}
              onChange={e => setLink(e.target.value)}
            />
          </div>
          <div className='w-[40%] mt-4'>
            <label htmlFor='type'>Type Of Notice</label>
            <select
              id='type'
              className='px-2 bg-blue-50 py-3 rounded-sm text-base w-[80%] accent-blue-700 mt-4'
              value={type}
              onChange={e => setType(e.target.value)}
            >
              <option value='student'>Student</option>
              <option value='faculty'>Faculty</option>
              <option value='both'>Both</option>
            </select>
          </div>
          <button
            onClick={updateNoticeHandler}
            className='bg-blue-500 text-white mt-6 px-6 rounded text-lg py-2 hover:bg-blue-600'
          >
            Update Notice
          </button>
        </form>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default EditNotice
