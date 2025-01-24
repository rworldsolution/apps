import React from 'react'
import Sales from './Sales'
import Purchase from './Purchase'
import UserDetails from './UserDetails'
export default function Overview(props) {
  return (
    <> 
            <div className='col-sm-4'>
                <Sales name='Sales Overview' />
            </div>
            <div className='col-sm-4'>
                <Purchase name='Purchase Overview' />
            </div>
            <div className='col-sm-4'>
                <UserDetails name='User Details' />
            </div>
    </>
  )
}
