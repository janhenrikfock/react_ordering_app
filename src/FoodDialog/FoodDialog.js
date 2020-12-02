import styled from 'styled-components'
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
      </Dialog>
    </>
  ) : null
}

const Dialog = styled.div`
  width: 500px;
  height: 500px;
  background-color: white;
  position: fixed;
  top: 75px;
  z-index: 5;
  max-height: calc(100% - 100px);
  left: calc(50% - 250px);
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
