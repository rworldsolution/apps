import React from 'react'
import ProductChart from './ProductChart';
export default function ProductDetail(props) {
  return (
    <>
    <div className='box'>
        <p className='content_heding'>{props.name}</p>
        <div className='row gx-2 mt-5'>
            <div className='col-sm-6 pe-20 be-1'>
            <button className=" btn_chart btn_danger">
                        Low Stock Items 
                        <span>22</span>
                        </button>
                        <button className=" btn_chart my-10">
                        Low Stock Items 
                        <span>22</span>
                        </button>
                        <button className=" btn_chart">
                        Low Stock Items 
                        <span>22</span>
                        </button>
            </div>
            <div className='col-sm-6'>
            <ProductChart />
            </div>
        </div>
    </div>
    </>
  )
}
