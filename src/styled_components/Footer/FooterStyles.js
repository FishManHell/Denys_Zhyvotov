import styled from "styled-components";
import {ObjColors} from "../../utils/objColors";

export const FooterSection = styled.footer`
  background-color: ${ObjColors.blue};
  padding: 50px 0;
`

export const TextFooter = styled.p`
  text-align: center;
  color: ${ObjColors.standart_white};
  margin-bottom: 20px;
  text-transform: uppercase;
`

export const MainBlockWithLinkContact = styled.div`
  display: flex;
  justify-content: center;
`

export const BlockLink = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #455355;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`

export const Link = styled.a`
  font-size: 1.2rem;
  color: ${ObjColors.dark_green};

  &:hover {
    cursor: pointer;
    color: ${ObjColors.standart_white};
  }
`