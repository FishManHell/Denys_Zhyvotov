import styled from "styled-components";

export const SectionPortfolio = styled.section`
  width: 100%;
  background-color: #F2F2F1;
  padding: 100px 0;
`

export const TitleTextPortfolio = styled.h2`
  margin-bottom: 50px;
  text-align: center;
`


export const InformTextPortfolio = styled.p`
  margin-bottom: 100px;
  text-align: center;
`

export const MainBlockForSite = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`

export const BlockSite = styled.div`
  position: relative;
  border-radius: 20px;
  margin-right: 40px;
  margin-bottom: 40px;
  width: 360px;
  height: 300px;
  border: 1px solid;
  
  :hover {
    :before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 20px;
      background: #00A65E;
      opacity: 0.8;
    }
    border: none;
    a {
      position: relative;
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      z-index: 1;
      font-size: 2.5rem;
    }
  }
`

export const LinkForSite = styled.a`
  display: none;
`
