import styled from "styled-components";
import them from '../../images/ItIsMe.png'

export const WrapperHeading = styled.section`
  width: 100%;
  max-width: 100%;
  height: 90vh;
  background-image: url(${them});
  background-repeat: no-repeat;
  -webkit-background-size: cover; // cover можно еще указать
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const BlockHeadingText = styled.div`
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
`

export const HeadingText = styled.h1`
  color: #fff;
  font-size: 3.75rem;
`

export const BlockHeadingButton = styled.div`
  margin-top: 50px;
  width: 160px;
  height: 40px;
  border: 1px solid #fff;
`

export const ButtonHeading = styled.button`
  text-transform: uppercase;
  background: transparent;
  width: 100%;
  height: 100%;
  color: #fff;
  cursor: pointer;
  font-size: 1.125rem;
  line-height: 1.5rem;
`
