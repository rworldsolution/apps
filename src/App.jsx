import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Components/Header'
import Dashboard from './Components/Dashboard'
import Item from './Components/Item'
import ItemAdd from './Components/ItemAdd'
import ItemPreview from './Components/ItemPreview'
import Sales from './Components/Sales'
import SalesAnalyticsChart from './Components/SalesAnalyticsChart'
import SalesActivity from './Components/SalesActivity'
import NotFound from './Components/NotFound'
import Configuration from './Components/Configuration'
import OrganizationDetails from './Components/Configuration/OrganizationDetails'
import Store from './Components/Configuration/Store'
import ConfigurationStoreAdd from './Components/Configuration/ConfigurationStoreAdd'
import Appearance from './Components/Configuration/Appearance'
import TaxRate from './Components/Configuration/TaxRate'
import Currency from './Components/Configuration/Currency'
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: 
      <div>
        <Header />
        <Dashboard />
      </div>,
      children: [
        {
          path: 'Sales',
          element: <Sales />
        },
        {
          path: 'SalesAnalyticsChart',
          element: <SalesAnalyticsChart />
        },
        {
          path: 'SalesActivity',
          element: <SalesActivity />
        },
        {
          path: '*',
          element: <NotFound />
        }
      ]
     
    },
    {
      path: "/Item",
      element: 
      <div>
      <Header />
      <Item />
    </div>
    },
    {
      path: '/ItemAdd',
      element: 
      <div>
      <Header />
      <ItemAdd />
    </div>
    },
    {
    path: '/Configuration',
    element: (
      <div>
        <Header />
        <Configuration />
      </div>
    ),
  },
  {
    path: '/Configuration/OrganizationDetails',
    element: (
      <div>
        <Header />
        <OrganizationDetails />
      </div>
    ),
  },
  {
    path: '/Configuration/ConfigurationStoreAdd',
    element: (
      <div>
        <Header />
        <ConfigurationStoreAdd />
      </div>
    ),
  },
  {
    path: '/Configuration/Appearance',
    element:(
      <div>
        <Header />
        <Appearance />
      </div>
    )
  },
  {
    path: '/Configuration/Currency',
    element:(
      <div>
        <Header />
        <Currency />
      </div>
    )
  },
  {
    path: '/Configuration/TaxRate',
    element: (
      <div>
        <Header />
        <TaxRate />
      </div>
    )
  },
  {
    path: '/Configuration/Store',
    element: (
      <div>
        <Header />
        <Store />
      </div>
    )
  },
  {
    path: '/Configuration',
    element: (
      <div>
        <Header />
        <Configuration />
      </div>
    ),
  },
  {
    path: '/Configuration/OrganizationDetails',
    element: (
      <div>
        <Header />
        <OrganizationDetails />
      </div>
    ),
  },
    // {
    //   path: '/Configuration',
    //   element: (
    //     <div>
    //       <Header />
    //       <Configuration />
    //     </div>
    //   ),
    //   children: [
    //     {
    //       path: 'OrganizationDetails',
    //       element: <OrganizationDetails />,
    //     },
    //   ],
    // },
    {
      path: "/ItemPreview/:id",
      element: 
      <div>
      <Header />
      <ItemPreview />
    </div>
    }
  ]
)
function App() {

  return (
    <>
      <RouterProvider router={router} />
      
    </>
  )
}

export default App
