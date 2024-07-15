import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='container'>
      <div><Link to='/' className='link' >Home </Link></div>
      <div><Link to='/student' className='link'>StudentList </Link></div>
        
        
    </div>
  )
}

export default Navbar