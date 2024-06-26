import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import ProtectedRoute from './ProtectedRoute'

// GENERAL
import Login from './components/Login'
import StudentHome from './Screens/Student/Home'
import FacultyHome from './Screens/Faculty/Home'
import AdminHome from './Screens/Admin/Home'

// Student Placement
import StudentDashboard from './Screens/Placement/Student/Dashboard'
import Registration from './Screens/Placement/Student/Registration'
import StudentProfile from './Screens/Placement/Student/Profile'
import StudentCompany from './Screens/Placement/Student/Company'
import StudentEligibleJobs from './Screens/Placement/Student/EligibleJobs'
import StudentApplications from './Screens/Placement/Student/Application'
import StudentPlacementDrive from './Screens/Placement/Student/PlacementDrive'
import Notice from './Screens/Placement/Student/Notice'

// Admin Placement
import AdminDashboard from './Screens/Placement/Admin/Dashboard'
import Application from './Screens/Placement/Admin/Application'
import CompanyWiseStudentList from './Screens/Placement/Admin/CompanyWiseStudentList'

// Placement Drive
import PlacementDrive from './Screens/Placement/Admin/Placement Drive/PlacementDrive'
import AddDrive from './Screens/Placement/Admin/Placement Drive/AddDrive'
import EditDrive from './Screens/Placement/Admin/Placement Drive/EditDrive'

// Notice
import PlacementNotice from './Screens/Placement/Admin/Notice/Notice'

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
import ViewStudentCompany from './Screens/Placement/Student/ViewCompany'
import ViewStudentJobPost from './Screens/Placement/Student/ViewJobPost'

//Placed Student
import PlacedStudent from './Screens/Placement/Admin/PlacedStudent/Student'
import EditPlacedStudent from './Screens/Placement/Admin/PlacedStudent/EditStudent'
import AddPlacedStudent from './Screens/Placement/Admin/PlacedStudent/AddStudent'

const App = () => {
  const dispatch = useDispatch()

  const { error, message, user, isAuthenticated } = useSelector(
    state => state.auth
  )

  // useEffect(() => {
  //   if (error) {
  //     toast.error(error)
  //     dispatch({
  //       type: 'clearError'
  //     })
  //   }
  //   if (message) {
  //     toast.success(message)
  //     dispatch({
  //       type: 'clearMessage'
  //     })
  //   }
  // }, [dispatch, error, message])

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route
            path='/student/home'
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                studentRoute={true}
                isStudent={user && user.userType === 'student'}
              >
                <StudentHome />
              </ProtectedRoute>
            }
          />
          <Route
            path='/faculty/home'
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                facultyRoute={true}
                isFaculty={user && user.userType === 'faculty'}
              >
                <FacultyHome />
              </ProtectedRoute>
            }
          />
          <Route
            path='/admin/home'
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user && user.userType === 'admin'}
              >
                <AdminHome />
              </ProtectedRoute>
            }
          />

          {/* ADMIN PLACEMENT DASHBOARD ROUTE  */}
          <Route
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user && user.userType === 'admin'}
              />
            }
          >
            {' '}
            <Route
              exact
              path='/admin/placement/dashboard'
              element={<AdminDashboard />}
            />
            <Route
              exact
              path='/admin/placement/students'
              element={<Student />}
            />
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
              path='/admin/placement/application/:id'
              element={<CompanyWiseStudentList />}
            />
            <Route
              exact
              path='/admin/placement/drive'
              element={<PlacementDrive />}
            />
            <Route
              exact
              path='/admin/placement/drive/add'
              element={<AddDrive />}
            />
            <Route
              exact
              path='/admin/placement/drive/:id'
              element={<EditDrive />}
            />
            <Route
              exact
              path='/admin/placement/notice'
              element={<PlacementNotice />}
            />
            <Route
              exact
              path='/admin/placement/placedstudents'
              element={<PlacedStudent />}
            />
            <Route
              exact
              path='/admin/placement/placedstudents/add'
              element={<AddPlacedStudent />}
            />
            <Route
              exact
              path='/admin/placement/placedstudents/edit/:id'
              element={<EditPlacedStudent />}
            />
          </Route>

          {/* STUDENT PLACEMENT DASHBOARD ROUTES */}
          <Route
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                studentRoute={true}
                isStudent={user && user.userType === 'student'}
              />
            }
          >
            <Route
              exact
              path='/student/placement/dashboard'
              element={<StudentDashboard />}
            />
            <Route
              exact
              path='/student/placement/profile/:id'
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
              element={<ViewStudentCompany />}
            />
            <Route
              exact
              path='/student/placement/eligiblejobs'
              element={<StudentEligibleJobs />}
            />
            <Route
              exact
              path='/student/placement/eligiblejob/view/:id'
              element={<ViewStudentJobPost />}
            />
            <Route
              exact
              path='/student/placement/eligiblejob/apply/:id'
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
              element={<StudentPlacementDrive />}
            />
            <Route
              exact
              path='/student/placement/notice'
              element={<Notice />}
            />
          </Route>
        </Routes>
        <Toaster />
      </Router>
    </>
  )
}

export default App
