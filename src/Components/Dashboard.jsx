import { useState } from 'react';
import React from 'react'
import Overview from './Overview';
import Purchase from './Purchase';
import SalesAnalyticsChart from './SalesAnalyticsChart';
import PurchaseAnalyticsChart from './PurchaseAnalyticsChart';
import InvoiceAnalytics from './InvoiceAnalytics';
import SalesActivity from './SalesActivity';
import Table from './Table';
import Transactions from './Transactions';
import ProductDetail from './ProductDetail';
import SellingProducts from './SellingProducts';
import { Outlet } from 'react-router-dom';
export default function Dashboard() {
  const [count , setCount] = useState(0)
  function HandelClick (){
    setCount(count +1 )
  }

  function MyButton ({count , onClick}){
    return(
      <button onClick={HandelClick} type='button'>{count +1 }</button>
    )
  }
  return (
    <>
    <div className='page-content'>
       <div className='page-content-inner'>
        <p className='main_heding'>Dashboard</p>
        <div className='row gx-2'>
            <Overview />
            <div className='col-sm-6'>
           <SalesAnalyticsChart name='Sales Analytics'/>
            </div>

            <div className='col-sm-6'>
           <PurchaseAnalyticsChart name='Purchase Analytics' categories={['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']} list={[300, 250, 150, 100, 200, 400, 350]} lists={[200, 150, 100, 50, 150, 200, 250]}/>
            </div>

            <div className='col-sm-4'>
              <InvoiceAnalytics name='Invoice Analytics' />
            </div>
            <div className='col-sm-8'>
              <SalesActivity name='Sales Activity' />
            </div> 
            <div className='col-sm-6'>
               <Table name='Low Stock Alert' />
              </div> 
              <div className='col-sm-6'>
               <Transactions name='Last 5 Transactions' />
              </div> 
              <div className='col-sm-4'>
               <ProductDetail name='Product Detail' />
              </div> 
              <div className='col-sm-8'>
                <SellingProducts name='Top Selling Products' />
              </div>
        </div>
        <Outlet />
       </div>
    </div>
   
    </>
  )
}
