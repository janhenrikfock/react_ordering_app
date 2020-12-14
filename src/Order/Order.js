import styled from 'styled-components/macro'
import {
  StyledConfirm,
  DialogFooter,
  DialogContent,
} from '../FoodDialog/FoodDialog'
import { formatPrice } from '../MockData/FoodData'
import { getPrice } from '../FoodDialog/FoodDialog'

export default function Order({ orders }) {
  const subtotal = orders.reduce((total, order) => {
    return total + getPrice(order)
  }, 0)
  const tax = subtotal * 0.07
  const total = subtotal + tax
  return (
    <OrderStyled>
      {orders.length === 0 ? (
        <OrderContent>No orders selected</OrderContent>
      ) : (
        <OrderContent>
          <OrderContainer>Your order :</OrderContainer>

          {orders.map((order) => (
            <OrderContainer>
              <OrderItem>
                <div>{order.quantity}</div>
                <div>{order.name}</div>
                <div></div>
                <div>{formatPrice(getPrice(order))}</div>
              </OrderItem>
            </OrderContainer>
          ))}
          <OrderContainer>
            <OrderItem>
              <div></div>
              <div>Sub-Total</div>
              <div>{formatPrice(subtotal)}</div>
            </OrderItem>
            <OrderItem>
              <div></div>
              <div>Tax</div>
              <div>{formatPrice(tax)}</div>
            </OrderItem>
            <OrderItem>
              <div></div>
              <div>Total</div>
              <div>{formatPrice(total)}</div>
            </OrderItem>
          </OrderContainer>
        </OrderContent>
      )}
      <DialogFooter>
        <StyledConfirm>Checkout</StyledConfirm>
      </DialogFooter>
    </OrderStyled>
  )
}

const OrderStyled = styled.div`
  position: fixed;
  right: 0px;
  top: 48px;
  width: 340px;
  height: calc(100% - 48px);
  background-color: white;
  box-shadow: 4px 0px 5px 4px grey;
  z-index: 10;
  display: flex;
  flex-direction: column;
`
const OrderContent = styled(DialogContent)`
  padding: 20px;
  height: 100%;
`
const OrderContainer = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid grey;
`
const OrderItem = styled.div`
  padding: 10px 0px;
  display: grid;
  grid-template-columns: 20px 150px 20px 60px;
  justify-content: space-between;
`
