import styled from "styled-components";
import {device} from "../../utils/MediaSize";

export const SectionAboutMe = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 100px 0;
  
  
  @media all and ${device.mobileL} {
    padding: 0 0 100px 0;
  }
  
`

export const WrapperInformation = styled.div`
  text-align: center;
`

export const MainBlockWithMiniBlock = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

export const MiniBlock = styled.div`
  width: 400px;
  border: 3px solid #A00711;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 20px;
  background-color: #FDF5E6;

  &:hover {
    cursor: pointer;
    transition: all 0.4s linear;
    border: 3px solid #00CD6B;

    span {
      color: #282828;
    }
  }

`

export const Icon = styled.span`
  color: #00CD6B;
  font-size: 3rem;
`

export const InformationText = styled.p`
  white-space: pre-line;
  margin-top: 20px;
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 1.875rem;
`