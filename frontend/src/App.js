import React from 'react'
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import StudentHome from './Screens/Student/Home'
import FacultyHome from './Screens/Faculty/Home'
import AdminHome from './Screens/Admin/Home'

import toast, { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from './Redux/Actions/authAction'
import { useEffect } from 'react'
import { ProtectedRoute } from 'protected-route-react'
import Dashboard from './Screens/Placement/Admin/Dashboard'
import Company from './Screens/Placement/Admin/Company'
import JobPosting from './Screens/Placement/Admin/JobPosting'
import Student from './Screens/Placement/Admin/Student'
import Application from './Screens/Placement/Admin/Application'
import CompanyWiseStudentList from './Screens/Placement/Admin/CompanyWiseStudentList'
const App = () => {
  const dispatch = useDispatch()

  const { error, message, user, isAuthenticated } = useSelector(
    state => state.auth
  )

  useEffect(() => {
    if (error) {
      toast.error(error)
      dispatch({
        type: 'clearError'
      })
    }
    if (message) {
      toast.success(message)
      dispatch({
        type: 'clearMessage'
      })
    }
  }, [dispatch, error, message])

  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <ProtectedRoute
                isAuthenticated={!isAuthenticated}
                redirect='/student'
              >
                <Login />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path='/student'
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <StudentHome />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path='/faculty'
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <FacultyHome />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path='/admin'
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <AdminHome />
              </ProtectedRoute>
            }
          />

          <Route
            exact
            path='/admin/placement/dashboard'
            element={<Dashboard />}
          />
          <Route exact path='/admin/placement/student' element={<Student />} />
          <Route
            exact
            path='/admin/placement/companies'
            element={<Company />}
          />
          <Route
            exact
            path='/admin/placement/jobposting'
            element={<JobPosting />}
          />
          <Route
            exact
            path='/admin/placement/application'
            element={<Application />}
          />
          <Route
            exact
            path='/admin/placement/application/company/companywise'
            element={<CompanyWiseStudentList />}
          />
        </Routes>
        <Toaster />
      </Router>
    </>
  )
}

export default App
