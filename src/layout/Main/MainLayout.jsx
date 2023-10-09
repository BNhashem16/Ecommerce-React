import Navbar from 'components/Navbar/Navbar'
import { tokenContext } from 'context/TokenContext'
import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  let { setToken } = useContext(tokenContext)
  if (localStorage.getItem('token')) {
    setToken(localStorage.getItem('token'))
  }
  return (
    <>
    <Navbar />
    <Outlet />
    </>
  )
}

export default MainLayout
