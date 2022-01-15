import styled from "styled-components";
import them from '../../images/499787.png'

export const WrapperHeading = styled.section`
  width: 100%;
  max-width: 100%;
  padding: 100px 0;
  background-color: #FDF5E6;
  // height: 60vh;
    // background-image: url(${them});
  // background-position: center;
  // background-repeat: no-repeat;
  // -webkit-background-size: cover; // cover можно еще указать
  // -moz-background-size: cover;
  // -o-background-size: cover;
  // background-size: cover;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const BlockHeadingText = styled.div`
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
`

export const HeadingText = styled.h1`
  color: #000;
  font-size: 3.75rem;
`

export const BlockHeadingButton = styled.div`
  margin-top: 50px;
  width: 160px;
  height: 40px;
  border: 1px solid #000;
`

export const ButtonHeading = styled.button`
  text-transform: uppercase;
  background: transparent;
  width: 100%;
  height: 100%;
  color: #000;
  cursor: pointer;
  font-size: 1.125rem;
  line-height: 1.5rem;
`
