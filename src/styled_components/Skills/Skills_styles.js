import styled from "styled-components";


export const SectionSkills = styled.section`
  width: 100%;
  background-color: #fff;
  padding: 100px 0;
`

export const WrapperInfoSkills = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column-reverse;
`


export const WrapperInfAboutSkills = styled.div`
  a {
    display: flex;
    width: 185px;
    height: 60px;
    border: 3px solid #00CD6B;

    &:hover {
      border: 3px solid #282828;
      background-color: #00CD6B;
      transition: all linear 0.4s;

      span {
        color: #282828;
      }
    }
  }
`

export const SomeTextAboutSkills = styled.p`
  margin-bottom: 50px;
  font-size: 1.125rem;
  line-height: 1.875rem;
  color: #929292;
  font-weight: 400;
`

export const TextLinkContactMe = styled.span`
  cursor: pointer;
  text-transform: uppercase;
  border: none;
  width: 100%;
  height: 100%;
  color: #00CD6B;
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

`

export const PercentBackgroundSkills = styled.span`
  color: #fff;
  line-height: 1.875rem;
  font-size: 1.125rem;
  font-weight: 700;
`
