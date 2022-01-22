import styled from "styled-components";
import background from '../images/background.jpg'

export const WrapperApp = styled.div`
  width: 100%;
  max-width: 100%;
  height: 100%;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`