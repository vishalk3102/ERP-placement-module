import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Heading from '../../components/Heading'
import toast from 'react-hot-toast'
import { BiArrowBack } from 'react-icons/bi'
import { baseApiURL } from '../../baseUrl'
import {
  getAllStudent,
  getAllSubject,
  getStudent
} from '../../Redux/Actions/adminAction'
import { FiSearch, FiX } from 'react-icons/fi'
import Loader from '../../components/Loader'
import profile from '../../assets/profile.jpg'
import { IoAddOutline } from 'react-icons/io5'
import Subjects from '../Admin/Subject'

const Marks = () => {
  const [searchActive, setSearchActive] = useState(false)
  const [search, setSearch] = useState('')
  const [marks, setMarks] = useState([{ subject: '', mark: '' }])
  const [subjects, setSubjects] = useState([])
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading, student, error } = useSelector(state => state.faculty)
  const { subjects: allSubjects } = useSelector(state => state.admin)

  useEffect(() => {
    dispatch(getAllSubject())
  }, [dispatch])

  useEffect(() => {
    setSubjects(allSubjects)
  }, [allSubjects])

  const searchStudentHandler = e => {
    e.preventDefault()
    dispatch(getStudent(search))
    setSearchActive(!searchActive)
  }

  const clearSearchHandler = () => {
    setSearchActive(false)
    setSearch('')
  }

  const addMarksRow = () => {
    setMarks(prevMarks => [...prevMarks, { subject: '', mark: '' }])
  }

  const handleSubjectChange = (index, value) => {
    const newMarks = [...marks]
    newMarks[index].subject = value
    setMarks(newMarks)
  }

  const handleMarkChange = (index, value) => {
    const newMarks = [...marks]
    newMarks[index].mark = value
    setMarks(newMarks)
  }

  return (
    <div className='w-[85%] mx-auto flex justify-center items-start flex-col my-10'>
      <div className='flex justify-between items-center w-full'>
        <Heading title='Marks' />
      </div>
      <div className='my-6 mx-auto w-full'>
        <form
          onSubmit={searchStudentHandler}
          className='flex justify-center items-center border-2 border-blue-500 rounded w-[40%] mx-auto'
        >
          <input
            type='text'
            className='px-6 py-3 w-full outline-none'
            placeholder='Enrollment No.'
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          {!searchActive && (
            <button className='px-4 text-2xl hover:text-blue-500' type='submit'>
              <FiSearch />
            </button>
          )}
          {searchActive && (
            <button
              className='px-4 text-2xl hover:text-blue-500'
              onClick={clearSearchHandler}
            >
              <FiX />
            </button>
          )}
        </form>
        {loading === false ? (
          searchActive &&
          student && (
            <div className='mx-auto w-full bg-blue-50 mt-10  p-10 rounded-md shadow-md'>
              <div className='flex justify-between items-center'>
                <div>
                  <p className='text-2xl font-semibold'>
                    {student.firstName} {student.lastName}
                  </p>
                  <div className='mt-3'>
                    <p className='text-lg font-normal mb-2'>
                      Enrollment No: {student.enrollmentNo}
                    </p>
                    <p className='text-lg font-normal mb-2'>
                      University Roll No: {student.universityRollNo}
                    </p>
                    <p className='text-lg font-normal mb-2'>
                      Branch: {student.branch}
                    </p>
                    <p className='text-lg font-normal mb-2'>
                      Semester: {student.semester}
                    </p>
                    <p className='text-lg font-normal mb-2'>
                      Section: {student.section}
                    </p>
                  </div>
                </div>
                <div className=''>
                  {' '}
                  <img
                    src={profile}
                    alt='student profile'
                    className='h-[200px] w-[200px] object-cover rounded-lg shadow-md'
                  />
                </div>
              </div>
              <div className='mt-5 '>
                <p className='text-[1.3rem] font-semibold'>Upload Marks :</p>
                {marks.map((row, index) => (
                  <div
                    key={index}
                    className='w-full flex justify-evenly flex-row gap-5 mt-3 mb-2'
                  >
                    <div className='w-full'>
                      <label
                        htmlFor={`subject-${index}`}
                        className='leading-7 text-base '
                      >
                        Subject
                      </label>
                      <select
                        id={`subject-${index}`}
                        className='px-2 border-2 border-solid border-blue-400 py-2 rounded-sm text-base w-full accent-blue-700 mt-1'
                        value={row.subject}
                        onChange={e =>
                          handleSubjectChange(index, e.target.value)
                        }
                      >
                        <option value=''>-- Select Subject --</option>
                        {subjects.map((subject, i) => (
                          <option key={i} value={subject}>
                            {subject}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className='w-full'>
                      <label
                        htmlFor={`mark-${index}`}
                        className='leading-7 text-base '
                      >
                        Marks
                      </label>
                      <input
                        type='number'
                        id={`mark-${index}`}
                        className='px-6 py-2 w-full outline-none border-2 border-solid border-blue-400 mt-1'
                        placeholder='Enter Marks'
                        value={row.mark}
                        onChange={e => handleMarkChange(index, e.target.value)}
                      />
                    </div>
                  </div>
                ))}
                <div className='flex justify-center items-center'>
                  {' '}
                  <button
                    className='flex justify-center items-center border-2 border-red-500 px-3 py-2 rounded text-red-500'
                    onClick={addMarksRow}
                  >
                    Add Marks
                    <span className='ml-2'>
                      <IoAddOutline className='text-red-500 text-xl' />
                    </span>
                  </button>
                </div>
                <div className='flex justify-center items-center'>
                  {' '}
                  <button
                    className='bg-blue-500 px-6 py-3 mt-8 mx-auto rounded text-white'
                    // onClick={submitMarksHandler}
                  >
                    Upload Student Marks
                  </button>
                </div>
              </div>
            </div>
          )
        ) : (
          <Loader />
        )}
      </div>
    </div>
  )
}

export default Marks
