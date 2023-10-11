import React from 'react'
import styles from './ProtectedRoute.module.css'
import { Navigate, useNavigate } from 'react-router-dom';

const ProtectedRoute = (props) => {
  if (localStorage.getItem('token')) {
    return props.children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default ProtectedRoute
