import styled from 'styled-components/macro'

export const StyledFoodGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding-bottom: 40px;
`
export const StyledFoodLabel = styled.div`
  border-radius: 4px;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 5px;
`
export const StyledFood = styled.div`
  margin-top: 5px;
  box-shadow: 1px 1px 2px #380502;
  border-radius: 7px;
  font-family: 'Righteous', cursive;
  font-size: 20px;
  padding: 10px;
  height: 100px;
  filter: contrast(75%);
  background-image: ${({ img }) => `url(${img});`};
  background-position: center;
  background-size: cover;
  transition-property: box-shadow margin-top filter;
  transition-duration: 0.1s;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 5px 10px 0px #380502;
    margin-top: 0px;
    margin-bottom: 5px;
    filter: contrast(100%);
  }
`
