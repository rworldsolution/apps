import React from 'react'
const navList = [
    {
        id: 1,
        name: 'Home',
        url: '/'
    },
    {
        id: 2,
        name: 'Dashbord',
        url: '/Dashbord'
    }
]
export default function NavBar() {
  return (
    <nav>
    {navList.map(nav =>{
      return(
        <li key={nav.id}>{nav.name}</li>
      )
    })}
    </nav>
  )
}
