/// Wrapper
import styled from "styled-components";

export const SectionVGH = styled.section`
  width: 100%;
  padding: 100px 0;
`


export const WrapperVGN = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
`

export const WrapperItemVGN = styled.section`
  width: 400px;
  margin: 0 20px 0 0;
  border: 5px dashed #00CD6B;
  padding: 10px 20px;
  border-radius: 5px;
  
  &:hover {
    cursor: pointer;
    border: 5px solid #282828;
    transition: all 0.3s linear;
  }
`

export const SimpleTextVGN = styled.p`
  font-size: 1.125rem;
  line-height: 1.875rem;
  font-weight: 400;
  color: #929292;
`