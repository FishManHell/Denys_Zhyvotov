import styled from "styled-components";


export const SectionPortfolio = styled.section`
  width: 100%;
  background-color: #F2F2F1;
  padding: 100px 0;
`

export const TitleTextPortfolio = styled.h2`
  margin-bottom: 50px;
`


export const InformTextPortfolio = styled.p`
  margin-bottom: 100px;
`


export const MainBlockForSite = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const BlockSite = styled.div`
  margin-right: 40px;
  margin-bottom: 40px;
  width: 300px;
  height: 300px;
  border: 1px solid;
`

export const LinkForSite = styled.a`
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 100%;
  height: 100%;
  z-index: 2;


  &:hover:before {
    content: '';
    position: absolute;
    transition: all 0.8s;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.7;
    background-color: #00A961;
    z-index: 1;
  }
`
