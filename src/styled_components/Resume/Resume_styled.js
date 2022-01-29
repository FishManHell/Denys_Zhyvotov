import styled from "styled-components";
import {ObjColors} from "../../utils/objColors";

export const SectionResume = styled.section`
  padding: 0 0 100px 0;
`

export const WrapperResume = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const BlockButtonResume = styled.div`
  width: 216px;
  height: 55px;
  border: 3px solid ${ObjColors.green};
  margin-top: 30px;
  &:hover {
    border: 3px solid ${ObjColors.standart_white};
    background-color: ${ObjColors.green};
    transition: all linear 0.4s;
    a {
      color: ${ObjColors.middle_black};
    }
  }
`

export const DownloadButton = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${ObjColors.green};
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 1.25rem;
`
