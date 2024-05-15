import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Profile from './Profile'
import Timetable from './Timetable'
import Marks from './Marks'
import Material from './Material'
import { useNavigate } from 'react-router-dom'
import Notice from './Notice'
import MetaData from '../../components/MetaData'

const Home = () => {
  const [selectedMenu, setSelectedMenu] = useState('My Profile')
  const navigate = useNavigate()

  // FUNCTION TO HANDLE PLACEMENT BUTTON CLICK
  const handlePlacementClick = () => {
    navigate('/student/placement/dashboard')
  }
  return (
    <section>
      <>
        <Navbar />
        <MetaData title='Home' />
        <ul className='flex justify-evenly items-center gap-10 w-[85%] mx-auto my-8'>
          <li
            className={`text-center rounded-sm px-4 py-2 w-1/5 cursor-pointer ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
              selectedMenu === 'My Profile'
                ? 'border-b-2 pb-2 border-blue-500 bg-blue-100 rounded-sm'
                : 'bg-blue-500 text-white hover:bg-blue-600 border-b-2 border-blue-500'
            }`}
            onClick={() => setSelectedMenu('My Profile')}
          >
            My Profile
          </li>
          <li
            className={`text-center rounded-sm px-4 py-2 w-1/5 cursor-pointer ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
              selectedMenu === 'Timetable'
                ? 'border-b-2 pb-2 border-blue-500 bg-blue-100 rounded-sm'
                : 'bg-blue-500 text-white hover:bg-blue-600 border-b-2 border-blue-500'
            }`}
            onClick={() => setSelectedMenu('Timetable')}
          >
            Timetable
          </li>
          <li
            className={`text-center rounded-sm px-4 py-2 w-1/5 cursor-pointer ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
              selectedMenu === 'Marks'
                ? 'border-b-2 pb-2 border-blue-500 bg-blue-100 rounded-sm'
                : 'bg-blue-500 text-white hover:bg-blue-600 border-b-2 border-blue-500'
            }`}
            onClick={() => setSelectedMenu('Marks')}
          >
            Marks
          </li>
          <li
            className={`text-center rounded-sm px-4 py-2 w-1/5 cursor-pointer ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
              selectedMenu === 'Material'
                ? 'border-b-2 pb-2 border-blue-500 bg-blue-100 rounded-sm'
                : 'bg-blue-500 text-white hover:bg-blue-600 border-b-2 border-blue-500'
            }`}
            onClick={() => setSelectedMenu('Material')}
          >
            Material
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
              selectedMenu === 'Placement'
                ? 'border-b-2 pb-2 border-blue-500 bg-blue-100 rounded-sm'
                : 'bg-blue-500 text-white hover:bg-blue-600 border-b-2 border-blue-500'
            }`}
            onClick={handlePlacementClick}
          >
            Placement
          </li>
        </ul>
        <>
          {selectedMenu === 'Timetable' && <Timetable />}
          {selectedMenu === 'Marks' && <Marks />}
          {selectedMenu === 'Material' && <Material />}
          {selectedMenu === 'Notice' && <Notice />}
          {selectedMenu === 'My Profile' && <Profile />}
        </>
      </>
    </section>
  )
}

export default Home
