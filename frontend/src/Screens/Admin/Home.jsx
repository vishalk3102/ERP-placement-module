/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Student from './Student/Student'
import Faculty from './Faculty/Faculty'
import Subjects from './Subject'
import Admin from './Admin/Admin'
import Profile from './Profile'
import Branch from './Branch'
import Notice from './Notice/Notice'

const Home = () => {
  const navigate = useNavigate()
  const [selectedMenu, setSelectedMenu] = useState('Profile')

  const handlePlacementClick = () => {
    navigate('/admin/placement/dashboard')
  }
  return (
    <>
      <>
        <Navbar />
        <div className='w-[100%] mx-auto mt-8 flex justify-center items-start flex-col container'>
          <ul className='flex justify-evenly items-center gap-10 w-[90%] mx-auto'>
            <li
              className={`text-center rounded-sm px-4 py-2 w-1/5 cursor-pointer ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
                selectedMenu === 'Profile'
                  ? 'border-b-2 pb-2 border-blue-500 bg-blue-100 rounded-sm'
                  : 'bg-blue-500 text-white hover:bg-blue-600 border-b-2 border-blue-500'
              }`}
              onClick={() => setSelectedMenu('Profile')}
            >
              Profile
            </li>
            <li
              className={`text-center rounded-sm px-4 py-2 w-1/5 cursor-pointer ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
                selectedMenu === 'Student'
                  ? 'border-b-2 pb-2 border-blue-500 bg-blue-100 rounded-sm'
                  : 'bg-blue-500 text-white hover:bg-blue-600 border-b-2 border-blue-500'
              }`}
              onClick={() => setSelectedMenu('Student')}
            >
              Student
            </li>
            <li
              className={`text-center rounded-sm px-4 py-2 w-1/5 cursor-pointer ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
                selectedMenu === 'Faculty'
                  ? 'border-b-2 pb-2 border-blue-500 bg-blue-100 rounded-sm'
                  : 'bg-blue-500 text-white hover:bg-blue-600 border-b-2 border-blue-500'
              }`}
              onClick={() => setSelectedMenu('Faculty')}
            >
              Faculty
            </li>
            <li
              className={`text-center rounded-sm px-4 py-2 w-1/5 cursor-pointer ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
                selectedMenu === 'Admin'
                  ? 'border-b-2 pb-2 border-blue-500 bg-blue-100 rounded-sm'
                  : 'bg-blue-500 text-white hover:bg-blue-600 border-b-2 border-blue-500'
              }`}
              onClick={() => setSelectedMenu('Admin')}
            >
              Admins
            </li>
            <li
              className={`text-center rounded-sm px-4 py-2 w-1/5 cursor-pointer ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
                selectedMenu === 'Branch'
                  ? 'border-b-2 pb-2 border-blue-500 bg-blue-100 rounded-sm'
                  : 'bg-blue-500 text-white hover:bg-blue-600 border-b-2 border-blue-500'
              }`}
              onClick={() => setSelectedMenu('Branch')}
            >
              Branch
            </li>
            <li
              className={`text-center rounded-sm px-4 py-2 w-1/5 cursor-pointer ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
                selectedMenu === 'Notice'
                  ? 'border-b-2 pb-2 border-blue-500 bg-blue-100 rounded-sm'
                  : 'bg-blue-500 text-white hover:bg-blue-600 border-b-2 border-blue-500'
              }`}
              onClick={() => setSelectedMenu('Notice')}
            >
              Notice
            </li>
            <li
              className={`text-center rounded-sm px-4 py-2 w-1/5 cursor-pointer ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
                selectedMenu === 'Subjects'
                  ? 'border-b-2 pb-2 border-blue-500 bg-blue-100 rounded-sm'
                  : 'bg-blue-500 text-white hover:bg-blue-600 border-b-2 border-blue-500'
              }`}
              onClick={() => setSelectedMenu('Subjects')}
            >
              Subjects
            </li>

            <li
              className={`text-center rounded-sm px-4 py-2 w-1/5 cursor-pointer ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
                selectedMenu === 'Placement'
                  ? 'border-b-2 pb-2 border-blue-500 bg-blue-100 rounded-sm'
                  : 'bg-blue-500 text-white hover:bg-blue-600 border-b-2 border-blue-500'
              }`}
              onClick={handlePlacementClick}
            >
              Placement
            </li>
          </ul>
        </div>
        <>
          {selectedMenu === 'Profile' && <Profile />}
          {selectedMenu === 'Student' && <Student />}
          {selectedMenu === 'Faculty' && <Faculty />}
          {selectedMenu === 'Admin' && <Admin />}
          {selectedMenu === 'Branch' && <Branch />}
          {selectedMenu === 'Subjects' && <Subjects />}
          {selectedMenu === 'Notice' && <Notice />}
        </>
      </>
    </>
  )
}

export default Home
