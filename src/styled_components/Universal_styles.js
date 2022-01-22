import styled from "styled-components";
import {device} from "../utils/MediaSize";

export const Container = styled.div`
  width: 1920px;
  max-width: 95%;
  margin: 0 auto;
`

export const TitleText = styled.h2`
  color: #FFF;
  font-weight: 700;
  font-size: 1.875rem;
  line-height: 1.5rem;
  margin-bottom: ${props => props.margin_bottom};
  text-transform: uppercase;
  text-align: ${props => props.text_align};
  
  @media all and ${device.laptopM} {
    font-size: 1.5rem;
    line-height: 1rem;
    margin-bottom: 25px;
  }

  @media all and ${device.laptopS} {
    font-size: 1.875rem;
    margin-bottom: 50px;
    line-height: 1.5rem;
  }

  @media all and ${device.mobile} {
    font-size: 1.5rem;
  }
  
`

