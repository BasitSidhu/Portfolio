import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div >
     <nav className='nav'>
        <h2 className='logo'>Portfo<span>lio</span></h2>
        <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About Us</a></li>
            <li><a href='#'>Services</a></li>
            <li><a href='#'>Skills</a></li>
            <li><a href='#'>Contacts</a></li>
        </ul>
        <a href='#' className='btn'>Subscribe</a>
     </nav>
    </div>
  )
}

export default Navbar