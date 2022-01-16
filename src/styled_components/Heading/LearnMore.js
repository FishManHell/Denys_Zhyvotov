import styled from "styled-components";


export const WrapperLearnMore = styled.div`
  position: absolute;
  visibility: ${props => props.visibility};
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: black;
  //opacity: 0.7;
`


export const WrapperInformation = styled.main`
  width: 1140px;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  //border: 1px solid #939393;
  border-radius: 2px;
  box-shadow: 0 0 10px rgb(12 3 25 / 80%);
  background-color: #fff;
`


export const LeftSection = styled.section`
  flex: 0 0 25%;
  //width: 300px;
  max-width: 100%;
  background-color: #222;
  font-weight: 300;
  padding: 2rem 1.5rem;
`

/// left Section


export const BlockImage = styled.div`
  border-radius: 50%;
  width: 250px;
  margin-bottom: 20px;
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
  font-size: 1.75rem;

`

export const Position = styled.h4`
  margin: 0.5rem 0;
  color: #636c72;
  font-size: 1.25rem;
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
  font-size: 1.5rem;
  margin-right: 10px;
`

export const TtitleText = styled.h4`
  color: #00dcc6;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.1;
`

export const SimpleText = styled.p`
  color: #636c72;
  margin-bottom: 1rem;
  font-weight: 300;
`

export const Line = styled.hr`
  background-color: #00dcc6;
  width: 60%;
  border: none;
  border-top: 1px solid rgba(0, 0, 0, .1);
  margin: 1rem 0 3rem 0;
`


export const BlockContact = styled.div`

`

export const BlockAdPhEm = styled.div`

`

export const AdPhEm = styled.p`
  color: #636c72;
  margin-bottom: 1rem;
  font-weight: 300;
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
  margin-bottom: 30px;

`

export const TitleBlockSkills = styled.h5`
  font-weight: 300;
  line-height: 1.5;
  color: #222;
  margin-bottom: 1rem;
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
  padding: 2rem 1rem;
  margin-bottom: 1rem;
  background-color: #e5eaee;
  border-radius: 0.3rem;

`

export const BlockExperience = styled.div`


`

export const WrapperForExperience = styled.div`
  display: flex;
  justify-content: space-around;
`

export const Experience = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ExperienceBar = styled.canvas`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #fff;
  margin-bottom: 20px;
`

export const BlockExperienceInform = styled.div`
  text-align: center;
`

export const TitleInform = styled.h5`
  margin: 0.5rem 0;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.1;
`

export const Information = styled.p`
  font-weight: 500;
  line-height: 1.1;
`

export const TitleRightBlock = styled.h2`
  margin: 0 0 2rem 0;
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.1;
`