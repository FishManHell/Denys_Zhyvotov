import styled from "styled-components";


export const WrapperLearnMore = styled.div`
  position: fixed;
  visibility: ${props => props.visibility};
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  
  &:before {
    position: absolute;
    content: '';
    background-color: black;
    top: 0;
    left: 0;
    opacity: 0.7;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`


export const WrapperInformation = styled.main`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 1140px;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  box-shadow: 0 0 10px rgb(12 3 25 / 80%);
  background-color: #fff;
  z-index: 2;
`


export const LeftSection = styled.section`
  flex: 0 0 25%;
  max-width: 100%;
  background-color: #222;
  font-weight: 300;
  padding: 2rem 1.5rem;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`

/// left Section


export const BlockImage = styled.div`
  border-radius: 50%;
  width: 150px;
  margin: 0 auto 10px auto;
`

export const Photo = styled.img`
  border-radius: inherit;
  width: 100%;
`

export const BlockNamePosition = styled.div`

`

export const FullName = styled.h3`
  color: #00dcc6;
  font-weight: 400;
  font-size: 1.5rem;

`

export const Position = styled.h4`
  margin: 0.5rem 0;
  color: #636c72;
  font-size: 1.1rem;
`

export const BlockAbouteMe = styled.div`


`

export const TitleBlock = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`

export const TitleIcon = styled.span`
  color: #00dcc6;
  font-size: 1.2rem;
  margin-right: 5px;
`

export const TitleText = styled.h4`
  color: #00dcc6;
  font-size: 1.2rem;
  font-weight: 500;
`

export const SimpleText = styled.p`
  color: #636c72;
  margin-bottom: 1rem;
  font-weight: 300;
  font-size: 0.9rem;
`

export const Line = styled.hr`
  background-color: #00dcc6;
  width: 60%;
  border: none;
  border-top: 1px solid rgba(0, 0, 0, .1);
  margin: 0.5rem 0 1rem 0;
`


export const BlockContact = styled.div`

`

export const BlockAdPhEm = styled.div`

`

export const AdPhEm = styled.p`
  color: #636c72;
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 0.9rem;
`


export const MiniBlockConnect = styled.div`
  display: flex;
  flex-direction: column;
`

export const ItemLink = styled.a`
  color: #636c72;
  margin-bottom: 0.5rem;
  font-weight: 300;
  text-decoration: none;

  &:hover {
    color: #fff;
  }
`

export const IconTextLink = styled.span`
  margin-left: 0.5rem;
`


export const RightSection = styled.section`
  flex: 0 0 75%;
  padding: 2rem 1.5rem;
`

export const MainBlockSkills = styled.div`


`

export const WrapperForSkills = styled.div`
  display: flex;
`

export const RightSkills = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  padding-right: 15px;
`

export const LeftSkills = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  padding-right: 15px;
`

export const BlockSkills = styled.div`
  margin-bottom: 15px;

`

export const TitleBlockSkills = styled.h5`
  font-weight: 300;
  line-height: 1.5;
  color: #222;
  margin-bottom: 0.5rem;
`

export const SkillBar = styled.div`
  max-width: 100%;
  height: 10px;
  background-color: #e5eaee;
  position: relative;
  border-radius: 5px;

  &:before {
    content: '';
    position: absolute;
    width: ${props => props.width};
    height: 100%;
    background-color: #00dcc6;
    border-radius: inherit;
  }
`


export const BlockEducation = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: #e5eaee;
  border-radius: 0.3rem;

`

export const BlockExperience = styled.div`


`

export const BlockInformExperience = styled.div`

`

export const MainTextBlock = styled.div`
  display: flex;
  justify-content: space-between;
`
export const MainTextInform = styled.span`
  margin: 0.5rem 0;
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 1.1;
`

export const ElementInform = styled.ul`
  padding-left: 40px;
  margin-bottom: 15px;
`

export const ItemElementInform = styled.li`
  font-weight: 200;
  line-height: 1.5;
  color: #222;
  margin-bottom: 5px;
`





/// это skill bar - тут нужно указать правильней все


export const WrapperForExperience = styled.div`
  display: flex;
  justify-content: space-around;
`

export const Experience = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CircleItem = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 50%;
  background-color: #f5f5f5;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

`

export const BlockExperienceInform = styled.div`
  text-align: center;
`

export const TitleInform = styled.h5`
  margin: 0.5rem 0;
  font-size: 1.20rem;
  font-weight: 500;
  line-height: 1.1;
`

export const Information = styled.p`
  font-weight: 500;
  line-height: 1.1;
`

export const TitleRightBlock = styled.h2`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.1;
  color: #c60076;
`