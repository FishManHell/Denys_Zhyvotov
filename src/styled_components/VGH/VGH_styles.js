import styled from "styled-components";
import {device} from "../../utils/MediaSize";

export const SectionVGH = styled.section`
  width: 100%;
  padding: 100px 0;
  
  @media all and ${device.tablet} {
    padding: 0 0 100px 0;
  }
  
`


export const WrapperVGN = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  
  @media all and ${device.laptopS} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
`

export const WrapperItemVGN = styled.section`
  width: 400px;
  margin: 0 20px 0 0;
  border: 3px solid #A00711;
  padding: 10px 20px;
  border-radius: 10px;
  box-shadow: 0 0 15px #A9A9A9;
  background-color: #C9F8FE;
  
  &:hover {
    cursor: pointer;
    border: 3px solid #FF7400;
    transition: all 0.3s linear;
    transform: scale(1.1);
  }

  @media all and ${device.laptopS} {
    margin: 0 0 20px 0;
  }

  @media all and ${device.mobile} {
    width: 300px;
  }
`

export const SimpleTextVGN = styled.p`
  font-size: 1.125rem;
  line-height: 1.875rem;
  font-weight: 500;
  //color: #00CD6B;
  color: #000;
`