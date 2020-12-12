import { useState } from 'react'
import Banner from './Banner/Banner'
import FoodDialog from './FoodDialog/FoodDialog'
import Menu from './Menu/Menu'
import Navbar from './Navbar/Navbar'
import Order from './Order/Order'

function App() {
  const [openFood, setOpenFood] = useState()

  return (
    <>
      <FoodDialog openFood={openFood} setOpenFood={setOpenFood} />
      <Navbar />
      <Order />
      <Banner />
      <Menu setOpenFood={setOpenFood} />
    </>
  )
}
export default App
