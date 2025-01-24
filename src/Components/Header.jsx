import React from 'react'
import Sidebar from './Sidebar'
import UserDropdown from './UserDropdown'
import notification from '../assets/img/notification.svg'
import user from '../assets/img/user.png'
export default function Header() {
  return (
    <>
    <header className='main-header'>
        <div className='header-inn'>
        <Sidebar />
        <div className="header-right d-flex align-items-center">
   <div className="col-4">
      <div className="header-searchbar">
         <input className="form-control form_header" type="text" placeholder="Search here..." />
      </div>
   </div>
   <div className="col-8">
      <div className="d-flex justify-content-end">
      <img src={notification} className='w-30 me-20' />
         <UserDropdown />
      </div>
   </div>
</div>
        </div>
    </header>
    </>
  )
}
