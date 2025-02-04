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
        ,
        {
          path: 'OrganizationDetails',
          element: <OrganizationDetails />
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
      element: 
      <div>
      <Header />
      <Configuration />
    </div>
    },
    {
      path: "/ItemPreview/:id",
      element: 
      <div>
      <Header />
      <ItemPreview />
    </div>
    }
  ],
  {
    path: "/OrganizationDetails",
    element: 
    <div>
    <Header />
    <OrganizationDetails />
  </div>
  }
)
function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
