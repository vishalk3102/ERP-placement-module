import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({
  isAuthenticated,
  children,
  adminRoute,
  facultyRoute,
  studentRoute,
  isAdmin,
  isFaculty,
  isStudent,
  redirect = '/'
}) => {
  if (!isAuthenticated) {
    return <Navigate to={redirect} />
  }

  if (adminRoute && !isAdmin) {
    return <Navigate to={redirect} />
  }
  if (studentRoute && !isStudent) {
    return <Navigate to={redirect} />
  }
  if (facultyRoute && !isFaculty) {
    return <Navigate to={redirect} />
  }

  return children ? children : <Outlet />
}

export default ProtectedRoute
