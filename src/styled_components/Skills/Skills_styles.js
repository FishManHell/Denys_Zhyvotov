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
`


export const WrapperInfAboutSkills = styled.div`

`

export const TitleText = styled.h2`
  font-size: 1.875rem;
  line-height: 1.5rem;
  font-weight: bold;
  color: #4E6366;
  text-transform: uppercase;
  margin-bottom: 50px;
`

export const SomeTextAboutSkills = styled.p`
  margin-bottom: 50px;
  font-size: 1.125rem;
  line-height: 1.875rem;
`

export const BlockButtonContMe = styled.div`
  width: 185px;
  height: 60px;
  border: 3px solid #00CD6B;
`

export const ButtonContMe = styled.button`
  cursor: pointer;
  text-transform: uppercase;
  background: transparent;
  border: none;
  width: 100%;
  height: 100%;
  color: #00CD6B;
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 1.5rem;

`


export const WrapperSomeSkills = styled.div`

`


export const BlockItemSkills = styled.div`

`

export const TitleTextSkill = styled.h2`
  margin-bottom: 20px;
`

export const Skill = styled.div`
  position: relative;
  width: ${props => props.width};
  height: 40px;
  background-color: #F2F2F1;
  margin-bottom: 40px;
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
`

export const PercentBackgroundSkills = styled.span`
  color: #fff;
  line-height: 1.875rem;
  font-size: 1.125rem;
  font-weight: bold;
`
