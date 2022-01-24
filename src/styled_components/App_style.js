import styled from "styled-components";
import background from '../images/peakpx.jpg'

export const WrapperApp = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  height: 100%;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  z-index: 1;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,.7);
    z-index: -1;
  }
  
`