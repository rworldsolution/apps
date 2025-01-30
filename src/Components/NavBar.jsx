import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import icon1 from '../assets/img/dashboard-icon.svg';
import icon2 from '../assets/img/Purchase.svg';
import icon3 from '../assets/img/Sale.svg';
import icon4 from '../assets/img/Users.svg';
import icon5 from '../assets/img/Report.svg';
import icon6 from '../assets/img/Configuration.svg';

const navList = [
  {
    id: 1,
    name: 'Dashboard',
    url: '/',
    img: icon1,
  },
  {
    id: 2,
    name: 'Inventory',
    url: '/Inventory',
    img: icon2,
    subItems: [
      { id: 10, name: 'Item', url: '/Item' },
      { id: 11, name: 'Stock Adjustment', url: '/StockAdjustment' },
      { id: 12, name: 'Stock Alert', url: '/StockAlert' },
    ],
  },
  {
    id: 3,
    name: 'Purchase',
    url: '/Purchase',
    img: icon3,
    subItems: [
      { id: 13, name: 'Vendor', url: '/Vendor' },
      { id: 14, name: 'Purchase Order', url: '/PurchaseOrder' },
      { id: 15, name: 'Purchase Invoice', url: '/PurchaseInvoice' },
    ],
  },
  {
    id: 4,
    name: 'Sale',
    url: '/Sale',
    img: icon3,
    subItems: [
      { id: 18, name: 'Customer', url: '/Customer' },
      { id: 19, name: 'SalesOrder', url: '/SalesOrder' },
      { id: 19, name: 'SalesInvoice', url: '/SalesInvoice' },
      { id: 19, name: 'PaymentReceived', url: '/PaymentReceived' },
      { id: 19, name: 'Shipment', url: '/Shipment' },
      { id: 19, name: 'Packages', url: '/Packages' },
      { id: 19, name: 'SaleReturn', url: '/SaleReturn' },
      { id: 19, name: 'CreditNote', url: '/CreditNote' }
    ],
  },
  {
    id: 5,
    name: 'Users',
    url: '/Users',
    img: icon4,
  },
  {
    id: 6,
    name: 'Report',
    url: '/Report',
    img: icon5,
  },
  {
    id: 7,
    name: 'Configuration',
    url: '/Configuration',
    img: icon6,
  },
];

export default function NavBar() {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleSubMenu = (menuId) => {
    setActiveMenu((prevMenu) => (prevMenu === menuId ? null : menuId));
  };

  return (
    <nav>
      <ul>
        {navList.map((nav) => (
          <li key={nav.id}>
            <div
              onClick={() => toggleSubMenu(nav.id)}
              className={`menu-item ${nav.id}`}
            >
              <NavLink to={nav.url} className={({ isActive }) => (isActive ? 'active' : '')}>
                <img src={nav.img} alt={nav.name} /> {nav.name}
              </NavLink>
            </div>

            {nav.subItems && (
              <ul className={`sub-menu ${activeMenu === nav.id ? 'show' : ''}`}>
                {nav.subItems.map((sub) => (
                  <li key={sub.id}>
                    <NavLink to={sub.url} className={({ isActive }) => (isActive ? 'active' : '')}>
                      {sub.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
