import Banner from './Banner/Banner'
import FoodDialog from './FoodDialog/FoodDialog'
import { useOpenFood } from './Hooks/useOpenFood'
import { useOrders } from './Hooks/useOrders'
import Menu from './Menu/Menu'
import Navbar from './Navbar/Navbar'
import Order from './Order/Order'
import { useTitle } from './Hooks/useTitle'

function App() {
  const openFood = useOpenFood()
  const orders = useOrders()
  useTitle({ ...openFood, ...orders })

  return (
    <>
      <FoodDialog {...openFood} {...orders} />
      <Navbar />
      <Order {...orders} {...openFood} />
      <Banner />
      <Menu {...openFood} />
    </>
  )
}
export default App
