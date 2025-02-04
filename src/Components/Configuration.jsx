import React from 'react'
import img1 from '../assets/img/Configuration_01.svg'
import img2 from '../assets/img/Configuration_02.svg'
import img3 from '../assets/img/Configuration_03.svg'
import img4 from '../assets/img/Configuration_04.svg'
import img5 from '../assets/img/Configuration_05.svg'
import img6 from '../assets/img/Configuration_06.svg'
import img7 from '../assets/img/Configuration_07.svg'
import { NavLink } from 'react-router-dom';
import Item from './Item'

const configuration =[
    {
        name: 'Organization',
        img: img1,
        list: [
            {
                id: 1 , URL: 'OrganizationDetails',list1 :'Organization Details'
            },
            {
                id: 2 , URL: 'Store',list: 'Store'
            }
        ]
    },
    {
        name: 'Financial Settings',
        img: img2,
        list: [
            {
                id: 3 , URL: 'TaxRate',list1 :'Tax Rate'
            },
            {
                id: 4 , URL: 'Currency',list1 :'Currency'
            },
            {
                id: 5 , URL: 'PaymentTerm',list1 :'Payment Term'
            }
        ]
    },
    {
        name: 'Sales',
        img: img3,
        list: [
            {
                id: 6, URL: 'Shipment',list1 :'Shipment'
            },
            {
                id: 7 , URL: 'SaleOrder',list1: 'Sale Order'
            },
            {
                id: 8 , URL: 'SaleOrderNo',list1: 'Sales Order No.'
            },
            {
                id: 9 , URL: 'SaleInvoiceNo',list1: 'Sale Invoice No.'
            }
        ]
    },
    {
        name: 'Purchase',
        img: img4,
        list: [
            {
                id: 11 , URL: 'PurchaseOrderNo',list1 :'Purchase Order No.'
            },
            {
                id: 12 , URL: 'PurchaseInvoiceNo',list1: 'Purchase Invoice No.'
            }
        ]
    },
    {
        name: 'Item',
        img: img5,
        list: [
            {
                id: 13 , URL: 'Brand',list1 :'Brand',
            },
            {
                id: 14 , URL: 'Unit',list1: 'Unit'
            },
            {
                id: 15 , URL: 'Category',list1: 'Category'
            },
            {
                id: 16 , URL: 'ProductSpecification',list1: 'Product Specification'
            }
        ]
    },
    {
        name: 'API Integration',
        img: img6,
        list: [
            {
                id: 18 , URL: 'SMS',list1 :'SMS'
            },
            {
                id: 19 , URL: 'SMS',list1: 'SMS'
            },
            {
                id: 20 , URL: 'WhatsApp',list1: 'WhatsApp'
            },
            {
                id: 21 , URL: 'PaymentGateway',list1: 'Payment Gateway'
            }
        ]
    },
    {
        name: 'General',
        img: img7,
        list: [
            {
                id: 22 , URL: 'CustomerID',list1 :'Customer ID'
            },
            {
                id: 23 , URL: 'EmployeeID',list1: 'Employee ID'
            },
            {
                id: 24 , URL: 'UserPermission',list1: 'User Permission'
            }
        ]
    }
]
export default function Configuration() {
   
  return (
    <>
    <div className="page-content">
   <div className="page-content-inner">
      <p className="main_heding">Configuration</p>
      <div className="row">
         <div className="col-sm-12">
            <div className="box min-h-550">
               <div className="row gx-3 mt-10">
                {configuration.map(e =>(
                    <div className="col_5">
                    <div className="Configuration_box">
                       <p className="content_heding"><img src={e.img} srcset="" /> {e.name}</p>
                       <ul className="Configuration_list">
                        {
                            e.list.map(j => (
                                <li key={j.id}>
                                    <NavLink to={j.URL}>{j.list1}</NavLink>
                                </li>
                            ))
                        }
                          
                       </ul>
                    </div>
                 </div>
                ))}
                  
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
    </>

  )
}
