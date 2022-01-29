import styled from "styled-components";
import {device} from "../../utils/MediaSize";
import {ObjColors} from "../../utils/objColors";

export const SectionPortfolio = styled.section`
  width: 100%;
  padding-bottom: 100px;
`

export const MainBlockForSite = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`

export const MainBlockSite = styled.div`
  margin-right: 40px;

  &:last-child {
    margin-right: 0;
  }

  @media all and ${device.laptopL} {
    margin-bottom: 40px;
  }

  @media all and ${device.laptopLarge} {
    &:nth-child(2) {
      margin-right: 0;
    }
  }

  @media all and ${device.tablet} {
    margin-right: 0;
  }

  @media all and ${device.tabletS} {
    margin-right: 0;
  }
`

export const BlockSite = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  border-radius: 20px;
  width: 400px;
  height: 300px;
  border: 5px solid ${ObjColors.standart_white};
  background: url(${props => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  :hover {
    :before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 18px;
      background: ${ObjColors.green};
      opacity: 0.8;
    }

    a {
      position: absolute;
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      z-index: 1;
      font-size: 2.5rem;
      color: ${ObjColors.standart_white};
    }
  }

  @media all and ${device.tabletL} {
    margin-right: 0;
`

export const LinkForSite = styled.a`
  display: none;
`

export const TitleTextSite = styled.h3`
  white-space: pre-line;
  text-align: center;
  color: ${ObjColors.standart_white};
  margin-bottom: 20px;
  text-transform: uppercase;
  font-size: 1.5rem;
  line-height: 1.5rem;
`