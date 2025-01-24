import React from 'react'
import imgUser from '../assets/img/user.png'
export default function Table(props) {
    const listTable = [
        {
            "Item Name": "Service By\n 51256",
            "Warehouse": "Traditional Warehouse",
            "Store": "Crompy",
            "Quantity": "5",
            "Stock Alert": "2"
        },
        {
            "Item Name": "Service By\n 51256",
            "Warehouse": "Traditional Warehouse",
            "Store": "Crompy",
            "Quantity": "5",
            "Stock Alert": "2"
        },
        {
            "Item Name": "Service By\n 51256",
            "Warehouse": "Traditional Warehouse",
            "Store": "Crompy",
            "Quantity": "5",
            "Stock Alert": "2"
        },
        {
            "Item Name": "Service By\n 51256",
            "Warehouse": "Traditional Warehouse",
            "Store": "Crompy",
            "Quantity": "5",
            "Stock Alert": "2"
        },
        {
            "Item Name": "Service By\n 51256",
            "Warehouse": "Traditional Warehouse",
            "Store": "Crompy",
            "Quantity": "5",
            "Stock Alert": "2"
        },
        {
            "Item Name": "Service By\n 51256",
            "Warehouse": "Traditional Warehouse",
            "Store": "Crompy",
            "Quantity": "5",
            "Stock Alert": "2"
        },
        {
            "Item Name": "Service By\n 51256",
            "Warehouse": "Traditional Warehouse",
            "Store": "Crompy",
            "Quantity": "5",
            "Stock Alert": "2"
        },
        {
            "Item Name": "Service By\n 51256",
            "Warehouse": "Traditional Warehouse",
            "Store": "Crompy",
            "Quantity": "5",
            "Stock Alert": "2"
        },
        {
            "Item Name": "Service By\n 51256",
            "Warehouse": "Traditional Warehouse",
            "Store": "Crompy",
            "Quantity": "5",
            "Stock Alert": "2"
        }
    ]
    const tableList = listTable.map((e, index) => {
       
        const [service, code] = e['Item Name'].split('\n');
    
        return (
            <tr key={index}>
                <td>
                    <div className="d-flex">
                        <img src={imgUser} className="w-35 me-10" alt="User" />
                        <div>
                            <p className="td_text">{service}</p>
                            <span className="td_subtext">{code.trim()}</span>
                        </div>
                    </div>
                </td>
                <td>{e.Warehouse}</td>
                <td>{e.Store}</td>
                <td>{e.Quantity}</td>
                <td className="text-danger">{e['Stock Alert']}</td>
            </tr>
        );
    });
  return (
    <>
    <div className='box px-0 pb-0'>
        <p className='content_heding px-15'>{props.name}</p>
        <div className='px-0 table-responsive' style={{height: '250px'}}>
            <table className='border-collapse-striped px-3'>
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Warehouse</th>
                        <th>Store</th>
                        <th>Quantity</th>
                        <th>Stock Alert</th>
                    </tr>
                </thead>
                <tbody>
                    {tableList}
                </tbody>
            </table>
            </div>
    </div>
    </>
  )
}
