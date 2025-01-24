import React from 'react'
import dropImg1 from '../assets/img/user.png';
import dropImg2 from '../assets/img/Profile.svg';
import dropImg3 from '../assets/img/Ticket.svg';
import dropImg4 from '../assets/img/Password.svg';
import dropImg5 from '../assets/img/call.svg';
import dropImg6 from '../assets/img/mail.svg';
import dropImg7 from '../assets/img/Logout.svg';

export default function UserDropdown() {
  return (
    <>
    <div className="dropdown">
    <span className="dropdown-toggle user" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
       <div className="d-flex align-items-center">
          <div className="text-center me-10">
             <span className="mb-0 user_name">Devon Lane</span>
             <span className="user_sub">Inventory Manager</span>
          </div>
          <div>
             <img src={dropImg1} className="user_img" />
          </div>
       </div>
    </span>
    <ul className="dropdown-menu header-user" aria-labelledby="dropdownMenuButton1" >
    <div className="user_box">
    <div className="d-flex align-items-center bb-1 px-5 pb-5">
            <div>
               <img src={dropImg1} className="user_img" />
            </div>
            <div className="ms-10">
               <span className="mb-0 user_name_inner">Devon Lane</span>
               <span className="user_sub">Inventory Manager</span>
            </div>
         </div>
         <div className="px-15 w_img_20 py-10">
            <a href="#" className="text-dark fs-12 fw-500">
            <img src={dropImg3} alt="Profile" srcset="" />
            My Profile
            </a>
            <a href="#" className="text-dark fs-12 fw-500 py-5">
            <img src={dropImg4} alt="Profile" srcset="" />
            Ticket
            </a>
            <a href="#" className="text-dark fs-12 fw-500">
            <img src={dropImg5} alt="Profile" srcset="" />
            Change Password
            </a>
         </div>
         <div className="px-15 w_img_20 py-10 bt-1">
            <p className="mb-0 fw-500 text-secondary fs-12">Support</p>
            <a href="tel:+9863656236" className="text-dark fs-12 fw-500 py-5">
            <img src={dropImg5} alt="Profile" srcset="" />
            9863656236
            </a>
            <a href="mailto:support@gmail.com" className="text-dark fs-12 fw-500">
            <img src={dropImg6} alt="Profile" srcset="" />
            support@gmail.com
            </a>
         </div>
    </div>
    <span className="text-danger fs-12 ms-20 d-block mt-10">
        <img src={dropImg7} alt="Logout" className="w-20" />
        Logout</span>
    </ul>
     </div>
    </>
  )
}
