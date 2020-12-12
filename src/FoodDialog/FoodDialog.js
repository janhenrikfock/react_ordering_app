import styled from 'styled-components/macro'
import { StyledFoodLabel } from '../Menu/FoodGrid'

export default function FoodDialog({ openFood, setOpenFood }) {
  function close() {
    setOpenFood()
  }
  return openFood ? (
    <>
      <DialogShadow onClick={close} />
      <Dialog>
        <DialogBanner img={openFood.img}>
          <DialogBannerName>{openFood.name}</DialogBannerName>
        </DialogBanner>
        <DialogContent />
        <DialogFooter>
          <StyledConfirm>Add to Order</StyledConfirm>
        </DialogFooter>
      </Dialog>
    </>
  ) : null
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
  ${({ img }) => `background-image: url(${img});`}
  background-position: center;
  background-size: cover;
`
const DialogBannerName = styled(StyledFoodLabel)`
  top: 100px;
  font-size: 30px;
  padding: 5px 40px;
`
