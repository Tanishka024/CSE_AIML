import React from 'react'
import{Link, Outlet} from 'react-router-dom'
import './MainLayout.css'
function MainLayout() {
  return (
    <div><h2>Welcome to MainLayout</h2>
    <nav className='aa'>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/registration">Registration</Link></li>
      </nav>
      <Outlet/>
      </div>
  )
}

export default MainLayout