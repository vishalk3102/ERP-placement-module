import React, { useEffect, useState } from 'react'
import { FiUpload } from 'react-icons/fi'
import Heading from '../../components/Heading'
import { useDispatch, useSelector } from 'react-redux'
import { addMaterials } from '../../Redux/Actions/facultyAction'
import { getAllStudent, getAllSubject } from '../../Redux/Actions/adminAction'
const Material = () => {
  const [title, setTitle] = useState()
  const [subject, setSubject] = useState()
  const [file, setFile] = useState()

  const dispatch = useDispatch()
  const { subjects } = useSelector(state => state.admin)

  useEffect(() => {
    dispatch(getAllSubject())
  }, [dispatch])

  const addMaterialHandler = () => {
    const formData = {
      title,
      subject,
      file
    }
    dispatch(addMaterials(formData))
  }
  return (
    <div className='w-[85%] mx-auto mt-10 flex justify-center items-start flex-col mb-10'>
      <div className='flex justify-between items-center w-full'>
        <Heading title={`Upload Material`} />
      </div>
      <div className='w-full flex justify-evenly items-center mt-12'>
        <div className='w-1/2 flex flex-col justify-center items-center'>
          <div className='w-[80%] mt-2'>
            <label htmlFor='title'>Material Title</label>
            <input
              type='text'
              id='title'
              className='bg-blue-50 py-2 px-4 w-full mt-1'
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          <div className='w-[80%] mt-2'>
            <label htmlFor='subject'>Material Subject</label>
            <select
              value={subject}
              name='subject'
              id='subject'
              onChange={e => setSubject(e.target.value)}
              className='px-2 bg-blue-50 py-3 rounded-sm text-base accent-blue-700 mt-1 w-full'
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
          {/*        {!selected.link && (
            <label
              htmlFor='upload'
              className='px-2 bg-blue-50 py-3 rounded-sm text-base w-[80%] mt-4 flex justify-center items-center cursor-pointer'
            >
              Upload Material
              <span className='ml-2'>
                <FiUpload />
              </span>
            </label>
          )}
          {selected.link && (
            <p
              className='px-2 border-2 border-blue-500 py-2 rounded text-base w-[80%] mt-4 flex justify-center items-center cursor-pointer'
              onClick={() => setSelected({ ...selected, link: '' })}
            >
              Remove Selected Material
              <span className='ml-2'>
                <AiOutlineClose />
              </span>
            </p>
          )} */}
          <div className='w-[80%] mt-2'>
            <label htmlFor='file' className='leading-7 text-sm '>
              select File
            </label>
            <label
              htmlFor='file'
              className='px-2 bg-blue-50 py-3 rounded-sm text-base w-full flex justify-center items-center cursor-pointer'
            >
              Upload
              <span className='ml-2'>
                <FiUpload />
              </span>
            </label>
            <input
              type='file'
              name='file'
              id='file'
              hidden
              onChange={e => setFile(e.target.files[0])}
            />
          </div>

          {file && <p className='text-sm mt-2'>{file.name}</p>}
          <button
            className='bg-blue-500 text-white mt-8 px-4 py-2 rounded-sm'
            onClick={addMaterialHandler}
          >
            Add Material
          </button>
        </div>
      </div>
    </div>
  )
}

export default Material
