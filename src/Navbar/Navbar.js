import styled from 'styled-components/macro'

export default function Navbar() {
  return (
    <NavbarStyled>
      <Logo>SliceLine 🍕</Logo>
    </NavbarStyled>
  )
}
const NavbarStyled = styled.div`
  padding: 10px;
  background-color: var(--pizzared);
  text-shadow: 1px 1px 4px #380502;
  position: fixed;
  width: 100%;
`
const Logo = styled.div`
  font-size: 20px;
  color: white;
  font-family: 'Righteous', cursive;
`
