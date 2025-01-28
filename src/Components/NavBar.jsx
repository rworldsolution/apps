import React from 'react'
// import { useState } from 'react';
import { Link } from 'react-router-dom';
const navList = [
  {
    id: 1,
    name: 'Item',
    url: '/Item'
  },
  {
    id: 2,
    name: 'Dashboard',
    url: '/'
  }
]
export default function NavBar() {
  return (
    <nav>
      {navList.map(nav => {
        return (
          <li key={nav.id}>
            <Link to={nav.url}>{nav.name}</Link>
          </li>
        )
      })}
    </nav>
  )
}