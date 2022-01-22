import {device} from "../../utils/MediaSize";
import styled, {css} from "styled-components";


export const BlockForBurgerMenu = styled.div`
  display: none;

  @media all and ${device.tablet} {
    display: block;
    position: relative;
    width: 30px;
    height: 20px;

    &:before, :after {
      content: '';
      background-color: #00C667;
      position: absolute;
      width: 100%;
      height: 3px;
      left: 0;
      z-index: 1;
      transition: all 0.3s ease 0s;
    }

    &:before {
      top: 0;
    }

    &:after {
      bottom: 0;
    }

    ${props => props.openMenu && css`
      &:before {
        transform: rotate(45deg);
        top: 9px;
      }

      &:after {
        transform: rotate(-45deg);
        bottom: 9px;
      }

      span {
        transform: scale(0);
      }
    `}
    @media all and ${device.mobile} {
      width: 25px;

      &:before, :after {
        background-color: #fff;
      }
    }

  }

`

export const LineForBurgerMenu = styled.span`

  @media all and ${device.tablet} {
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: #00C667;
    top: 9px;
    z-index: 1;
    transition: all 0.3s ease 0s;
  }

  @media all and ${device.mobile} {
    background-color: #fff;
  }
`