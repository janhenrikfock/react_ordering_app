import Banner from './Banner/Banner'
import FoodDialog from './FoodDialog/FoodDialog'
import { useOpenFood } from './Hooks/useOpenFood'
import { useOrders } from './Hooks/useOrders'
import Menu from './Menu/Menu'
import Navbar from './Navbar/Navbar'
import Order from './Order/Order'

function App() {
  const openFood = useOpenFood()
  const orders = useOrders()

  return (
    <>
      <FoodDialog {...openFood} {...orders} />
      <Navbar />
      <Order {...orders} />
      <Banner />
      <Menu {...openFood} />
    </>
  )
}
export default App
