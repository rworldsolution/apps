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
function clickHandler(select) {
  {
    console.log(select);
  }
}
export default function NavBar(props) {
  return (
    <nav>
      {navList.map(nav => {
        return (
          <li onClick={() => clickHandler(`${nav.name}`)} key={nav.id}>{nav.name}</li>
        )
      })}
    </nav>
  )
}
