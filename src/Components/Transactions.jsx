import React from 'react'
import imgUser from '../assets/img/user.png'
const tableList = [
	{
		"Item Name": "Service By\n51256",
		"Invoice No.": "45566",
		"Payment Mode": "Cash",
		"Status": "Shipping",
		"Amount": "499.00",
		"Stock Alert": "03-12-2019 | 12:00 PM"
	},
	{
		"Item Name": "Service By\n51256",
		"Invoice No.": "45566",
		"Payment Mode": "Cash",
		"Status": "Pickups",
		"Amount": "499.00",
		"Stock Alert": "03-12-2019 | 12:00 PM"
	},
	{
		"Item Name": "Service By\n51256",
		"Invoice No.": "45566",
		"Payment Mode": "Cash",
		"Status": "Delivered",
		"Amount": "499.00",
		"Stock Alert": "03-12-2019 | 12:00 PM"
	},
	{
		"Item Name": "Service By\n51256",
		"Invoice No.": "45566",
		"Payment Mode": "Cash",
		"Status": "Out for Delivery",
		"Amount": "499.00",
		"Stock Alert": "03-12-2019 | 12:00 PM"
	},
	{
		"Item Name": "Service By\n51256",
		"Invoice No.": "45566",
		"Payment Mode": "Cash",
		"Status": "Pending",
		"Amount": "499.00",
		"Stock Alert": "03-12-2019 | 12:00 PM"
	}
]

const listTable = tableList.map((e , index) =>{
    const [source ,count] = e['Item Name'].split('\n');
    return (
        <tr key={index}>
            <td>
                <div className='d-flex'>
                    {/* <img src={imgUser} className='w-35 me-10 h-35' /> */}
                    <p className='td_texts'>{source.slice(0 ,1)}</p>
                    <div>
                        <p className='td_text'>{source}</p>
                        <p className='td_subtext'>{count}</p>
                    </div>
                </div>
            </td>
            <td>{e['Invoice No.']}</td>
            <td>{e['Payment Mode']}</td>
            <td className={`${e.Status === 'Shipping'? 'text-primary': e.Status === 'Pickups'? 'text-info': e.Status === 'Delivered'? 'text-success': e.Status === 'Out for Delivery'? 'text-secondary': e.Status == 'Pending' ? 'text-warning' :''}`}>{e.Status}</td>

            <td>{e.Amount}</td>
            <td>{e['Stock Alert']}</td>
        </tr>
    )
})

export default function Transactions(props) {
  return (
    <>
    <div className='box px-0 pb-0'>
        <p className='content_heding px-10 mb-10'>{props.name}</p>
        <div className='px-0 table-responsive' style={{height: '250px'}}>
            <table className='border-collapse-striped px-3'>
                <thead>
                    <tr>
                        <th>
                        Item Name</th>
                        <th>Invoice No.</th>
                        <th>Payment Mode</th>
                        <th>Status</th>
                        <th>Amount</th>
                        <th>Stock Alert</th>
                    </tr>
                </thead>
                <tbody>
                    {listTable}
                </tbody>
            </table>
        </div>
    </div>
    </>
  )
}
