import styled from 'styled-components/macro'

export default function QuantityInput({ quantity }) {
  return (
    <>
      <IncrementContainer>
        <div>Quantity:</div>
        <IncrementButton
          onClick={() => {
            quantity.setValue(quantity.value - 1)
          }}
          disabled={quantity.value <= 1}
        >
          {' '}
          -{' '}
        </IncrementButton>
        <QuantityInputStyled {...quantity} />
        <IncrementButton
          onClick={() => {
            quantity.setValue(quantity.value + 1)
          }}
        >
          {' '}
          +{' '}
        </IncrementButton>
      </IncrementContainer>
    </>
  )
}

const QuantityInputStyled = styled.input`
  font-size: 18px;
  width: 40px;
  text-align: center;
  border: none;
  outline: none;
`
const IncrementContainer = styled.div`
  display: flex;
  height: 24px;
  font-family: 'Righteous', cursive;
`
const IncrementButton = styled.div`
  width: 23px;
  color: var(--pizzared);
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  line-height: 23px;
  margin: 0px 10px;
  border: 1px solid var(--pizzared);
  ${({ disabled }) => disabled && 'opacity: 0.5; pointer-events: none'}
  &:hover {
    background-color: #ffe3e3;
  }
`
