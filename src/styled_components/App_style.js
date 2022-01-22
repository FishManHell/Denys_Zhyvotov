import styled from "styled-components";
import background from '../images/test.jpg'
import {device} from "../utils/MediaSize";

export const WrapperApp = styled.div`
  width: 100%;
  max-width: 100%;
  height: 100%;
`


export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  top: 0;
  left: 0;
  
  // @media all and ${device} {
  //  
  // }
`