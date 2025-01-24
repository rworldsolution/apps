import React from 'react'
import img1 from '../assets/img/img1.png';
import img2 from '../assets/img/img2.png';
import img3 from '../assets/img/img3.png';
import img4 from '../assets/img/img4.png';

const productList = [
    {
        Products: 'Black Shoes',
        qty: 171 ,
        type: 'Pcs',
        img: img2
    },
    {
        Products: 'Books',
        qty: 11 ,
        type: 'Pcs',
        img: img1
    },
    {
        Products: 'Dress',
        qty: 111 ,
        type: 'Pcs',
        img: img3
    }
    ,
    {
        Products: 'Pen',
        qty: 150 ,
        type: 'Pcs',
        img: img4
    }
]

const listData = productList.map(e => (
    <div key={e.qty} className='col-sm-3 text-center be-1 py-10'>
        <img src={e.img} className='w-90' />
        <p className='mb-0 fs-12 fw-500'>{e.Products}</p>
        <p className='mb-0 fs-16 fw-700'>{e.qty}
            <span className='fs-11 fw-500 text-secondary'>{e.type}</span>
        </p>
    </div>
))
export default function SellingProducts(props) {
  return (
    <>
    <div className='box px-0'>
        <p className='content_heding px-10 bb-1 pb-5'>{props.name}</p>
        <div className='row'>
           {listData}
        </div>
    </div>
    </>
  )
}
