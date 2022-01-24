import styled from "styled-components";
import {device} from "../../utils/MediaSize";

export const SectionPortfolio = styled.section`
  width: 100%;
`

export const InformTextPortfolio = styled.p`
  margin-bottom: 100px;
  text-align: center;
  font-size: 1.125rem;
  line-height: 1.5rem;
  font-weight: 400;
  color: #929292;
`

export const MainBlockForSite = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`

export const BlockSite = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  border-radius: 20px;
  margin-right: 40px;
  margin-bottom: 40px;
  width: 400px;
  height: 300px;
  border: 5px solid #fff;
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
      background: #00A65E;
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
      color: #fff;
    }
  }

  @media all and ${device.tabletL} {
    margin-right: 0;
  }
`

export const LinkForSite = styled.a`
  display: none;
`