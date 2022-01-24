import styled from "styled-components";
import {device} from "../../utils/MediaSize";

export const WrapperHeading = styled.section`
  width: 100%;
  max-width: 100%;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const BlockHeadingText = styled.div`
  text-align: center;
  padding-bottom: 20px;
  border-bottom: 5px solid #fff;
`

export const HeadingText = styled.h1`
  color: #fff;
  font-size: 3.75rem;
  
  @media all and ${device.tablet} {
    font-size: 3rem;
  }
  
  @media all and ${device.mobile} {
    font-size: 2.5rem;
  }
  
  @media all and ${device.mobileL} {
    font-size: 2rem;
  }
  
`