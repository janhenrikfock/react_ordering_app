import styled from 'styled-components/macro'
import { StyledFoodLabel } from '../Menu/FoodGrid'
import { formatPrice } from '../MockData/FoodData'
import QuantityInput from './QuantityInput'
import Toppings from './Toppings'
import Choices from './Choices'
import { useToppings } from '../Hooks/useToppings'
import { useQuantity } from '../Hooks/useQuantity'
import { useChoice } from '../Hooks/useChoice'

const pricePerTopping = 0.5

export function getPrice(order) {
  return (
    order.quantity *
    (order.price +
      order.toppings.filter((t) => t.checked).length * pricePerTopping)
  )
}
function hasToppings(food) {
  return food.section === 'Pizza'
}

function FoodDialogContainer({ openFood, setOpenFood, setOrders, orders }) {
  const quantity = useQuantity(openFood && openFood.quantity)
  const toppings = useToppings(openFood.toppings)
  const choiceRadio = useChoice(openFood.choice)
  function close() {
    setOpenFood()
  }

  if (!openFood) {
    return null
  } else {
    const order = {
      ...openFood,
      quantity: quantity.value,
      toppings: toppings.toppings,
      choice: choiceRadio.value,
    }
    function addToOrder() {
      setOrders([...orders, order])
      close()
    }

    return (
      <>
        <DialogShadow onClick={close} />
        <Dialog>
          <DialogBanner img={openFood.img}>
            <DialogBannerName>{openFood.name}</DialogBannerName>
          </DialogBanner>
          <DialogContent>
            <QuantityInput quantity={quantity}></QuantityInput>
            {hasToppings(openFood) && (
              <>
                <h3>Would you like Toppings?</h3>
                <Toppings {...toppings}></Toppings>
              </>
            )}
            {openFood.choices && (
              <Choices choiceRadio={choiceRadio} openFood={openFood}></Choices>
            )}
          </DialogContent>
          <DialogFooter>
            <StyledConfirm
              onClick={addToOrder}
              disabled={openFood.choices && !choiceRadio.value}
            >
              Add to Order : {formatPrice(getPrice(order))}
            </StyledConfirm>
          </DialogFooter>
        </Dialog>
      </>
    )
  }
}

export default function FoodDialog(props) {
  if (!props.openFood) {
    return null
  } else {
    return <FoodDialogContainer {...props} />
  }
}

const Dialog = styled.div`
  width: 500px;
  background-color: white;
  position: fixed;
  top: 75px;
  z-index: 5;
  max-height: calc(100% - 100px);
  left: calc(50% - 250px);
  display: flex;
  flex-direction: column;
`
export const DialogContent = styled.div`
  overflow: auto;
  min-height: 100px;
  padding: 0px 40px;
  padding-bottom: 80px;
`
export const DialogFooter = styled.div`
  box-shadow: 0px -2px 10px 0px grey;
  height: 60px;
  display: flex;
  justify-content: center;
`
export const StyledConfirm = styled.div`
  margin: 10px;
  color: white;
  height: 20px;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  width: 200px;
  cursor: pointer;
  background-color: var(--pizzared);
  font-family: 'Righteous', bold;
  ${({ disabled }) =>
    disabled &&
    `
  opacity: .5;
  background-color: grey;
  pointer-events: none;
  `}
`
const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`
const DialogBanner = styled.div`
  min-height: 200px;
  margin-bottom: 20px;
  ${({ img }) => (img ? `background-image: url(${img});` : `min-height: 75px;`)}
  background-position: center;
  background-size: cover;
`
const DialogBannerName = styled(StyledFoodLabel)`
  font-size: 30px;
  padding: 5px 40px;
  top: ${({ img }) => (img ? `100px` : `20px`)};
`
