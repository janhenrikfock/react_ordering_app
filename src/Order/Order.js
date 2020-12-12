import styled from 'styled-components/macro'
import {
  StyledConfirm,
  DialogFooter,
  DialogContent,
} from '../FoodDialog/FoodDialog'

export default function Order() {
  return (
    <OrderStyled>
      <OrderContent>Empty Order Dialog</OrderContent>
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
