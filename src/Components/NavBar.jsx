import React from 'react'
// import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import icon1 from '../assets/img/dashboard-icon.svg'
const navList = [
  {
    id: 1,
    name: 'Dashboard',
    url: '/',
    img: icon1
  },
  {
    id: 2,
    name: 'Item',
    url: '/Item',
    img: icon1
  },
  {
    id: 3,
    name: 'ItemAdd',
    url: '/ItemAdd',
    img: icon1
  },
  {
    id: 4,
    name: 'ItemPreview',
    url: '/ItemPreview',
    img: icon1
  }
]
export default function NavBar() {
  return (
    <nav>
      {navList.map(nav => {
        return (
          <li key={nav.id}>
            {/* <Link to={nav.url}>{nav.name}</Link> */}
            <NavLink className={({isActive}) => isActive ? 'active' : ''} to={nav.url}><img src={nav.img} /> {nav.name}</NavLink>
          </li>
        )
      })}
    </nav>
  )
}