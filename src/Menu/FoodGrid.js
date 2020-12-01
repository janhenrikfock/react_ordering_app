import styled from 'styled-components/macro'

export const StyledFoodGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`
export const StyledFoodLabel = styled.div`
  border-radius: 4px;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 5px;
`

export const StyledFood = styled.div`
  box-shadow: 1px 1px 10px #380502;
  border-radius: 7px;
  font-family: 'Righteous', cursive;
  font-size: 20px;
  padding: 10px;
  height: 100px;
  background-image: ${({ img }) => `url(${img});`};
  background-position: center;
  background-size: cover;
  filter: contrast(75%);
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`
