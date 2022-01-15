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


export const WrapperSomeSkills = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`


export const BlockItemSkills = styled.div`
  margin-right: 20px;
`

export const TitleTextSkill = styled.h3`
  margin-bottom: 20px;
  text-transform: uppercase;
  font-size: 1.375rem;
  line-height: 1.5rem;
  color: #4E6366;
  font-weight: 700;
`

export const Skill = styled.div`
  position: relative;
  width: ${props => props.width};
  height: 150px;
  background-color: #F2F2F1;
  margin-bottom: 40px;
  border-radius: 10px;
`

export const BackgroundSkills = styled.div`
  position: absolute;
  width: ${props => props.width};
  -webkit-transition: width .8s linear;
  -o-transition: width .8s linear;
  transition: 0.8s linear;
  transition-delay: 0.3s;
  background-color: #00CD6B;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
`

export const PercentBackgroundSkills = styled.span`
  color: #fff;
  line-height: 1.875rem;
  font-size: 1.125rem;
  font-weight: 700;
`
