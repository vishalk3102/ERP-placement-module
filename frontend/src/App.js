import React from 'react'
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import StudentHome from './Screens/Student/Home'
import FacultyHome from './Screens/Faculty/Home'
import AdminHome from './Screens/Admin/Home'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='student' element={<StudentHome />} />
          <Route path='faculty' element={<FacultyHome />} />
          <Route path='admin' element={<AdminHome />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
