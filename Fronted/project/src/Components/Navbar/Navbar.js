import React from 'react';
import './Navbar.css';

const Navbar = ({ setCurrentPage }) => {
  return (
    <div className='container'>
      <div><button onClick={() => setCurrentPage('home')} className='link'>Home</button></div>
      <div><button onClick={() => setCurrentPage('students')} className='link'>StudentList</button></div>
      <div><button onClick={() => setCurrentPage('card')} className='link'>Card</button></div>
    </div>
  ); 
}

export default Navbar;
