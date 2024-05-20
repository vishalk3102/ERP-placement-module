import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'
import { getMarksByEnrollmentNo } from '../../Redux/Actions/studentAction'
import Loader from '../../components/Loader'
import Heading from '../../components/Heading'
import MetaData from '../../components/MetaData'

const Marks = () => {
  const [semester, setSemester] = useState('')
  const [examType, setExamType] = useState('')
  const [marksActive, setMarksActive] = useState(false)

  const dispatch = useDispatch()

  const { user } = useSelector(state => state.auth)
  // const {
  //   user: { enrollmentNo }
  // } = useSelector(state => state.auth)

  const { loading, marks } = useSelector(state => state.student)

  // FUNCTION TO HANDLE GETMARKS CLICK
  const getMarks = () => {
    const enrollmentNo = 2017132
    dispatch(getMarksByEnrollmentNo(enrollmentNo))
      .then(result => {
        if (result.marks) {
          setMarksActive(true)
        } else {
          toast.error('No marks found')
        }
      })
      .catch(err => {
        toast.error('No marks found ')
      })
  }

  return (
    <>
      <MetaData title='Marks' />
      {loading === false ? (
        <div className='w-[85%] mx-auto mt-10 flex justify-center items-start flex-col mb-10'>
          <Heading title={`Marks of Semester 8th`} />
          <div className='mt-5 w-full'>
            <div className='w-full flex justify-evenly flex-row gap-5 mt-3 mb-2'>
              <div className='w-full'>
                <label htmlFor='semester' className='leading-7 text-base '>
                  Semester
                </label>
                <select
                  id='semester'
                  className='px-2 border-2 border-solid border-blue-400 py-2 rounded-sm text-base w-full accent-blue-700 mt-1'
                  value={semester}
                  onChange={e => setSemester(e.target.value)}
                >
                  <option value=''>-- Select Semester --</option>
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
                <label htmlFor='semester' className='leading-7 text-base '>
                  Exam Type
                </label>
                <select
                  id='examtype'
                  className='px-2 border-2 border-solid border-blue-400 py-2 rounded-sm text-base w-full accent-blue-700 mt-1'
                  value={examType}
                  onChange={e => setExamType(e.target.value)}
                >
                  <option value=''>-- Select Exam Type --</option>
                  <option value='mid'>Mid Term</option>
                  <option value='end'>End Term</option>
                </select>
              </div>
            </div>
            <div className='flex justify-center items-center'>
              <button
                className='bg-blue-500 px-6 py-3 mt-4 mx-auto rounded text-white'
                onClick={getMarks}
              >
                Get Marks
              </button>
            </div>
          </div>
          {marksActive ? (
            <>
              <div className='mt-14 w-full flex flex-col gap-20'>
                {marks &&
                  marks[0] &&
                  marks[0][semester - 1] &&
                  examType === 'mid' &&
                  marks[0][semester - 1].midTerm && (
                    <div className='shadow-md p-4'>
                      <p className='border-b-2 border-red-500 text-2xl font-semibold pb-2'>
                        Mid Term Marks (Out of 25)
                      </p>
                      <div className='overflow-auto mt-8'>
                        <table className='border-solid border-2 border-blue-900 border-collapse rounded mx-auto my-5'>
                          <thead>
                            <tr className='w-[100%] border-solid border-2 border-blue-400'>
                              <th className=' text-[0.8rem] md:text-[1.2rem] font-bold bg-blue-400  border border-blue-900 py-3 px-8 uppercase text-center'>
                                Subject Name
                              </th>
                              <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-blue-400 border border-blue-900 py-3 px-8  uppercase text-center'>
                                Maximum Marks
                              </th>
                              <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-blue-400 border border-blue-900 py-3 px-8  uppercase text-center'>
                                Obtained Marks
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {Object.entries(marks[0][semester - 1].midTerm).map(
                              ([subject, mark]) => (
                                <tr
                                  key={subject}
                                  className='border border-slate-900'
                                >
                                  <td className='text-[0.7rem] md:text-[1rem] font-normal bg-blue-50  border border-blue-900 p-1 capitalize text-center'>
                                    {subject}
                                  </td>
                                  <td className='text-[0.7rem] md:text-[1rem] font-normal bg-blue-50  border border-blue-900 p-1 capitalize text-center'>
                                    25
                                  </td>
                                  <td className='text-[0.7rem] md:text-[1rem] font-normal bg-blue-50  border border-blue-900 p-1 capitalize text-center'>
                                    {mark}
                                  </td>
                                </tr>
                              )
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                {marks &&
                  marks[0] &&
                  marks[0][semester - 1] &&
                  examType === 'end' &&
                  marks[0][semester - 1].endTerm && (
                    <div className='shadow-md p-4'>
                      <p className='border-b-2 border-red-500 text-2xl font-semibold pb-2'>
                        End Term Marks (Out of 50 )
                      </p>
                      <div className='overflow-auto mt-8'>
                        <table className='border-solid border-2 border-blue-900 border-collapse rounded mx-auto my-5'>
                          <thead>
                            <tr className='w-[100%] border-solid border-2 border-blue-400'>
                              <th className=' text-[0.8rem] md:text-[1.2rem] font-bold bg-blue-400  border border-blue-900 py-3 px-8 uppercase text-center'>
                                Subject Name
                              </th>
                              <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-blue-400 border border-blue-900 py-3 px-8  uppercase text-center'>
                                Maximum Marks
                              </th>
                              <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-blue-400 border border-blue-900 py-3 px-8  uppercase text-center'>
                                Obtained Marks
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {Object.entries(marks[0][semester - 1].endTerm).map(
                              ([subject, mark]) => (
                                <tr
                                  key={subject}
                                  className='border border-slate-900'
                                >
                                  <td className='text-[0.7rem] md:text-[1rem] font-normal bg-blue-50  border border-blue-900 p-1 capitalize text-center'>
                                    {subject}
                                  </td>
                                  <td className='text-[0.7rem] md:text-[1rem] font-normal bg-blue-50  border border-blue-900 p-1 capitalize text-center'>
                                    25
                                  </td>
                                  <td className='text-[0.7rem] md:text-[1rem] font-normal bg-blue-50  border border-blue-900 p-1 capitalize text-center'>
                                    {mark}
                                  </td>
                                </tr>
                              )
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
              </div>
              {!marks ||
              !marks[0] ||
              !marks[0][semester - 1] ||
              !marks[0][semester - 1].endTerm ||
              !marks[0][semester - 1].midTerm ? (
                <p className='text-center'>No Marks Available!</p>
              ) : null}
            </>
          ) : (
            ''
          )}
        </div>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default Marks
