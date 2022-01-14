import styled from "styled-components";

export const SectionEducExp = styled.section`
  background-color: #fff;
  width: 100%;
  padding: 100px 0;
`

export const WrapperEducExp = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

/// Education

export const WrapperEducation = styled.div`
  width: 100%;
  border-bottom: 1px solid;
  padding-bottom: 100px;

`

export const WrapperForInfItemEduc = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: space-between;
`

export const SectionGeneralInfo = styled.div`
  width: 48%;
`

export const InformText = styled.p`
  margin-bottom: 50px;
  font-size: 1.125rem;
  line-height: 1.5rem;
  font-weight: 400;
  color: #929292;
`


export const MainBlockForItemEduc = styled.div`
  width: 50%;
`

export const BlockItem = styled.div`
  border-radius: 10px;
  background-color: #D7E2F2;
  margin-bottom: 20px;
  padding: 15px;
  border: 2px solid #00CD6B;
  &:hover {
    cursor: pointer;
    transition: all linear 0.3s;
    transform: scale(1.03);
  }
`

export const TitleItem = styled.h3`
  font-size: 1.375rem;
  line-height: 1.5rem;
  margin-bottom: 25px;
  font-weight: 700;
  color: #4E6366;
`
export const TimeWhenStudy = styled.p`
  font-size: 1.125rem;
  margin-bottom: 20px;
  font-weight: 500;
  color: #929292;
`

export const Years = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 27px;
  background-color: #00CD6B;
  color: #fff;
  font-size: 0.875rem;
  line-height: 1.875rem;
  font-weight: 700;
`

export const Description = styled.p`
  border-top: 2px solid #000;
  padding-top: 35px;
  margin-top: 30px;
  font-size: 1.125rem;
  line-height: 1.5rem;
  font-weight: 400;
  color: #929292;

`


//Experience

export const WrapperExperience = styled.div`
  margin-top: 100px;
  width: 100%;
  padding-bottom: 100px;

`
