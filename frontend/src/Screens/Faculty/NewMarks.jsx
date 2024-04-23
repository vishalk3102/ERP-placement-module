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
import { FaMinus } from 'react-icons/fa6'

const NewMarks = () => {
  const [searchActive, setSearchActive] = useState(false)
  const [search, setSearch] = useState()
  const [marksList, setMarksList] = useState([{ subject: '', mark: '' }])

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading, student, error } = useSelector(state => state.faculty)
  const { subjects } = useSelector(state => state.admin)

  useEffect(() => {
    dispatch(getAllSubject())
  }, [dispatch])

  const uploadMarks = () => {
    dispatch()
  }

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
    setMarksList(prevMarks => [...prevMarks, { subject: '', mark: '' }])
  }
  const removeMarkRow = index => {
    setMarksList(prevMarks => {
      const updatedMarks = [...prevMarks]
      updatedMarks.splice(index, 1)
      return updatedMarks
    })
  }

  const handleSubjectChange = (index, value) => {
    const newMarks = [...marksList]
    newMarks[index].subject = value
    setMarksList(newMarks)
  }

  const handleMarkChange = (index, value) => {
    const newMarks = [...marksList]
    newMarks[index].mark = value
    setMarksList(newMarks)
  }

  return (
    <>
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
              <button
                className='px-4 text-2xl hover:text-blue-500'
                type='submit'
              >
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
          {searchActive && student && (
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
                {marksList.map((i, index) => (
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
                        value={i.subject}
                        onChange={e =>
                          handleSubjectChange(index, e.target.value)
                        }
                      >
                        <option value=''>-- Select Subject --</option>
                        {subjects &&
                          subjects.map(subject => (
                            <option
                              value={`${subject.name}${subject.code}`}
                              key={subject._id}
                            >
                              {subject.name} {subject.code}
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
                        value={i.mark}
                        onChange={e => handleMarkChange(index, e.target.value)}
                      />
                    </div>
                    <div className='w-full flex justify-start items-end'>
                      {index > 0 && (
                        <button
                          className='flex justify-center items-center border-2 bg-red-200 border-red-500 px-3 py-2 rounded text-red-800 mx-2'
                          onClick={() => removeMarkRow(index)}
                        >
                          Remove Mark
                          <span className='ml-2'>
                            <FaMinus className='text-red-800 text-xl' />
                          </span>
                        </button>
                      )}
                      {index === marksList.length - 1 && (
                        <button
                          className='flex justify-center items-center border-2 bg-green-200 border-green-500 px-3 py-2 rounded text-green-800 mx-2'
                          onClick={addMarksRow}
                        >
                          Add Marks
                          <span className='ml-2'>
                            <IoAddOutline className='text-green-800 text-xl' />
                          </span>
                        </button>
                      )}
                    </div>
                  </div>
                ))}
                <div className='flex justify-center items-center'>
                  {' '}
                  <button
                    className='bg-blue-500 px-6 py-3 mt-8 mx-auto rounded text-white'
                    onClick={uploadMarks}
                  >
                    Upload Student Marks
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* {!studentData && (
        <>
          <div className='mt-10 w-full flex justify-evenly items-center gap-x-6'>
            <div className='w-full'>
              <label htmlFor='branch' className='leading-7 text-base '>
                Select Branch
              </label>
              <select
                id='branch'
                className='px-2 bg-blue-50 py-3 rounded-sm text-base w-full accent-blue-700 mt-1'
                value={selected.branch}
                onChange={e =>
                  setSelected({ ...selected, branch: e.target.value })
                }
              >
                <option defaultValue>-- Select --</option>
                {branch &&
                  branch.map(branch => {
                    return (
                      <option value={branch.name} key={branch.name}>
                        {branch.name}
                      </option>
                    )
                  })}
              </select>
            </div>
            <div className='w-full'>
              <label htmlFor='semester' className='leading-7 text-base '>
                Select Semester
              </label>
              <select
                id='semester'
                className='px-2 bg-blue-50 py-3 rounded-sm text-base w-full accent-blue-700 mt-1'
                value={selected.semester}
                onChange={e =>
                  setSelected({ ...selected, semester: e.target.value })
                }
              >
                <option defaultValue>-- Select --</option>
                <option value='1'>1st Semester</option>
                <option value='2'>2nd Semester</option>
                <option value='3'>3rd Semester</option>
                <option value='4'>4th Semester</option>
                <option value='5'>5th Semester</option>
                <option value='6'>6th Semester</option>
                <option value='7'>7th Semester</option>
                <option value='8'>8th Semester</option>
              </select>
            </div>
            <div className='w-full'>
              <label htmlFor='subject' className='leading-7 text-base '>
                Select Subject
              </label>
              <select
                id='subject'
                className='px-2 bg-blue-50 py-3 rounded-sm text-base w-full accent-blue-700 mt-1'
                value={selected.subject}
                onChange={e =>
                  setSelected({ ...selected, subject: e.target.value })
                }
              >
                <option defaultValue>-- Select --</option>
                {subject &&
                  subject.map(subject => {
                    return (
                      <option value={subject.name} key={subject.name}>
                        {subject.name}
                      </option>
                    )
                  })}
              </select>
            </div>
            <div className='w-full'>
              <label htmlFor='examType' className='leading-7 text-base '>
                Select Exam Type
              </label>
              <select
                id='examType'
                className='px-2 bg-blue-50 py-3 rounded-sm text-base w-full accent-blue-700 mt-1'
                value={selected.examType}
                onChange={e =>
                  setSelected({ ...selected, examType: e.target.value })
                }
              >
                <option defaultValue>-- Select --</option>
                <option value='internal'>Internal</option>
                <option value='external'>External</option>
              </select>
            </div>
          </div>
          <button
            className='bg-blue-50 px-4 py-2 mt-8 mx-auto rounded border-2 border-blue-500 text-black'
            onClick={loadStudentDetails}
          >
            Load Student Data
          </button>
        </>
      )}
      {studentData && studentData.length !== 0 && (
        <>
          <p className='mt-4 text-lg'>
            Upload {selected.examType} Marks Of {selected.branch} Semester{' '}
            {selected.semester} of {selected.subject}
          </p>
          <div
            className='w-full flex flex-wrap justify-center items-center mt-8 gap-4'
            id='markContainer'
          >
            {studentData.map(student => {
              return (
                <div
                  key={student.enrollmentNo}
                  className='w-[30%] flex justify-between items-center border-2 border-blue-500 rounded'
                  id={student.enrollmentNo}
                >
                  <p className='text-lg px-4 w-1/2 bg-blue-50'>
                    {student.enrollmentNo}
                  </p>
                  <input
                    type='number'
                    className='px-6 py-2 focus:ring-0 outline-none w-1/2'
                    placeholder='Enter Marks'
                    id={`${student.enrollmentNo}marks`}
                  />
                </div>
              )
            })}
          </div>
          <button
            className='bg-blue-500 px-6 py-3 mt-8 mx-auto rounded text-white'
            onClick={submitMarksHandler}
          >
            Upload Student Marks
          </button>
        </>
      )} */}
      </div>
    </>
  )
}

export default NewMarks
