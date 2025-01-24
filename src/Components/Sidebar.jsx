import React from 'react'
import logo from '../assets/img/logo-white.svg'
import Nav from './Nav'
import NavBar from './NavBar'
import navIcon from '../assets/img/nav-icon.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
export default function Sidebar() {
  return (
    <>
    <div className='sidebar-are'>
        <div className='sidebar-head'>
            <img src={logo} />
        </div>
        <div className='sidebar-navbar'>
        <ul className='man-navbar'>
          <NavBar />
            {/* <Nav navText='Dashboard' img={navIcon} active='active' />
            <Nav navText='Dashboard' img={navIcon1} /> */}
        </ul>
    </div>
    </div>
    </>
  )
}
