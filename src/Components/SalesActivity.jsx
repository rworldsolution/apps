import React from 'react'
import packed from '../assets/img/packed.svg';
import shiped from '../assets/img/shiped.svg';
import DELIVERY from '../assets/img/DELIVERY.svg';
import DELIVERED from '../assets/img/DELIVERED.svg';
export default function SalesActivity(props) {
    const salesData = [
        {
            count: 20,
            weight: 'Qty',
            img : packed,
            tittle: 'TO BE PACKED',
            statusClass: 'dashboard_primary',
        },
        {
            count: 50,
            weight: 'pkgs',
            img : shiped,
            tittle: 'TO BE SHIPPED',
            statusClass: 'dashboard_danger',
        },
        {
            count: 60,
            weight: 'pkgs',
            img : shiped,
            tittle: 'TO BE OUT FOR DELIVERY',
            statusClass: 'dashboard_success',
        },
        {
            count: 50,
            weight: 'Qty',
            img : shiped,
            tittle: 'TO BE DELIVERED',
            statusClass: 'dashboard_warning',
        }
    ]
    const salesList = salesData.map(e => (
        <div className='col-sm-3 text-center be-1 py-50'>
            <p className={`${e.statusClass} dashboard_20 pt-5`}>{e.count}</p>
            <p className='fs-12 text-secondary mb-0'>{e.weight}</p>
            <p className='mb-0 fs-12 fw-600 mt-10 pb-5'><img src={e.img} className='w-15' /> {e.tittle}</p>
        </div>
    ))
  return (
    <>
    <div className='box px-0'>
        <p className='content_heding bb-1 pb-5 px-15'>{props.name}</p>
        <div className='row'>
            {salesList}
        </div>
    </div>
    </>
  )
}
