import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Components/Header'
import Dashboard from './Components/Dashboard'
import Item from './Components/Item'
import ItemAdd from './Components/ItemAdd'
function App() {

  return (
    <>
     <Header />
     {/* <Dashboard /> */}
     {/* <Item /> */}
     <ItemAdd />
    </>
  )
}

export default App
