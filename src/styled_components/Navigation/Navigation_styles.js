import styled, {css} from "styled-components";
import {device} from "../../utils/MediaSize";
import {ObjColors} from "../../utils/objColors";

export const WrapperNav = styled.section`
  padding: 20px 0;
  //background-color: #0E191B;
  background-color: #002C3F;
`

export const NavigationBlock = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const List = styled.ul`
  display: flex;
  list-style: none;
  text-transform: uppercase;
  line-height: 1.875rem;
  cursor: pointer;

  .active {
    color: ${ObjColors.green};
    transform: scale(1.1);
  }

  a {
    display: inline-block;
    text-align: center;
    width: 100%;
    height: 100%;
    color: ${ObjColors.standart_white};
    font-weight: 600;
    text-decoration: none;
    padding: 10px;

    &:hover {
      color: ${ObjColors.green};
    }
  }

  @media all and ${device.tablet} {
    position: absolute;
    flex-direction: column;
    top: -100%;
    width: 100%;
    height: 100%;
    align-items: center;
    transition: all 0.7s;

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      background-color: ${ObjColors.hard_black};
      height: 100%;
      z-index: 1;
      opacity: 0.7;
    }

    ${props => props.openMenu && css`
      top: 60px;
    `}
  }

`

export const ItemNav = styled.li`
  width: 100px;
  margin-right: 50px;
  border: 1px solid ${ObjColors.standart_white};
  border-radius: 10px;


  &:last-child {
    margin-right: 0;
  }

  @media all and ${device.tablet} {
    width: auto;
    z-index: 2;
    margin: 0 0 20px 0;
    border: none;
    border-radius: 0;

    a {
      font-size: 2rem;
    }

    .active {
      border-bottom: 3px solid ${ObjColors.red};

    }

    &:first-child {
      margin-top: 20px;
    }
  }
`
