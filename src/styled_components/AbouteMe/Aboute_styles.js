import styled from "styled-components";

export const SectionAboutMe = styled.section`
  width: 100%;
  background-color: #F2F2F1;
  display: flex;
  align-items: center;
`

export const WrapperPhoto = styled.div`
  width: 600px;
`

export const PhotoItem = styled.img`
  width: 100%;
`
///PHOTO


export const WrapperInformation = styled.div`
  text-align: center;
  width: 90%;
  padding: 100px 0;
  margin: 0 auto;
`

export const SubtitleText = styled.p`
  padding-bottom: 50px;
  font-size: 1.125rem;
  line-height: 1.875rem;
  color: #929292;
  font-weight: 400;
`

export const MiniBlockAboutMe = styled.div`

`

export const MainBlockWithMiniBlock = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

export const MiniBlock = styled.div`
  width: 400px;
  border: 3px solid #282828;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 20px;
  background-color: #FDF5E6;
  
  &:hover {
    cursor: pointer;
    transition: all 0.4s linear;
    border: 3px solid #00CD6B;
    span {
      color: #282828;
    }
  }
  
`

export const Icon = styled.span`
  color: #00CD6B;
  font-size: 3rem;
`

export const InformationText = styled.p`
  margin-top: 20px;
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 1.875rem;
`