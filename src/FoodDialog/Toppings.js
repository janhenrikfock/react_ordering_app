import styled from 'styled-components/macro'

export default function Toppings({ toppings, checkTopping }) {
  return (
    <>
      <ToppingsGrid>
        {toppings.map((topping, i) => (
          <CheckboxLabel>
            <ToppingCheckbox
              type="checkbox"
              checked={topping.checked}
              onClick={() => {
                checkTopping(i)
              }}
            />
            {topping.name}
          </CheckboxLabel>
        ))}
      </ToppingsGrid>
    </>
  )
}

const ToppingsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`
const ToppingCheckbox = styled.input`
  margin-right: 10px;
  cursor: pointer;
`
const CheckboxLabel = styled.label`
  cursor: pointer;
`
