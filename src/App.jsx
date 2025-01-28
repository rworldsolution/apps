import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Components/Header'
import Dashboard from './Components/Dashboard'
import Item from './Components/Item'
import ItemAdd from './Components/ItemAdd'
import ItemPreview from './Components/ItemPreview'

function App() {
  // const [selectData, setSelectData] = useState();

  // function clickHandler(selectValue) {
  //   setSelectData(selectValue);
  // }
  return (
    <>
     <Header />
     {/* <Dashboard /> */}
     {/* <Item /> */}
     {/* <ItemAdd /> */}
     <ItemPreview />
    </>
  )
}

export default App
