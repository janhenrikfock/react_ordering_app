import styled from 'styled-components/macro'
import { foods } from '../MockData/FoodData'

export default function Menu() {
  return (
    <MenuStyled>
      {foods.map((food) => (
        <div>{food.name}</div>
      ))}
    </MenuStyled>
  )
}
const MenuStyled = styled.div`
  border: 2px solid black;
  margin: 0px 400px 50px 20px;
  height: 1000px;
`
