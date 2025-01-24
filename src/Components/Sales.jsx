import React from 'react'
import OverviewCard from './OverviewCard';
import icon1 from '../assets/img/icon_01.svg';
import icon2 from '../assets/img/icon_02.svg';
import icon3 from '../assets/img/icon_03.svg';
import icon4 from '../assets/img/icon_04.svg';
export default function Sales(props) {
  return (
    <>
               <div className='box'>
                 <div className='d-flex justify-content-between align-items-center'>
                                <p className='content_heding'>{props.name}</p>
                            </div>
                <div className='row gx-2 mt-5'>
                <OverviewCard bg_primary='box_primary' img={icon1} text='Total No. of Invoice' cout='234' />
                <OverviewCard bg_primary='box_success' img={icon2} text='Sales Amount' cout='₹2,45,986' />
                <OverviewCard bg_primary='box_warning mt-10' img={icon3} text='Net Profit' cout='34' />
                <OverviewCard bg_primary='box_danger mt-10' img={icon4} text='Cancelled Order' cout='134' />
                </div>
               </div>
    </>
  )
}
