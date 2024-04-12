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

// Student Placement
import StudentDashboard from './Screens/Placement/Student/Dashboard'
import Registration from './Screens/Placement/Student/Registration'
import StudentProfile from './Screens/Placement/Student/Profile'
import StudentCompany from './Screens/Placement/Student/Company'
import StudentEligibleJobs from './Screens/Placement/Student/EligibleJobs'
import StudentApplications from './Screens/Placement/Student/Application'
import PlacementDrive from './Screens/Placement/Student/PlacementDrive'
import Notice from './Screens/Placement/Student/Notice'

// Admin Placement
import AdminDashboard from './Screens/Placement/Admin/Dashboard'
import Application from './Screens/Placement/Admin/Application'
import CompanyWiseStudentList from './Screens/Placement/Admin/CompanyWiseStudentList'

//Company
import Company from './Screens/Placement/Admin/Company/Company'
import AddCompany from './Screens/Placement/Admin/Company/AddCompany'
import ViewCompany from './Screens/Placement/Admin/Company/ViewCompany'
import EditCompany from './Screens/Placement/Admin/Company/EditCompany'

//Job Post
import JobPosting from './Screens/Placement/Admin/JobPost/JobPosting'
import CreateJobPost from './Screens/Placement/Admin/JobPost/CreateJobPost'
import EditJobPost from './Screens/Placement/Admin/JobPost/EditJobPost'
import ViewJobPost from './Screens/Placement/Admin/JobPost/ViewJobPost'

//Student
import Student from './Screens/Placement/Admin/Student/Student'
import EditStudent from './Screens/Placement/Admin/Student/EditStudent'
import ViewStudent from './Screens/Placement/Admin/Student/ViewStudent'
import Apply from './Screens/Placement/Student/Apply'

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
          <Route exact path='/' element={<Login />} />
          <Route exact path='/student/home' element={<StudentHome />} />
          <Route exact path='/faculty/home' element={<FacultyHome />} />
          <Route exact path='/admin/home' element={<AdminHome />} />

          {/* ADMIN PLACEMENT DASHBOARD ROUTE  */}
          <Route
            exact
            path='/admin/placement/dashboard'
            element={<AdminDashboard />}
          />
          <Route exact path='/admin/placement/students' element={<Student />} />
          <Route
            exact
            path='/admin/placement/student/edit/:id'
            element={<EditStudent />}
          />
          <Route
            exact
            path='/admin/placement/student/view/:id'
            element={<ViewStudent />}
          />
          <Route
            exact
            path='/admin/placement/companies'
            element={<Company />}
          />
          <Route
            exact
            path='/admin/placement/company/add'
            element={<AddCompany />}
          />
          <Route
            exact
            path='/admin/placement/company/edit/:id'
            element={<EditCompany />}
          />
          <Route
            exact
            path='/admin/placement/company/view/:id'
            element={<ViewCompany />}
          />
          <Route
            exact
            path='/admin/placement/jobpostings'
            element={<JobPosting />}
          />
          <Route
            exact
            path='/admin/placement/jobposting/create'
            element={<CreateJobPost />}
          />
          <Route
            exact
            path='/admin/placement/jobposting/edit/:id'
            element={<EditJobPost />}
          />
          <Route
            exact
            path='/admin/placement/jobposting/view/:id'
            element={<ViewJobPost />}
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

          {/* STUDENT PLACEMENT DASHBOARD ROUTES */}
          <Route
            exact
            path='/student/placement/dashboard'
            element={<StudentDashboard />}
          />
          <Route
            exact
            path='/student/placement/me'
            element={<StudentProfile />}
          />
          <Route
            exact
            path='/student/placement/register'
            element={<Registration />}
          />
          <Route
            exact
            path='/student/placement/companies'
            element={<StudentCompany />}
          />
          <Route
            exact
            path='/student/placement/company/view/:id'
            element={<StudentCompany />}
          />
          <Route
            exact
            path='/student/placement/eligiblejobs'
            element={<StudentEligibleJobs />}
          />
          <Route
            exact
            path='/student/placement/eligiblejob/view/:id'
            element={<StudentEligibleJobs />}
          />
          <Route
            exact
            path='/student/placement/eligiblejobs/apply'
            element={<Apply />}
          />
          <Route
            exact
            path='/student/placement/application'
            element={<StudentApplications />}
          />
          <Route
            exact
            path='/student/placement/drive'
            element={<PlacementDrive />}
          />
          <Route exact path='/student/placement/notice' element={<Notice />} />
        </Routes>
        <Toaster />
      </Router>
    </>
  )
}

export default App
