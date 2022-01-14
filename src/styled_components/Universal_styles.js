import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`


export const TitleText = styled.h2`
  color: #4E6366;
  font-weight: 700;
  font-size: 1.875rem;
  line-height: 1.5rem;
  margin-bottom: ${props => props.margin_bottom};
  text-transform: uppercase;
  text-align: ${props => props.text_align};
`
