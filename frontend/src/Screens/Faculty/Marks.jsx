import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Heading from '../../components/Heading'
import toast from 'react-hot-toast'
import { getAllSubject, getStudent } from '../../Redux/Actions/adminAction'
import { FiSearch, FiX } from 'react-icons/fi'
import Loader from '../../components/Loader'
import profile from '../../assets/profile.jpg'
import { IoAddOutline } from 'react-icons/io5'
import Subjects from '../Admin/Subject'
import { FaMinus } from 'react-icons/fa6'
import { addStudentMarks } from '../../Redux/Actions/facultyAction'
import MetaData from '../../components/MetaData'

const Marks = () => {
  const [searchActive, setSearchActive] = useState(false)
  const [search, setSearch] = useState()
  const [examType, setExamType] = useState()
  const [marksList, setMarksList] = useState([{ subject: '', mark: '' }])
  const [marks, setMarks] = useState([
    {
      semester: '',
      midTerm: new Map(),
      endTerm: new Map()
    }
  ])
  const dispatch = useDispatch()
  const { loading, student } = useSelector(state => state.faculty)
  const { subjects } = useSelector(state => state.admin)

  useEffect(() => {
    dispatch(getAllSubject())
  }, [dispatch])

  const searchStudentHandler = e => {
    e.preventDefault()
    dispatch(getStudent(search))
    setSearchActive(!searchActive)
  }
  const clearSearchHandler = () => {
    setSearchActive(false)
    setSearch('')
  }

  // HANDLE ADD MARK BUTTON CLICK
  const addMarksRow = () => {
    setMarksList(prevMarks => [...prevMarks, { subject: '', mark: '' }])
  }

  // HANDLE REMOVE MARK BUTTON CLICK
  const removeMarkRow = index => {
    setMarksList(prevMarks => {
      const updatedMarks = [...prevMarks]
      updatedMarks.splice(index, 1)
      return updatedMarks
    })
  }

  // HANDLE SUBJECT CHANGE
  const handleSubjectChange = (index, value) => {
    const newMarks = [...marksList]
    newMarks[index].subject = value
    setMarksList(newMarks)
  }

  // HANDLE MARK CHANGE
  const handleMarkChange = (index, value) => {
    const newMarks = [...marksList]
    newMarks[index].mark = value
    setMarksList(newMarks)
  }

  // FUNCTION TO HANDLE UPLOAD BUTTON CLICK
  const uploadMarks = () => {
    const enrollmentNo = student.enrollmentNo
    const branch = student.branch
    const semester = student.semester
    if (!Array.isArray(marksList)) {
      console.error('marksList is not an array')
      return
    }
    const marksData = [
      {
        semester: semester,
        [examType]: Object.fromEntries(
          marksList.map(item => [item.subject, parseInt(item.mark)])
        )
      }
    ]
    console.log(marksData)
    dispatch(
      addStudentMarks({
        enrollmentNo,
        branch,
        semester,
        examType,
        marks: marksData
      })
    )
  }

  return (
    <>
      <MetaData title='Marks' />
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
                  <p className='text-2xl font-semibold capitalize '>
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
                <div className='w-full flex justify-evenly flex-row gap-5 mt-3 mb-2'>
                  <div className='w-full'>
                    <label htmlFor='branch' className='leading-7 text-base '>
                      Branch
                    </label>
                    <select
                      id='branch'
                      className='px-2 border-2 border-solid border-blue-400 py-2 rounded-sm text-base w-full accent-blue-700 mt-1'
                      value={student.branch}
                      disabled
                    >
                      <option value={student.branch}>
                        {student.branch ? `${student.branch}` : '-- Select --'}
                      </option>
                    </select>
                  </div>
                  <div className='w-full'>
                    <label htmlFor='semester' className='leading-7 text-base '>
                      Semester
                    </label>
                    <select
                      id='semester'
                      className='px-2 border-2 border-solid border-blue-400 py-2 rounded-sm text-base w-full accent-blue-700 mt-1'
                      value={student.semester}
                      disabled
                    >
                      <option value={student.semester}>
                        {student.semester
                          ? `${student.semester}th Semester`
                          : '-- Select --'}
                      </option>
                    </select>
                  </div>
                  <div className='w-full'>
                    <label htmlFor='semester' className='leading-7 text-base '>
                      Exam Type
                    </label>
                    <select
                      id='examtype'
                      className='px-2 border-2 border-solid border-blue-400 py-2 rounded-sm text-base w-full accent-blue-700 mt-1'
                      value={examType}
                      onChange={e => setExamType(e.target.value)}
                    >
                      <option defaultValue>-- Select Exam Type --</option>
                      <option value='midTerm'>Mid Term</option>
                      <option value='endTerm'>End Term</option>
                    </select>
                  </div>
                </div>
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
      </div>
    </>
  )
}

export default Marks
