import styled from 'styled-components/macro'
import { foods, formatPrice } from '../MockData/FoodData'
import { StyledFoodGrid, StyledFood, StyledFoodLabel } from './FoodGrid'

export default function Menu({ setOpenFood }) {
  return (
    <MenuStyled>
      {Object.entries(foods).map(([sectionName, foods]) => (
        <>
          <h1> {sectionName} </h1>
          <StyledFoodGrid>
            {foods.map((food) => (
              <StyledFood
                img={food.img}
                onClick={() => {
                  setOpenFood(food)
                }}
              >
                <StyledFoodLabel>
                  <div>{food.name}</div>
                  <div>{formatPrice(food.price)}</div>
                </StyledFoodLabel>
              </StyledFood>
            ))}
          </StyledFoodGrid>
        </>
      ))}
    </MenuStyled>
  )
}
const MenuStyled = styled.div`
  margin: 0px 400px 50px 20px;
  height: 1000px;
`
