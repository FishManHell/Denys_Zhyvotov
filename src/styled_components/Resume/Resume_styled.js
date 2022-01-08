import styled from "styled-components";

export const SectionResume = styled.section`
  padding: 100px 0;
  background-color: #F2F2F1;
`

export const WrapperResume = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const TitleText = styled.h2`
  margin-bottom: 50px;
  font-size: 1.5rem;
  line-height: 1.125rem;

`

export const InfAboutResume = styled.p`
  font-size: 1.125rem;
  line-height: 1.5rem;
  margin-bottom: 50px;

`


export const BlockButtonResume = styled.div`
  width: 216px;
  height: 55px;
  border: 3px solid #00CF74;
  
  &:hover {
    transform: scale(1.2);
    transition: 0.3s linear;
  }
`

export const DownloadButton = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #00CF74;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 1.25rem;
`
