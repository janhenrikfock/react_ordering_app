import styled from 'styled-components/macro'

export default function Banner() {
  return <BannerStyled />
}

const BannerStyled = styled.div`
  height: 200px;
  border: 1px solid red;
  background-image: url('img/banner.jpg');
  background-position: center;
  background-size: cover;
  filter: contrast(75%);
`
