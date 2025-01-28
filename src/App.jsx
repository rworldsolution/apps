import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Components/Header'
import Dashboard from './Components/Dashboard'
import Item from './Components/Item'
import ItemAdd from './Components/ItemAdd'
import ItemPreview from './Components/ItemPreview'
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: 
      <div>
        <Header />
        <Dashboard />
      </div>
     
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
      path: "/ItemPreview",
      element: 
      <div>
      <Header />
      <ItemPreview />
    </div>
    }
  ]
)
function App() {
  // const [selectData, setSelectData] = useState();

  // function clickHandler(selectValue) {
  //   setSelectData(selectValue);
  // }
  return (
    <>
      
      {/* <Dashboard /> */}
      {/* <Item /> */}
      {/* <ItemAdd /> */}
      {/* <ItemPreview /> */}
      <RouterProvider router={router} />
    </>
  )
}

export default App
