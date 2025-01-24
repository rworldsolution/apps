import React from 'react'
import UserDetailsList from './UserDetailsList'
import Vendors from '../assets/img/Vendors.svg';
import Customers from '../assets/img/Customers.svg';
export default function UserDetails(props) {
  return (
    <>
    <div className='box'>
        <p className='content_heding'>{props.name}</p>

        <div className='row gx-2 mt-10'>
            <UserDetailsList img={Vendors} text='Total Customers' count='234' />
            <UserDetailsList img={Customers} text='Total Vendors' count='234' />
        </div>
    </div>
    </>
  )
}
