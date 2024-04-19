import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import Heading from '../../components/Heading'
import { MdOutlineDelete } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import {
  addStudent,
  deleteSubject,
  getAllSubject
} from '../../Redux/Actions/adminAction'
import Loader from '../../components/Loader'
// import {
//   getSubject,
//   addSubject,
//   deleteSubject
// } from '../../Redux/Actions/otherAction'

const Subjects = () => {
  const [name, setName] = useState('')
  const [code, setCode] = useState('')
  const [selected, setSelected] = useState('view')
  const dispatch = useDispatch()
  const { loading, subjects, error } = useSelector(state => state.admin)

  useEffect(() => {
    if (error) {
      toast.error(error)
      dispatch({ type: 'clearError' })
    }
    dispatch(getAllSubject())
  }, [dispatch, error])

  const addSubjectHandler = () => {
    dispatch(addStudent({ name, code }))
  }

  const deleteSubjectHandler = id => {
    dispatch(deleteSubject(id))
  }
  return (
    <div className='w-[85%] mx-auto mt-10 flex justify-center items-start flex-col mb-10'>
      <div className='flex justify-between items-center w-full'>
        <Heading title='Add Subject' />
        <div className='flex justify-end items-center w-full'>
          <button
            className={`${
              selected === 'add' && 'border-b-2 '
            }border-blue-500 px-4 py-2 text-black rounded-sm mr-6`}
            onClick={() => setSelected('add')}
          >
            Add Subject
          </button>
          <button
            className={`${
              selected === 'view' && 'border-b-2 '
            }border-blue-500 px-4 py-2 text-black rounded-sm`}
            onClick={() => setSelected('view')}
          >
            View Subject
          </button>
        </div>
      </div>
      {selected === 'add' && (
        <div className='flex flex-col justify-center items-center w-full mt-8'>
          <div className='w-[40%] mb-4'>
            <label htmlFor='code' className='leading-7 text-sm'>
              Enter Subject Code
            </label>
            <input
              type='number'
              id='code'
              value={code}
              onChange={e => setCode(e.target.value)}
              className='w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
          <div className='w-[40%]'>
            <label htmlFor='name' className='leading-7 text-sm '>
              Enter Subject Name
            </label>
            <input
              type='name'
              id='name'
              value={name}
              onChange={e => setName(e.target.value)}
              className='w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
          <button
            className='mt-6 bg-blue-500 px-6 py-3 text-white'
            onClick={addSubjectHandler}
          >
            Add Subject
          </button>
        </div>
      )}
      {selected === 'view' && (
        <div className='mt-8 w-full'>
          {loading === false ? (
            <ul>
              {/* {subjects &&
              subjects.map(item => {
                return ( */}
              <li
                // key={item.code}
                className='bg-blue-100 py-3 px-6 mb-3 flex justify-between items-center w-[70%]'
              >
                <div>101 - Computer Science</div>
                <button
                  className='text-2xl hover:text-red-500'
                  // onClick={() => deleteSubjectHandler(item._id)}
                >
                  <MdOutlineDelete />
                </button>
              </li>
              {/* )
              })} */}
            </ul>
          ) : (
            <Loader />
          )}
        </div>
      )}
    </div>
  )
}

export default Subjects
