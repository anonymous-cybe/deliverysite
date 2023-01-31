import React from 'react';
import './navbar.css';
import logo from '../components/img/logo2.png';

export default function Navbar() {
  return (
    <div className='nav-parent-div mb-5'>
        <nav className='navbar'>
          <div className='nav-wrapper'>
            <div className='left-div'><a href='#'><img src={logo}/></a></div>
            <div className='right-div'>
                <span><a href='#' target='_blank'><p>HELP</p></a></span>
               <a type='button' href='/login' className='button mx-5'>Sign In</a>
            </div>
          </div>
          </nav>
        
    </div>
  )
}
